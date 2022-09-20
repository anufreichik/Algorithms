//find missing number in unsorted array


let s=[1,3,2,4,6,8,5];

const findMissing=(s)=>{
    let sum=0;

    for(let i=1;i<=s.length+1;i++)
    {
        sum+=i;
    }

    for(let i=0;i<s.length;i++){
        sum-=s[i]
    }
   return sum;
}
