const states = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
}

class MyPromise {
    constructor(exec) {
        this.state = states.PENDING
        this.queue=[]
        this.errorHandler=()=>{}
        this.finallyHandler=()=>{}

        try{
            // Resolve and Reject needs to have the context of the current promise as they will used inside the executor function.
            exec.call(null, this.resolve.bind(this), this.reject.bind(this));
        }
        catch(e){
            this.errorHandler(e)
        }
        finally {
            this.finallyHandler();
        }

    }

    resolve(data) {
        this.status = states.FULFILLED;
        this.queue.forEach(cb=> {
            data = cb(data);
        })
    }

    reject(reason) {
        this.status = states.REJECTED;
        this.errorHandler(reason);
    }

    then(fn){
        this.queue.push(fn);
        return this;
    }
    catch(fn){
        this.errorHandler = fn;
        return this;
    }
    finally(fn){
        this.finallyHandler=fn;
        return this;
    }


}
