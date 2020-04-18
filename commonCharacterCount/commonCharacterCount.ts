function commonCharacterCount(s1: string, s2: string): any {
    let counter = 0;
    let s1arr = s1.split('');
    let s2arr = s2.split('');
    for(let i = 0; i < s1arr.length; i++){
        let indexOfChar = s2arr.indexOf(s1arr[i]);
        if(indexOfChar !== -1){
            s2arr.splice(indexOfChar, indexOfChar);
            counter++;
        }
    }
    return counter;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));