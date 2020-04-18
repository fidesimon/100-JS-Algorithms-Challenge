function depositProfit(deposit: number, rate: number, threshold: number): number {
    let yearsCount = 0;
    let currentMoney = deposit;
    while(currentMoney < threshold){
        yearsCount++;
        currentMoney += currentMoney * (rate/100);
    }
    return yearsCount;
}

console.log(depositProfit(100, 20, 170))