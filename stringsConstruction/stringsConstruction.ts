function stringsConstruction(a: string, b: string): number {
    let arr: number[] = [];
    let aSplitted = a.split('');
    let bSplitted = b.split('');
    for (let i = 0; i < aSplitted.length; i++) {
        arr.push(bSplitted.filter(n => n === aSplitted[i]).length);
    }
    return Math.min(...arr);
}

console.log(stringsConstruction('abc', 'abccba'));