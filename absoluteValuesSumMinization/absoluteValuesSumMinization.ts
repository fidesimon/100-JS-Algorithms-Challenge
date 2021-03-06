function absoluteValuesSumMinimization(a: number[]): number {
    const arr = a.sort();
    const isEven = arr.length % 2 === 0;

    return isEven ? arr[arr.length/2 - 1] : arr[Math.floor(arr.length/2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));