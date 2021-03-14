const arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length / 2; i++) {
    let temp1 = arr[i];
    let temp2 = arr[arr.length-i-1]
    arr[i] = temp2;
    arr[arr.length-i-1] = temp1;

}
console.log(arr); // [6, 5, 4, 3, 2, 1]
