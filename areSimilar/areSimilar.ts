function areSimilar(a: number[], b: number[]): boolean {
    if (a.toString() === b.toString())
        return true;
    let count = 0;
    let indexes = [];
    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
            count++;
            if(count > 2)
                return false;
            indexes.push(i);
        }
    }
    return a[indexes[0]] == b[indexes[1]] && a[indexes[1]] == b[indexes[0]];
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
