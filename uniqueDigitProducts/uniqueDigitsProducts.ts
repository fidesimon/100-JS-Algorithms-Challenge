function uniqueDigitProducts(a: number[]): number {
    let distinctArr = [];
    for (let i = 0; i < a.length; i++) {
        let prod = product(a[i]);
        if (!distinctArr.includes(prod))
            distinctArr.push(prod);
    }

    return distinctArr.length;
}

function product(n: number) {
    let sArr = n.toString().split('');
    return +sArr.reduce((p, q) => { return ((+p) * (+q)).toString(); })
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));