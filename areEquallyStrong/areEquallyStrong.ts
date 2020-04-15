function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    let me = [yourLeft, yourRight];
    let friend = [friendsLeft, friendsRight];
    let areEquallyStrong = true;
    me.forEach((hand)=>{
        if(friend.indexOf(hand) >= 0)
            friend.slice(friend.indexOf(hand));
        else
            areEquallyStrong = false;
    });
    return areEquallyStrong;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
