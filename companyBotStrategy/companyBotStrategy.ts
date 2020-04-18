function companyBotStrategy(trainingData: number[][]): number {
    let sum = 0;
    let count = 0;
    trainingData.forEach((session) => {
        if (session[1] === 1) {
            sum += session[0];
            count++;
        }
    });
    return count === 0 ? 0.0 : sum / count;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy([[4, -1], [0, 0], [5, -1]]));
