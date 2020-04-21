function sortByHeight(a: number[]): number[] {
    let sorted = a.filter(n => n !== -1).sort((a, b) => a - b);
    let index = 0;
    a = a.map(n => {
        if (n !== -1) {
            index++;
            return sorted[index - 1];
        }
        return n;
    });
    return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));