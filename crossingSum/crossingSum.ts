function crossingSum(matrix: number[][], a: number, b: number): number {
    let rowSum = matrix[a].reduce((p, c) => (p + c));
    let colSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        colSum += matrix[i][b];
    }
    return rowSum + colSum - matrix[a][b];
}

console.log(crossingSum([[1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3]], 1, 3));