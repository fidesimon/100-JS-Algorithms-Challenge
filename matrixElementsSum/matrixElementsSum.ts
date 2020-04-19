function matrixElementsSum(matrix: any[][]): number {
    let sum = 0;
    let hauntedIndexes = [];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] == 0 && !hauntedIndexes.includes(j))
                hauntedIndexes.push(j);
            else if (!hauntedIndexes.includes(j))
                sum += matrix[i][j];
        }
    }

    return sum;
}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));
