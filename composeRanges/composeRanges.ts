function composeRanges(nums: number[]): string[] {
    let startValue = nums[0];
    let previousValue: number = nums[0];
    let rangesArr: string[] = [];

    for(let i = 1; i < nums.length; i++){
        if(nums[i] - previousValue != 1){
            if(startValue !== previousValue)
                rangesArr.push(`${startValue}->${previousValue}`);
            else
                rangesArr.push(`${previousValue}`);
            startValue = nums[i];
        }
        previousValue = nums[i];
    }

    if(startValue !== previousValue)
                rangesArr.push(`${startValue}->${previousValue}`);
            else
                rangesArr.push(`${previousValue}`);

    return rangesArr;
}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));