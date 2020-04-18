function containsDuplicates(a: number[]): boolean {
    return a.length !== (new Set(a)).size;
    /*
    Another Approach:
    a.sort();
    for(let i = 0; i < a.length - 1; i++)
        if(a[i] === a[i+1])
            return true;
    return false;
    */
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
