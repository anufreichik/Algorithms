const obj={
    bar:1,
    foo(){
        console.log( this.bar);
    },
    baz:()=>console.log(this.bar),
}

obj.foo();
const _foo = obj.foo;
//_foo.bind();
//_foo.apply();

obj.baz();


function test(){
    return ()=>this.foo;
}

test.call({foo:1})();
