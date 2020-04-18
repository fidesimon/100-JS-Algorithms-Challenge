function domainType(domains: string[]): string[] {
    let domainMap = {
        'org': 'organization',
        'com': 'commercial',
        'net': 'network',
        'info': 'info'
    };

    let resultArr = [];
    domains.forEach((domain) => {
        let domainSplitted = domain.split('.');
        let dom = domainSplitted[domainSplitted.length - 1];
        resultArr.push(domainMap[dom]);
    });


    return resultArr;
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));