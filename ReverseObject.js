//given object
const list={
    'Smith':{
        'John':123,
        'Alice':334,
    },
    'Thompson':{
        'John':3345,
        'Alice':888,
    }
}
//get result as format
const reversedList = {
    'John':{'Smith':123, 'Thompson':3345},
    'Alice':{'Smith':334, 'Thompson':888}
}

function rev(list){
    const result={}
    const lastNames = Object.keys(list);//['Smith', 'Thompson']

    lastNames.forEach(ln=>{
        const firstNames = Object.keys(list[ln]);//['John', 'Alice']
        firstNames.forEach(fn=>{
            if(result[fn])result[fn][ln]=list[ln][fn];
            else result[fn]={[ln]: list[ln][fn]}
        })
    })

    return result;
}

console.log(rev(list))
