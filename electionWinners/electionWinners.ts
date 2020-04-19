function electionsWinners(votes: number[], k: number): number {
    let electionWinners = 0;
    let max = Math.max(...votes);
    votes.forEach((vote) => {
        if(vote === max)
            electionWinners++;
        else
            if(max < vote + k)
                electionWinners++;
    })
    return electionWinners;
}

console.log(electionsWinners([2, 3, 5, 2], 3));