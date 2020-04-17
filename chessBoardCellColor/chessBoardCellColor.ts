function chessBoardCellColor(cell1: string, cell2: string): boolean {
    const isCell1Black = isCellBlack(cell1);
    const isCell2Black = isCellBlack(cell2);
    return (isCell1Black && isCell2Black) || (!isCell1Black && !isCell2Black);
}

function isCellBlack(cell: string): boolean{
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const cellLetter = cell.split('')[0];
    const cellNumber = cell.split('')[1];
    return (isOdd(letters.indexOf(cellLetter)+1) && isOdd(cellNumber))|| (!isOdd(letters.indexOf(cellLetter)+1) && !isOdd(cellNumber));
}

function isOdd(number){
    return number % 2 == 1;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
