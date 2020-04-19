function fancyRide(l: number, fares: number[]): string {
    let prices = fares.map((ride)=>{
        return ride*l;
    });
    return prices[4] <= 20 ? "UberSUV" : prices[3] <= 20 ? "UberBlack" : prices[2] <= 20 ? "UberPlus" : prices[1] <= 20 ? "UberXL" : prices[0] <= 20 ? "UberX" : "None";
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));