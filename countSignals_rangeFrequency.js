function countSignals_rangeFrequency(frequencies, filterRanges) {

    let result = [];
    let count = 0;
    for (let el of frequencies) {

        for(let j = 0; j < filterRanges.length; j++) {
            if (el >= filterRanges[j][0] && el <= filterRanges[j][1]) {
                count++;
                if(count === filterRanges.length) {
                    count = 0
                    result.push(el)
                }

            }
        }

    }
    return result.length;
}

function countSignals1(frequencies, filterRanges) {
    let result = [];
    let low=Math.max(...filterRanges.map(el=>el[0]))
    let upper=Math.min(...filterRanges.map(el=>el[1]))
    for (let el of frequencies) {
        if(el>=low && el<=upper) result.push(el)
    }
    return result.length;
}

console.log(countSignals1([8, 15, 14, 16, 21], [[10, 17], [13, 15], [13, 17]]))
