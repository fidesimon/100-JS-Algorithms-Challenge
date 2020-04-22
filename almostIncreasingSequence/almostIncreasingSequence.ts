function almostIncreasingSequence(sequence: number[]): boolean {
    if (isArrayIncreasing(sequence))
        return true;

    let count = 0;
    for (let i = 0; i < sequence.length - 1; i++) {
        let arr = [...sequence];
        arr.splice(i, 1);
        if (!isArrayIncreasing(arr))
            count++;
    }

    return count <= 1 ? true : false;
}

function isArrayIncreasing(arr: number[]) {
    let currValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (currValue <= arr[i])
            return false;
        currValue = arr[i];
    }
    return true;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 3, 2])) 