//white a function that returns the number of vewels used in a string
//a,e,i,o,u

//SOLUTION 1
function vowels(str){
    const v=['a','e','i','o','u'];
    let count=0;
    for(let el of str.toLowerCase())
    {
        if (v.includes(el)) count++;
    }
    return count;
}

//SOLUTION 2
function vowels(str){
   return str.replace(/[^aeiou]/,'').length;
}

//SOLUTION 3
function vowels(str){
   const matches =  str.match(/[aeiou]/gi);
   return matches ? matches.length:0;
}