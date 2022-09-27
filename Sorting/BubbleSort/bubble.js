//compare adjacent elements in the array and swap the positions if they are not in the intended order
// repeat the instruction above as you step through each element in the array
//once you step through the whole array with no swaps, the array is sorted

function sort(arr){
    let swapped = true;
    while(swapped){
        for(let i=0;i<arr.length-1;i++){
            swapped=false;
            if(arr[i]>arr[i+1]){
                //swap
                swapped=true;
                let temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i]=temp;
            }
        }
    }
   return arr;
}

console.log(sort([-6,20,8,-2,4]))
