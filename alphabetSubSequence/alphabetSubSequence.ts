function alphabetSubsequence(s: string): boolean {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let sSplitted = s.split('');
    for(let i = 0; i < sSplitted.length -1; i++){
        if(alphabet.indexOf(sSplitted[i]) >= alphabet.indexOf(sSplitted[i+1])){
            return false;
        }
    }
    return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))