function differentSymbolsNaive(s: string): number {
    let arr = s.split('');
    let distinctArr = [];
    arr.forEach((char) => {
        if(!distinctArr.includes(char))
            distinctArr.push(char);
    });
    return distinctArr.length;

    //Another approach:
    //return (new Set(s.split(''))).size;
}

console.log(differentSymbolsNaive('cabca'));
