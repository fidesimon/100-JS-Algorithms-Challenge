function incorrectPasscodeAttempts(passcode: string, attempts: string[]): boolean {
    let counter = 0;
    for (let i = 0; i < attempts.length; i++) {
        console.log(attempts[i]);
        if (attempts[i] !== passcode) {
            counter++;
            if (counter >= 10)
                return true;
        }
        else {
            if (counter < 10)
                counter = 0;
        }
    }
    return false;
}

console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));