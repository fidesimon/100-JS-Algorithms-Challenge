function firstNotRepeatingCharacter(s: string): string {
    let obj: object = {};
    let arr = [];
    let splitted = s.split('');
    for (let i = 0; i < splitted.length; i++) {
        if (obj.hasOwnProperty(splitted[i])) {
            return firstNotRepeatingCharacter(s.replace(new RegExp(splitted[i], "g"), ""));

        } else {
            obj[splitted[i]] = splitted[i];
            arr.push(splitted[i]);
        }
    }
    return arr.length !== 0 ? arr[0] : '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
