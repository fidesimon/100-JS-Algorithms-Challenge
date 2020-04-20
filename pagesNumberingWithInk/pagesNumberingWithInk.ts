function pagesNumberingWithInk(current: number, numberOfDigits: number): number {
    while (numberOfDigits >= 0) {
        let length = current.toString().length;

        if (length < numberOfDigits) {
            numberOfDigits -= length;
            let nextLength = (current + 1).toString().length;
            if (nextLength > numberOfDigits)
                return current;
            current++;
        } else {
            numberOfDigits -= length;
        }

    }
    return current;
}

console.log(pagesNumberingWithInk(1, 5));
console.log(pagesNumberingWithInk(21, 5));