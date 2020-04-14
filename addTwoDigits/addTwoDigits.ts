function addTwoDigits(n: any): number {
    let strValueSplitted = n.toString().split('');
    let sum = 0;
    
    return strValueSplitted.reduce((a: string, b: string) => {
        return + a + + b;
    });
}

console.log(addTwoDigits(29));