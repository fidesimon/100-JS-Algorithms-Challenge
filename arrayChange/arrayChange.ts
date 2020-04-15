function arrayChange(inputArray: number[]): number {
    let counter = 0;
    for(let i = 1; i < inputArray.length; i++){
        if(inputArray[i] <= inputArray[i-1]){
            counter += inputArray[i-1] - inputArray[i] + 1;
            inputArray[i]++;
        }
    }
    return counter;
}

console.log(arrayChange([1, 1, 1]));