function chunkyMonkey(arr: any[], size: number): any[][] {
    let resultArray: any[][] = [];
    while(arr.length > 0){
        if(arr.length < size){
            resultArray.push(arr.splice(0,arr.length));
            break;
        }
        resultArray.push(arr.splice(0,size));
    }
    return resultArray;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));