//write a function that accepts a positive number N.
//the function should console log a step shape
//with N levels using the # character.
//Make sure the step has spaces on the right hand side

//SOLUTION 1
function steps(n){
    for(let i=1; i<=n;i++)
    {
        console.log('#'.repeat(i) + ' '.repeat(n-i));
    }
}

//SOLUTION 2
function steps(n){
    for(let row=0; row<n;row++)
    {
        let stair='';
        for(let column=0;column<n;column++)
        {
            if(row<=column)
                stair+='#';
            else
                stair+=' ';
        }
        console.log(stair)
    }
}

//SOLUTION 3

function steps(n, row=0, stair=''){
    if(n===row){
        return;
    }
   if(n===stair.length)
   {
       console.log(stair);
       return steps(n, row+1);
   }
   if(stair.length<=row)
       stair+='#'
   else
       stair+=' ';
   steps(n, row, stair);
}

