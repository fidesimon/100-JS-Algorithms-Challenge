function reflectString(inputString: string): string {
    const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const charsLength = chars.length;

    let retStr = '';
    for (let i = 0; i < inputString.length; i++) {
        let index = chars.indexOf(inputString[i]);
        retStr += chars[charsLength - index - 1];
    }

    return retStr;
}