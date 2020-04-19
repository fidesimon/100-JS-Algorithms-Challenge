function flattenArray(arr: any[]): any[] {
    let flatArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let deeperLevelArr = flattenArray(arr[i]);
            for(let j = 0; j < deeperLevelArr.length; j++){
                flatArray.push(deeperLevelArr[j]);
            }
        } else {
            flatArray.push(arr[i]);
        }
    }
    return flatArray;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
