function extractMatrixColumn(matrix: number[][], column: number): number[] {
    let resultColumn = [];
    matrix.forEach((element) => {
        resultColumn.push(element[column]);
    })

    return resultColumn;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));