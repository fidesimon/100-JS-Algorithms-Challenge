function alphabeticShift(inputString: string): string {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let inputStringSplitted = inputString.split('');
    let outputString = '';

    inputStringSplitted.forEach((char)=>{
        let charIndex = alphabet.indexOf(char);
        outputString += charIndex < alphabet.length - 1 ? alphabet[charIndex + 1] : alphabet[0];
    });
    return outputString;
}

console.log(alphabeticShift('crazy'));