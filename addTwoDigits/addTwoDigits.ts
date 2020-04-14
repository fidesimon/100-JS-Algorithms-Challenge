function addTwoDigits(n: any): number {
    let strValueSplitted = n.toString().split('');
    let sum = 0;

    strValueSplitted.forEach((val) => {
        sum += +val;
    });
    return sum;
}

console.log(addTwoDigits(29));