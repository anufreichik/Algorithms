Array.prototype.myMap=function(callback){
  if(Array.isArray(this)){
      if(typeof callback==='function'){
          const result=[]
          for(let i=0;i<this.length;i++){
                result.push(callback(this[i], i, this))
          }
          return result;
      }
      else{
          throw new TypeError('Callback is not a function')
      }
  }
  else
      throw new TypeError('Wrong type');

}

Array.prototype.myFilter = function(callback){
    if(Array.isArray(this)){
        if(typeof callback==='function'){
            const result=[]
            for(let i=0;i<this.length;i++){
                if(callback(this[i]))
                    result.push(this[i])
            }
            return result;
        }
        else{
            throw new TypeError('Callback is not a function')
        }
    }
    else
        throw new TypeError('Wrong type');

}

Array.prototype.myReduce = function(callback, initVal){
    if(Array.isArray(this)){
        if(typeof callback==='function'){
            let acc = arguments.length>=2?initVal:this[0];

            let iStart = arguments.length>=2?0:1;
            for(let i=iStart;i<this.length;i++){
                acc = callback(acc,this[i],i,this)
            }
            return acc;
        }
        else{
            throw new TypeError('Callback is not a function')
        }
    }
    else
        throw new TypeError('Wrong type');

}



const newArr = [1,2,3].myMap(el=>el*2)
console.log(newArr)
const newArr1 = [1,2,3].myFilter(el=>el>2)
console.log(newArr1)
const newArr2 = [1,2,3].myReduce((acc, cur)=>acc+cur)
console.log(newArr2)

