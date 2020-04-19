function launchSequenceChecker(systemNames: string[], stepNumbers: number[]): boolean {
    let arr = [];
    let aggregated = systemNames.map((system, index) => {
        return [system, stepNumbers[index]];
    });
    let distinctSystems = new Set(systemNames);

    distinctSystems.forEach((sys) => {
        arr.push(aggregated.filter(n => n[0] == sys).map(n => n[1]));
    });

    for (let h = 0; h < arr.length; h++) {
        let currValue = arr[h][0];
        for (let i = 1; i < arr[h].length; i++) {
            if (currValue < arr[h][i])
                currValue = arr[h][i];
            else
                return false;
        }
    }

    return true;
}

console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1, 10, 11, 2, 12, 111]));
console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2, 1, 12, 111]));