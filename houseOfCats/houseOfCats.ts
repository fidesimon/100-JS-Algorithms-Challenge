function houseOfCats(legs: number): number[] {
    let ppl = [];
    for(let i = legs; i >= 0; i-= 4){
        ppl.push(i/2);
    }
    return ppl;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
