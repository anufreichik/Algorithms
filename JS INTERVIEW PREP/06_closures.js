function createFrameworkManager(){
    const fw = ['Angular', 'React', 'Vue']

    return{
        print:function(){
            console.log(fw.join(' '))
        },
        add:function(framework){
            fw.push(framework)
        }
    }
}

const manager = createFrameworkManager();
manager.print();
manager.add('ASP.NET');
manager.print();


//set Timout

const fib=[1,2,3,5,8,13]
for(var i=0; i<fib.length;i++){
    (function(j){
        setTimeout(function(){
            console.log(`fib[${j}]=${fib[j]}`)
        },1500)
    })(i)

}
