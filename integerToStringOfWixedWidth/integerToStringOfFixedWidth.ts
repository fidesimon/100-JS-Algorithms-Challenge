function integerToStringOfFixedWidth(number: number, width: number): string {
    const strVal = number.toString();
    if (strVal.length >= width) {
        return strVal.substr(strVal.length - width);
    } else {
        return "0".repeat(width - strVal.length) + strVal;
    }
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
