function alternatingSums(a: number[]): number[] {
    let team1total: number = 0;
    let team2total: number = 0;

    for (let i = 0; i < a.length; i++) {
        if ((i + 2) % 2 == 0)
            team1total += a[i];
        else
            team2total += a[i];
    }
    return [team1total, team2total];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))