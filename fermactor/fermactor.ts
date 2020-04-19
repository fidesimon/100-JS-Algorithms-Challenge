function fermactor(n: number): number[] {
    for(let i = 1; i < n; i++){
        for(let j = 1; j < i; j++){
            if(Math.pow(i,2) - Math.pow(j,2) === n){
                return [i, j];
            }
        }
    }
    return [];
}

console.log(fermactor(15));