function seatsInTheater(nCols: number, nRows: number, col: number, row: number): number {
    return (nCols - col) * (nRows - row) + (nRows - row);
}

console.log(seatsInTheater(16, 11, 5, 3));