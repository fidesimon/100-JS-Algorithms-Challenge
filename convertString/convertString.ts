function convertString(s: string, t: string): boolean {
    const tSplitted = t.split('');
    let index = 0;
    let isConvertPossible = true;
    tSplitted.forEach((item)=>{
        for(let i = index; i < s.length; i++){
            if(s[i] === item){
                index = i;
            }
        }
        if(s[index] !== item){
            isConvertPossible = false;
        }
    });

    return isConvertPossible;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
