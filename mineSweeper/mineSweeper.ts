function minesweeper(matrix: boolean[][]): number[][] {
    let retArr = [];
    let length = matrix.length;
    for (let i = 0; i < length; i++) {
        retArr.push([]);
        for (let j = 0; j < length; j++) {
            let ret = 0;
            if (i == 0) {
                if (matrix[i + 1][j])
                    ret++;
                if (j >= 0 && j < length - 1) {
                    if (matrix[i][j + 1])
                        ret++;
                    if (matrix[i + 1][j + 1])
                        ret++;
                    if (matrix[i + 1][j])
                        ret++;
                } else {
                    if (matrix[i][j - 1])
                        ret++;
                    if (matrix[i + 1][j - 1])
                        ret++;
                }
            } else if (i == length - 1) {
                if (matrix[i - 1][j])
                    ret++;
                if (j >= 0 && j < length - 1) {
                    if (matrix[i - 1][j + 1])
                        ret++;
                    if (matrix[i][j + 1])
                        ret++;
                } else {
                    if (matrix[i - 1][j - 1])
                        ret++;
                    if (matrix[i][j - 1])
                        ret++;
                }
            } else {
                if (matrix[i + 1][j])
                    ret++;
                if (matrix[i - 1][j])
                    ret++;
                if (j >= 0 && j < length - 1) {
                    if (matrix[i - 1][j + 1])
                        ret++;
                    if (matrix[i + 1][j + 1])
                        ret++;
                    if (matrix[i][j + 1])
                        ret++;
                }
                if (j <= length - 1 && j > 0) {
                    if (matrix[i + 1][j - 1])
                        ret++;
                    if (matrix[i - 1][j - 1])
                        ret++;
                    if (matrix[i][j - 1])
                        ret++;
                }
                if (j !== 0 && j !== length - 1) {
                    if (matrix[i - 1][j])
                        ret++;
                    if (matrix[i + 1][j])
                        ret++;
                }
            }
            retArr[i][j] = ret;
        }
    }
    return retArr;
}

console.log(minesweeper([[true, false, false],
[false, true, false],
[false, false, false]]));