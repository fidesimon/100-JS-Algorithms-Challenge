function ratingThreshold(threshold: number, ratings: number[][]): number[] {
    let prosToReview = [];
    ratings.forEach((rating, index) => {
        let sum = rating.reduce((previousValue, currentValue) => { return currentValue + previousValue });
        if (sum / rating.length < threshold)
            prosToReview.push(index);
    });
    return prosToReview;
}

console.log(ratingThreshold(3.5,
    [[3, 4],
    [3, 3, 3, 4],
    [4]])); 