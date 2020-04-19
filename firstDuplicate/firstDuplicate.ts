function firstDuplicate(a: number[]): number {
    let obj = {};
    for (let i = 0; i < a.length; i++){
        if(obj.hasOwnProperty(a[i]))
            return a[i];
        obj[a[i]] = a[i];
    }
    return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
