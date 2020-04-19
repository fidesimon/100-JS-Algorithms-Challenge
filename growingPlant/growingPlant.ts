function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    let dayCount = 0;
    let sum = 0;
    while (sum < desiredHeight) {
        dayCount++;
        sum += upSpeed;
        if (sum < desiredHeight)
            sum -= downSpeed;
    }
    return dayCount;
}

console.log(growingPlant(100, 10, 910))