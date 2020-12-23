function reverse(str) {
    return str.split('').reverse().join('');
}

//solution2
function reverse(str) {
    let reversed='';
   for(let i=0;i<str.length;i++)
   {
       reversed=str[i]+reversed;
   }
   return reversed;
}

//solution 3
function reverse(str) {
    return str.split('').reduce((reverse, char)=> char+reverse,'');
}
