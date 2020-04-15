function arrayConversion(inputArray: number[]): number {
    return recursiveConversion(inputArray, true);
}

function recursiveConversion(inputArray: number[], isSum: boolean){
    let arrayAfterOperation: number[] = [];
    if(inputArray.length / 2 >= 1){
        for(let i = 0; i < inputArray.length; i+=2){
            arrayAfterOperation.push(isSum ? inputArray[i] + inputArray[i+1] : inputArray[i] * inputArray[i+1]);
        }
    } else {
        return inputArray;
    }
    return recursiveConversion(arrayAfterOperation, !isSum);
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
