function palindrome(str) {
    return str.replace(/\w/g, '').toLowerCase().split('').reverse().join('') === str.replace(/\w/g, '').toLowerCase();
}

//solution 2
function palindrome(str) {
    for(let i=0;i<str.length/2;i++)
    {
        if(str[i]!==str[str.length-1-i])return false;
    }
    return true;
}
//solution 3
function palindrome(str) {
   return str.split('').every((el, i)=>{
        return el===str[str.length-1-i]
    })

}