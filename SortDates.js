//Есть массив в котором лежат объекты с датами, отсортировать по датам.
const arr = [{date: '10.01.2017'}, {date: '05.11.2016'}, {date: '21.13.2002'}];
let arrFormatted = arr.map(el=>
{
    let dArr = el.date.split('.');
    let elDate = new Date(Number(dArr[2]), Number(dArr[1]),Number(dArr[0]));
    return elDate;
});
arrFormatted.sort(function (a, b) {
    if (a.date - b.date < 0) {
        return false;
    } else {
        return true;
    }
});

let res = arrFormatted.map(el=>{
    return {date:el}
})

console.log(JSON.stringify(res))
