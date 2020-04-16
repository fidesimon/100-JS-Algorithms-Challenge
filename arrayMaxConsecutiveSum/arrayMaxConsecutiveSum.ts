function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let sumArr: number[] = [];
    for (let i = 0; i < inputArray.length - k + 1; i++) {
        let value = 0;
        for(let j = 0; j < k; j++){
            value += inputArray[i+j];
        }
        sumArr.push(value);
    }

    return sumArr.sort((a,b)=>{ return a > b ? 1 : -1})[sumArr.length - 1];
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));