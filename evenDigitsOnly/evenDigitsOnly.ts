function evenDigitsOnly(n: number): boolean {
    let strArr = n.toString().split('');
    return strArr.every((s)=>{
        return +s % 2 == 0;
    });
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));