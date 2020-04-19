function isTandemRepeat(inputString: string): boolean {
    let strLength = inputString.length;
    if (strLength % 2 !== 0)
        return false;
    return inputString.substr(0, strLength/2) === inputString.substr(strLength/2);
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
