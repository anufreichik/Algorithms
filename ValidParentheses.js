
//Given a string s containing just
// the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
// Input: s = "()[]{}"
// Output: true
// Input: s = "([)]"
// Output: false
function isValid(str){
//create stack
    let stack=[]
    let map={
        '(':')',
        '{':'}',
        '[':']'
    }

    for (let i = 0; i < str.length; i++) {
        if(str[i]==='('||str[i]==='{'||str[i]==='[' ){
            stack.push(str[i])
        }
        else{
            let last = stack.pop();
            if(map[last]!==str[i]) return false
        }

    }

    return stack.length?false:true;
}
