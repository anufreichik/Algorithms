String.prototype.stringVowels = function(){
    const vowels = ['a', 'o', 'e', 'i', 'u']
    return this.split('').filter(el=>vowels.includes(el)).length;
}

let str = 'daniela'
console.log(str.stringVowels())
