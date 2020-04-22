function switchLights(a: number[]): number[] {
    let arr = a.map(n => { return n === 1; });
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            for (let j = 0; j <= i; j++) {
                arr[j] = !arr[j];
            }
        }
    }
    return arr.map(n => { return n ? 1 : 0 });
}


console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));