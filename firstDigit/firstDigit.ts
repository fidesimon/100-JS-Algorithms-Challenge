function firstDigit(inputString: string): string {
    let arr = inputString.split('');
    for(let i = 0; i < arr.length; i++){
        if(!isNaN(+arr[i]))
            return arr[i];
    }
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
