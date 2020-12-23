//reverseInt(15)=>51
//reverseInt(-34)=>-43

function reverseInt(n) {
    return parseInt(String(n).split('').reverse().join('')) * Math.sign(n);
}