//Question: https://www.codewars.com/kata/622de76d28bf330057cd6af8

function findPageCount(summary){
    console.log(solution1(summary))
    console.log(solution2(summary))
}

function solution1(summary){

    const max = [9];

    let maxValue = 9;
    let digitCount = '9';
    let digitLimit = '9'

    // create maxes
    for(let i = 2; i <= 6; i++){
       digitCount += '9';
       maxValue = (((digitCount - digitLimit)* i) + maxValue)
       max.push(maxValue);
       digitLimit += '9';
    }

    for (let i =0; i < max.length; i++){

        const maximum = max[i];

        if (summary <= maximum){
            if(i === 0){
                return summary;
            }
            digitLimit = '9';
            for (let j = 1; j < i; j++) {
               digitLimit += '9';
            }
            return parseInt(digitLimit) + ((summary - max[i - 1]) / (i + 1));
        }

    }

}

function solution2(summary){

    let count = 1;
    let string = '';

    while(string.length < summary) {
        string += count;
        count++;
    }
    return count - 1

}

findPageCount(185)