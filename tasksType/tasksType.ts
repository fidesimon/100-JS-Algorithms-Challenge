function tasksTypes(deadlines: number[], day: number): number[] {
    let today = deadlines.filter(n => n <= day);
    let upcoming = deadlines.filter(n => (n > day && n <= day + 7));
    let later = deadlines.filter(n => n > day + 7);

    return [today.length, upcoming.length, later.length];
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
