//js odnopotochnii
//event loop

const first = ()=>console.log('First')
const second = ()=>console.log('Second')
const third = ()=>console.log('Third')

first();//put funciton first in call stack then throw it from call stack after it done
setTimeout(second,0); //webAPI , callback que
third();//put in call stack, execute, done

