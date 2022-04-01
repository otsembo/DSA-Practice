// https://www.codewars.com/kata/55466989aeecab5aac00003e
function sqInRect(lng, wdth){

    if(lng === wdth){
        return null;
    }

    let squares = [];

    let longest = lng >= wdth ? lng : wdth;
    let shortest = lng < wdth ? lng : wdth;

    while(longest > shortest){

        squares.push(shortest);

        const diff = longest - shortest;

        longest = shortest >= diff ? shortest : diff
        shortest = shortest < diff ? shortest : diff

    }

    squares.push(shortest);



    return squares;

}