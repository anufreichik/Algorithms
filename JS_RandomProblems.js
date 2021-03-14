//Дана функция, она принимает в качестве аргументов строки '*', '1', 'b', '1c', реализуйте ее так, что бы она вернула строку '1*b*1c'

function getStr() {
    return [].slice.call(arguments, 1).join(arguments[0])
}


function getStr(){
    let result=''
    for(let i=1;i<arguments.length;i++){
        result=result+arguments[i]+arguments[0]
    }
}

//Дано дерево, надо найти сумму всех вершин.


let sum = 0;
function getSum(obj) {
    sum += obj.valueNode;
    if (obj.next != null) {
        for (let i = 0; i < obj.next.length; i++) {
            getSum(obj.next[i]);
        }
    }

    return sum;
}


//. Надо написать функцию, которая вернет «hello world», но при этом в теле функции нельзя использовать ни цифры, ни буквы, а циклы, массивы, объекты можно, но без цифр.




