function arrayPreviousLess(items: number[]): number[] {
    let resultArray = [-1];
    for(let i = 1; i < items.length; i++){
        let currentValue = items[i];
        let val = -1;
        for(let j = i; j > 0; j--){
            if(items[j - 1] < currentValue){
                val = items[j - 1];
                break;
            }
        }
        resultArray.push(val);
    }

    return resultArray;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));