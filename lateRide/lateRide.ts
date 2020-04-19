function lateRide(n: number): number {
    const hours = Math.floor(n/60);
    const minutes = n % 60;
    return getSum(hours.toString()) + getSum(minutes.toString());
}

function getSum(s: string){
    if(s.length == 1)
        return +s;
    let sum = 0;
    s.split('').forEach(str => {
        sum += +str;
    });
    return sum;
}

console.log(lateRide(240));
console.log(lateRide(808));
