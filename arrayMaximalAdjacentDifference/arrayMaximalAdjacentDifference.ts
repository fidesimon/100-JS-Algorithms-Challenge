function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maxAbsDiff = Math.abs(inputArray[0] - inputArray[1]);
    for(let i = 1; i < inputArray.length - 1; i++){
        let absDiff = Math.abs(inputArray[i]-inputArray[i+1]) 
        maxAbsDiff = absDiff > maxAbsDiff ? absDiff : maxAbsDiff;
    }
    return maxAbsDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));