function mostFrequentDigitSum(n: number): number {
    let obj = {};
    let x = n;
    while (x > 0) {
        if (obj.hasOwnProperty(x)) {
            obj[x]++;
        } else {
            obj[x] = 1;
        }
        x = x - sum(x);
    }

    let mostFrequent = '';
    let count = 0;
    for (let key in obj) {
        if (obj[key] > count) {
            mostFrequent = key;
            count = obj[key];
        }

    }
    return +mostFrequent;
}

function sum(x: number) {
    let sArr = x.toString().split('');
    return +sArr.reduce((p, c) => { return ((+p) + (+c)).toString() });
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));