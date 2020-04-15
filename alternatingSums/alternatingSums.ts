function alternatingSums(a: number[]): number[] {
    let team1total: number = 0;
    let team2total: number = 0;

    a.forEach((val, index)=>{
        if (index % 2 === 0) 
            team1total += val;
        else 
            team2total += val;
    });
    return [team1total, team2total];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))