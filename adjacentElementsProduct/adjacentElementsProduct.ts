function adjacentElementsProduct(inputArray: number[]): number {
    let largestProduct = inputArray[0] * inputArray[1];
    inputArray.reduce((a:number, b:number)=>{
        largestProduct = largestProduct > a * b ? largestProduct : a * b;
        return b;
    });
    return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));