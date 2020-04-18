function circleOfNumbers(n: number, firstNumber: number): number {
    return n - Math.abs(firstNumber - (n/2));
}

console.log(circleOfNumbers(10, 2));