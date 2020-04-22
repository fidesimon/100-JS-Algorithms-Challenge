function sumOfTwo(a: number[], b: number[], v: number): boolean {
    let filteredArr = b.filter(n => v - a[a.length - 1] <= n);
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < filteredArr.length; j++) {
            if (a[i] + filteredArr[j] == v)
                return true;
        }
    }
    return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));