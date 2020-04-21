function sumAllPrimes(num: number): number {
    let sum = 2;
    for(let i = 3; i <= num; i+=2){
        let flag = false;
        for(let j = 3; j < Math.floor(i/2); j+=2){
            if(i % j === 0){
                flag = true;
                break;
            }
        }
        if(!flag)
            sum+=i;
    }
    return sum;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));