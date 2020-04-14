function add(param1: number, param2: number): number {
    if (param1 >= -100 && param1 <= 1000) {
        if (param2 >= -100 && param2 <= 1000) {
            return param1 + param2;
        } else {
            throw new Error("param2 not in range");
        }
    } else {
        throw new Error("param1 not in range");
    }
}

function add2(...param1: number[]): number {
    let result = 0;

    param1.forEach((val) => {
        if (val >= -100 && val <= 1000)
            result += val;
        else
            throw new Error("parameter outside range <-100;1000>");
    });

    return result;
}

console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));