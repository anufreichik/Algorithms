function fetch(url){
    return new Promise((resolve, reject)=>{
        https
            .get(url, (resp)=>{
                let data='';
                resp.on('data', (chunk)=>{
                    data+=chunk;
                });

                resp.on('end',()=>{
                    resolve(JSON.parse(data))
                });
            })
            .on('error',(err)=>{
                reject(err.message);
            })
    })
}

const getFootballMatches=(year, page)=>{
    let url = 'https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=' + year + '&page='+page;
    return new Promise((resolve, reject)=>{
        fetch(url)
            .then(jsonR=>resolve(jsonR))
            .catch((e)=>reject(e.message))
    })
}
//find team names that had at least k matches in given year
//data coming in this format:
// {
//     "page": 1,
//     "per_page": 10,
//     "total": 125,
//     "total_pages": 13,
//     "data": [
//     {
//         "competition": "UEFA Champions League",
//         "year": 2015,
//         "round": "GroupC",
//         "team1": "Galatasaray",
//         "team2": "Atletico Madrid",
//         "team1goals": "0",
//         "team2goals": "2"
//     },
//     {
//         "competition": "UEFA Champions League",
//         "year": 2015,
//         "round": "GroupD",
//         "team1": "Sevilla",
//         "team2": "Borussia Monchengladbach",
//         "team1goals": "3",
//         "team2goals": "0"
//     },
//     {
//         "competition": "UEFA Champions League",
//         "year": 2015,
//         "round": "GroupB",
//         "team1": "VfL Wolfsburg",
//         "team2": "CSKA Moskva",
//         "team1goals": "1",
//         "team2goals": "0"
//     },
//     {
//         "competition": "UEFA Champions League",
//         "year": 2015,
//         "round": "GroupC",
//         "team1": "SL Benfica",
//         "team2": "Astana",
//         "team1goals": "2",
//         "team2goals": "0"
//     },
async function getTeams(year, k) {
    // write your code here

    const matchesPerTeam={}
    let page=1;
    let totalPages=1;

    while(page<=totalPages){
        const fetchResult = await getFootballMatches(year, page);

        fetchResult.data.forEach(({team1, team2})=>{
            matchesPerTeam[team1]=(matchesPerTeam[team1]||0) +1;
            matchesPerTeam[team2]=(matchesPerTeam[team2]||0) +1;
        })
        totalPages=fetchResult.total_pages;
        page+=1;
    }

    return Object.entries(matchesPerTeam)
        .filter(([, numOfMatchers])=> numOfMatchers>=k)
        .map(([team])=>team)
        .sort();
}
