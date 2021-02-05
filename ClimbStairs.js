function climbStairs(n) {
    const ary =[1,1];
    if(n>1){
        for(let i = 2; i <= n ; i++){
            ary[i] = ary[i-1] + ary[i-2];
        }
    };
    return ary[ary.length-1]
}
