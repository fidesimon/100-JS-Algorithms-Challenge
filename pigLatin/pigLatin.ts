function pigLatin(str: string): string {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let firstVowelIndex = -1;
    const isFirstCharAVowel = vowels.indexOf(str[0]) >= 0 ? true : false;
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) >= 0) {
            firstVowelIndex = i;
            break;
        }
    }

    let retWord = str.substr(firstVowelIndex) + str.substr(0, firstVowelIndex);
    return retWord + (isFirstCharAVowel ? "way" : "ay");
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
