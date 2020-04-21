function palindromeRearranging(inputString: string): boolean {
    let obj = {};
    let strSplitted = inputString.split('');
    for (let i = 0; i < strSplitted.length; i++) {
        if(obj.hasOwnProperty(strSplitted[i]))
            obj[strSplitted[i]]++;
        else
            obj[strSplitted[i]] = 1;
    }

    for(let str in obj){
        if(obj[str] % 2 !== 0) 
            return false;
    }

    return true;
}

console.log(palindromeRearranging('aabb')); 