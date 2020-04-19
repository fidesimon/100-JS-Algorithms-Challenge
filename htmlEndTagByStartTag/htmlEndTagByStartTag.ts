function htmlEndTagByStartTag(startTag: string): string {
    const splitted = startTag.replace("<", "</").split(" ");
    return splitted.length > 1 ? splitted[0] + ">" : splitted[0];
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))