function newNumeralSystem(number: string): string[] {
    let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numberVal = chars.indexOf(number);
    let retArr = [];
    for(let i = 0; i <= Math.ceil(numberVal/2); i++){
        retArr.push(`${chars[i]} + ${chars[numberVal - i]}`);
    }

    return retArr;
}

console.log(newNumeralSystem('G'));