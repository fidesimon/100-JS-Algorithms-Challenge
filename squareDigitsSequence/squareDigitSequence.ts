function squareDigitsSequence(a0: number): number {
    let arrOfSequences = [a0];
    let currentValue = a0;
    while(true){
        currentValue = getSquareSum(currentValue);
        if(arrOfSequences.indexOf(currentValue) >= 0){
            arrOfSequences.push(currentValue);
            break;
        }

        arrOfSequences.push(currentValue);
    }

    return arrOfSequences.length;
}

function getSquareSum(n: number){
    let str = n.toString().split('');
    let sum = 0;
    str.forEach(digit => {
        sum += Math.pow(+digit, 2);
    });
    return sum;
}


console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));