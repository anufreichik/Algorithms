//SOLUTION #1
function pyramid(n){
    let cols = n*2-1;
    let midpoint = Math.floor(cols/2);
    for(let row=0; row<n;row++)
    {
        let stair='';
        for(let column=0;column<cols;column++)
        {
            if(midpoint-row<=column && midpoint+row>=column)
                stair+='#';
            else
                stair+=' ';
        }
        console.log(stair);
    }
}

//SOLUTION #2
function pyramid(n, row=0, level=''){
    let cols = n*2-1;
    let midpoint = Math.floor(cols/2);

    if(row===n) return;

    if(level.length===2*n-1)
    {
        console.log(level);
        return pyramid(n, row+1)
    }

    if(midpoint-row<=level.length && midpoint+row>=level.length)
        level+='#';
    else
        level+=' ';

    pyramid(n, row,level)
}
