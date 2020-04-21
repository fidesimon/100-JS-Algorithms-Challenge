function reverseAString(str: string): string {
    let strSplitted = str.split('').reverse();
    return strSplitted.join('');
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));