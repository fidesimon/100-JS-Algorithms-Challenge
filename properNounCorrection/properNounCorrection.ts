function properNounCorrection(noun: string): string {
    noun = noun.toLowerCase();
    return (noun[0].toUpperCase()) + noun.substr(1);
 }
 
 console.log(properNounCorrection('pARiS'));
 console.log(properNounCorrection('John'));