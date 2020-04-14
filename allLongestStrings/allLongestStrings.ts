function allLongestStrings(inputArray: string[]): string[] {
    let length = 0;
    let outputArray = [];
    inputArray.forEach((str: string) => {
        if(length < str.length){
            length = str.length;
            outputArray = [str];
        } else if (length == str.length) {
            outputArray.push(str);
        }
    });
    return outputArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));