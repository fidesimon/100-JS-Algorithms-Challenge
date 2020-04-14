function addBorder(picture: string[]): string[] {
    let length = picture[0].length + 2;

    let horizontalBorder = '';
    for(let i = 0; i < length; i++){
        horizontalBorder = horizontalBorder.concat('*');
    }

    picture = picture.map((row)=>{
        return '*'.concat(row, '*');
    });

    picture.unshift(horizontalBorder);
    picture.push(horizontalBorder);

    return picture;
}

console.log(addBorder(["abc", "ded"]));