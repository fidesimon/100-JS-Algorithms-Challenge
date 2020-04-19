function makeArrayConsecutive2(statues: number[]): number {
    let numberOfAdditionalStatues = 0;
    statues.sort((a, b) => (a - b));
    const min = statues[0];
    const max = statues[statues.length - 1];
    for (let i = min + 1; i < max; i++) {
        if (!statues.includes(i))
            numberOfAdditionalStatues++;
    }
    return numberOfAdditionalStatues;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));