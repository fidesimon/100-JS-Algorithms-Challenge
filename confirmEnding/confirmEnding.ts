function confirmEnding(str: string, target: string) {
    const targetLength = target.length;
    const substr = str.substr(str.length - targetLength);
    return substr === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));