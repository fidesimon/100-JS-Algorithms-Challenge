function stolenLunch(note: string): string {
    const charsObj = {
        "0": "a",
        "1": "b",
        "2": "c",
        "3": "d",
        "4": "e",
        "5": "f",
        "6": "g",
        "7": "h",
        "8": "i",
        "9": "j",
        "a": "0",
        "b": "1",
        "c": "2",
        "d": "3",
        "e": "4",
        "f": "5",
        "g": "6",
        "h": "7",
        "i": "8",
        "j": "9",
    }
    let noteSplitted = note.split('');
    for (let i = 0; i < noteSplitted.length; i++) {
        noteSplitted[i] = charsObj.hasOwnProperty(noteSplitted[i]) ? charsObj[noteSplitted[i]] : noteSplitted[i];
    }
    return noteSplitted.join('');
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));