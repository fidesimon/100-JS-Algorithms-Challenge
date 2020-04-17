function candies(n: number, m: number): number {
    return Math.floor(m / 3) * n;
}

console.log(candies(3, 10));