//Virtually split the array into a sorted and unsorted part
//Assume that the first element is already sorted and remaining elements are unsorted
//Select unsorted element and compare with all elements in the sorted part
//if the elements in sorted part is smaller than selected element, proceed to the next element in the unsorted part. Else, shift larger elements in the sorted part towards the right
//insert the selected element at the right index
//repeat till all the unsorted elements are placed in the right order
//[8,20,-2,4,-6]
function sort(arr) {
    //i represent unsorted on right
    //j represent sorted on left
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > numberToInsert) {//looping from right to left
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numberToInsert;
    }
    return arr;
}

console.log(sort([8, 20, -2, 4, -6]))
