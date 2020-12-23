//anagram is take is one string and create other string of the same letters and number of letters
//rail safety --> fairy tales
//only consider chars, not sapces or punctuations
//consider capital letters
//RegExp
///\w/ - matching alphanumeric chars from the basic latin alphabet, including the underscore.

const word = "HI THERE!!!";
word.replace(/[^\w]/g,'').toLowerCase();

//SOLUTION 1
function anagram(stringA, stringB){
   let aCharMap = buildCharMap(stringA);
    let bCharMap = buildCharMap(stringB);
    if(Object.keys(aCharMap).length!==Object.keys(bCharMap).length)
    {
        return false;
    }
    for(let el in aCharMap){
        if(aCharMap[el]!==bCharMap[el]) return false;
    }
    return true;

}

function buildCharMap(str){
    const charMap={}
    for(let char of str.replace(/[^\w]/g,'').toLowerCase())
    {
        charMap[char]=charMap+1||1;
    }
    return charMap;
}

//SOLUTION 2
function anagram(stringA, stringB){

    let str1 = stringA.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
    let str2 = stringB.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');

    return str1===str2;
}