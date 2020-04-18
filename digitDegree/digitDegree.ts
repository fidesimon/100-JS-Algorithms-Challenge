function digitDegree(n: number): number {
    let degree = 0;
    let sum = n;
    do{
        if(sum < 10){
            return degree;
        } else {
            sum = getSumOfDigits(sum);
            degree++;
        }
    }while(true);
}

function getSumOfDigits(n: number){
    let str = n.toString();
    let arr = str.split('');
    let nArr = arr.map((s)=>{ return +s;});
    let sum = 0;
    sum = nArr.reduce((previousValue, currentValue) => {
        return previousValue+currentValue;
    });
    return sum;
}

console.log(digitDegree(5));
console.log(digitDegree(100));
console.log(digitDegree(91));