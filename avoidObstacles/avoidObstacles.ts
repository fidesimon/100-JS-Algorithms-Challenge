function avoidObstacles(inputArray: number[]): number {
    let minJumpLength = inputArray.sort()[inputArray.length - 1];
    for (let i = minJumpLength + 1; i > 0; i--) {
        minJumpLength = inputArray.every((item) => { return item % i }) ? i : minJumpLength;
    }
    return minJumpLength;
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));