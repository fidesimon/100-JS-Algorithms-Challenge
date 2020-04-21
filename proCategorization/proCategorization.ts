function proCategorization(pros: string[], preferences: string[][]): string[][][] {
    let objPreferences = {};
    let arrPreferences = [];

    for(let i = 0; i < pros.length; i++){
        for(let j = 0; j < preferences[i].length; j++){
            if(objPreferences.hasOwnProperty(preferences[i][j])){
                objPreferences[preferences[i][j]].push(pros[i]);
            } else {
                objPreferences[preferences[i][j]] = [pros[i]];
            }
        }
    }

    for(let key in objPreferences){
        arrPreferences.push([key, objPreferences[key]]);
    }

    arrPreferences.sort();
    return arrPreferences;
}

console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]]));