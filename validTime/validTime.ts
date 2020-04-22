function validTime(time: string): boolean {
    let timeSplitted = time.split(':');
    return +timeSplitted[0] < 24 && +timeSplitted[1] < 60;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));