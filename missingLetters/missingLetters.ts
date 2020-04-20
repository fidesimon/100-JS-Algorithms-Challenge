function missingLetters(str: string): string {
    let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const splittedStr = str.split('');
    let first = chars.indexOf(splittedStr[0]);

    for(let i = 0; i < splittedStr.length; i++){
        if(chars.indexOf(splittedStr[i]) != first){
            return chars[first];
        }
        first++;
    }
    return undefined;
}
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));