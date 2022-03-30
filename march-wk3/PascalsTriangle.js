// Q: https://www.codewars.com/kata/52945ce49bb38560fe0001d9

function pascal(n){

    let triangle = [[1]];

    if(n < 1) return [];

    if(n === 1) return triangle;

    if(n === 2) {
        triangle.push([1,1])
        return triangle
    }

    triangle.push([1,1]);


    for (let i = 1; i < n - 1; i++) {

        let prev = triangle[i];

        let currArray = [1];

        for (let j = 1; j <= prev.length - 1; j++) {

            currArray.push( prev[j-1] + prev[j] );
        }

        currArray.push(1);

        triangle.push(currArray);

    }

    return triangle;
}


console.log(pascal(10));