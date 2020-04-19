function incrementalBackups(lastBackupTime: number, changes: number[][]): number[] {
    let toBackUp = changes.filter(n=>n[0] > lastBackupTime);
    let results = [];
    toBackUp.forEach(n => {
        if(!results.includes(n[1])){
            results.push(n[1]);
        }
    });

    return results;
}

console.log(incrementalBackups(461620205, [[461620203, 1], 
    [461620204, 2], 
    [461620205, 6],
    [461620206, 5], 
    [461620207, 3], 
    [461620207, 5], 
    [461620208, 1]]));
