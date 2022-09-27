//Identify the pivot element in the array
 // pick first element or last element or random element or median

//put everything that is smaller than the pivot into a 'left' array and everything that is greater than the pivot into a 'right' array
//repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by defenition
//repeatedly concat the left array , pivot and right array till one sorted array remains

function sort(arr) {
    if(arr.length<2) return arr;
    let pivot = arr[arr.length-1];
    let left=[];
    let right =[];

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot)left.push(arr[i])
        else right.push(arr[i])
    }

    return [...sort(left), pivot, ...sort(right)]

}

console.log(sort([8, 20, -2, 4, -6]))
