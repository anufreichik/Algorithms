//maxChar('aaabbbbbbbbc') =>'b'
//maxChar('ssssff111111111')=>'1'

//which is the most common character in the string?
//Does string A have the same characters as string B?
//Does the given string have any repeated characters in it?

//SOLUTION 1
function maxChar(str) {
    const charMap={}
    let max=0;
    let maxChar=''
    for(let char of str){
        if(charMap[char]){
            charMap[char]++
        }
        else{
            charMap[char]=1
        }
    }
    for(let key in charMap)
    {
        if(charMap[key]>max)
        {
            max=charMap[key];
            maxChar=key;
        }
    }
    return maxChar;
}

//SOLUTION 2
function maxChar(str) {
    const chars = {};
    let max = 0;
    let maxChar = '';
    str.split('').forEach(el => chars[el]? chars[el]++ : chars[el] = 1);
    for (let el in chars) {
        if(chars[el] > max) {
            max = chars[el];
            maxChar = el;
        }
    }
    return maxChar;
}