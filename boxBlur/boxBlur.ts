function boxBlur(image: number[][]): number[][] {
    let blurredImage: number[][] = [];
    for (let i = 1; i <= image.length - 2; i++) {
        blurredImage.push([]);
        for (let j = 1; j <= image.length - 2; j++) {
            let subArr1Sum = image[i - 1].slice(j - 1, j + 2).reduce(reducer);
            let subArr2Sum = image[i].slice(j - 1, j + 2).reduce(reducer);
            let subArr3Sum = image[i + 1].slice(j - 1, j + 2).reduce(reducer);
            blurredImage[i - 1].push(Math.floor((subArr1Sum + subArr2Sum + subArr3Sum) / 9));
        }
    }
    return blurredImage;
}

function reducer(previousValue, currentValue) {
    return previousValue + currentValue;
}

console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]));
console.log(boxBlur([[10, 3, 2, 2], [3, 3, 2, 2], [3, 3, 1, 1], [1, 1, 1, 1]]));