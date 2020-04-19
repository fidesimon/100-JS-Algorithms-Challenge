function findClosestPair(numbers: number[], sum: number): number {
    let closestPairDistance: number;
    numbers.forEach((num, index) => {
        for (let i = index; i < numbers.length; i++) {
            if (Math.abs(num) + Math.abs(numbers[i]) == sum) {
                if (closestPairDistance == null || closestPairDistance > i - index) {
                    closestPairDistance = i - index;
                }
            }
        }
    });

    return closestPairDistance == null ? -1 : closestPairDistance;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));