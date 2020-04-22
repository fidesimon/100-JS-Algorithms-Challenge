function sumOddFibonacciNums(num: number): number {
    let oddFibonacci = [1, 1];
    let fibonacci = [0, 1, 1, 2];
    let count = 1;
    while (oddFibonacci[count] <= num) {
        let nextVal = fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1];
        if (nextVal % 2 !== 0) {
            if (nextVal > num) {
                break;
            }
            oddFibonacci.push(nextVal);
            count++;
        }
        fibonacci.push(nextVal);
    }

    return oddFibonacci.reduce((p, c) => (p + c));
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));