function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    return inputArray.map((item) => {
        if (item == elemToReplace)
            return substitutionElem;
        else
            return item;
    })
}

console.log(arrayReplace([1, 2, 1], 1, 3));