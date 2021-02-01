let map=new Map();

map
    .set('str','string')
    .set(1,'number')
    .set(true,'bool');

console.log(map.size)
console.log(map.get(1))
console.log(map.has(1))
//map.delete(1)
//map.clear()
console.log(map.values())

const mapIter = map.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // Object



//key(), values(), entries()
const values = [...map.values()];
const keys=[...map.keys()];
const entries=[...map.entries()];

values.forEach(el=>console.log(el));
keys.forEach(el=>console.log(el));
entries.forEach(el=>console.log(el));


let map1 = new Map([
    [1,1], [2,2]
])

const map2=new Map(map.entries());
const[[key,value], second, third]=map;
console.log(key,value)

for(let [key,val] of map)
{
    console.log(key,val)
}

map.forEach((value, key,map)=>console.log(value, key, map))





