let counter=12
let original=[1,2,3,4,5,6,7,8,9,10,11,12]
let arr=[]

while(counter>0){
    let randInd = Math.floor(Math.random() * counter);
    let cur = original[randInd]
    original.splice(randInd,1)
    arr.push(cur)
    counter--;

}

const objArr = [
    {id: 1, emoji: '1', open: false},
    {id: 2, emoji: '1', open: false},
    {id: 3, emoji: '2', open: false},
    {id: 4, emoji: '2', open: false},
    {id: 5, emoji: '3', open: false},
    {id: 6, emoji: '4', open: false},
    {id: 7, emoji: '4', open: false},
    {id: 8, emoji: '4', open: false},
    {id: 9, emoji: '5', open: false},
    {id: 10, emoji: '5', open: false},
    {id: 11, emoji: '6', open: false},
    {id: 12, emoji: '6', open: false},
]

let newArr = arr.map((el, i)=>objArr.find(em=>em.id===el))

console.log(newArr)
