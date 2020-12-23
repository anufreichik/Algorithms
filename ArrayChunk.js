//ARRAY CHUNK
//Given an array and chunk size, divide the array into many subarrays where each subarray is of the provided size
//chunk([1,2,3,4,5], 2) --> [[1,2], [3,4],[5])
//SOLUTION 1
function chunk(array, size) {
    let cur = 0;
    let chunked = [];
    let innerArr = [];

    for (let el of array) {
        if (cur < size) {
            innerArr.push(el);
            cur++;
        } else {
            cur = 0;
            chunked.push(innerArr);
            innerArr = [];
            innerArr.push(el);
            cur++;
        }

    }

    if (innerArr.length > 0) chunked.push(innerArr)

    return chunked;
}

//SOLUTION 2
function chunk1(array, size) {
    let chunked = [];

    for (let el of array) {
        const last = chunked[chunked.length - 1];
        //check if last not exists or last length=== size
        if (!last || last.length === size) {
            chunked.push([el]);
        }else {
            last.push(el);
        }
    }
    return chunked;
}

//SOLUTION 3
function chunk2(array, size) {
    let chunked = [];
    let ind=0;
    while(ind<array.length)
    {
        let chunk = array.slice(ind,ind+size);
        chunked.push(chunk);
        ind=ind+size;
    }
    return chunked;
}
