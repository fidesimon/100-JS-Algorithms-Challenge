function bishopAndPawn(bishop: string, pawn: string): boolean {
    let canBishopCapturePawn = false;
    let bishopPosition = getPiecePosition(bishop);
    let pawnPosition = getPiecePosition(pawn);
    return Math.abs(bishopPosition[0] - pawnPosition[0]) == Math.abs(bishopPosition[1] - pawnPosition[1]);
}

function getPiecePosition(pos: string){
    const letterPos = ['a','b','c','d','e','f','g','h'];
    return [letterPos.indexOf(pos.split('')[0]), +pos.split('')[1] - 1];
}

console.log(bishopAndPawn('a1', 'c3'));