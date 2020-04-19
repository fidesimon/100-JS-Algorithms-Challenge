function isLucky(n: number): boolean {
    const str = n.toString();
    const firstHalf = str.substr(0, str.length/2);
    const secondHalf = str.substring(str.length/2);
    const firstSum = getSum(firstHalf);
    const secondSum = getSum(secondHalf);
    
    return firstSum === secondSum;
}

function getSum(str: string){
    let sum = 0;
    str.split('').forEach(n=>{
        sum += +n;
    });
    return sum;
}

console.log(isLucky(1230));
console.log(isLucky(239017));