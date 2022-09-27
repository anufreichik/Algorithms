//divide the array into sub arrays, each containing only one element(an array with one element is considered sorted)

//repeatedly merge the sub array to produce new sorted sub arrays until there is only one sub array remaining. Tha will be the sorted array.

function sort(arr) {
    if (arr.length < 2) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(sort(left), sort(right));

}

function merge(left, right){
    const sortedArr=[];
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sortedArr.push(left.shift());

        }
        else{
            sortedArr.push(right.shift());

        }
    }
    return [...sortedArr,...left, ...right];

}

console.log(sort([8, 20, -2, 4, -6]))
