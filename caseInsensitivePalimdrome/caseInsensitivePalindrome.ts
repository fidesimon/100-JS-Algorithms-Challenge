function isCaseInsensitivePalindrome(inputString: string): boolean {
    let lower = inputString.toLowerCase();
    let reversedLower = lower.split('').reverse().join('');
    return lower == reversedLower;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));