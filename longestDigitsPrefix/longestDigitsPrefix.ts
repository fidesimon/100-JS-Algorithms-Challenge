function longestDigitsPrefix(inputString: string): string {
    let split = inputString.split('');
    let result = "";
    for(let i = 0; i<split.length; i++){
        if(!isNaN(+split[i])){
            result = result.concat(split[i]);
        } else {
            break;
        }
    }
    return result;
}

console.log(longestDigitsPrefix('123aa1'));