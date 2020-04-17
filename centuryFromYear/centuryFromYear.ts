function centuryFromYear(year: number): number {
    return Math.floor((year+99)/100);
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));