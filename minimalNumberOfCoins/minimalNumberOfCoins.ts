function minimalNumberOfCoins(coins: number[], price: number): number {
    let count = 0;
    coins.sort((a, b) => (a - b));
    for (let i = coins.length - 1; i >= 0; i--) {
        let floor = Math.floor(price/coins[i]);
        if(floor > 0){
            count += floor;
            price -= coins[i] * floor;
        }
    }
    return count;
}

console.log(minimalNumberOfCoins([1, 2, 10], 28));