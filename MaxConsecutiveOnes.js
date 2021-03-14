
//Given a binary array, find the maximum number of consecutive 1s in this array.
const findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxcount=0;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]===1)
        {
            count++;
            if(count>=maxcount)
                maxcount = count;
        }

        else {
            count=0;
        }
    }

    return maxcount;
};


/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const longestOnes = function(arr, K) {
    let i=0;
    let j=0;



    for( i=0;i<arr.length;i++)
    {
        if(arr[i]===0)
            K--;

        if(K<0){
            if(arr[j]===0){
                K++;
            }
            j++;
        }

    }
    return i-j

};
