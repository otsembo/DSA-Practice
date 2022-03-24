// Question: https://www.codewars.com/kata/57c15d314677bb2bd4000017

function doors(n){
    let array = Array(n).fill(false);
    for (let i = 1; i <= array.length; i++) {
        switchDoors(i,array);
    }
    console.log(array)
    return array;
}

function changeDoorStatus(index, array){
    array[index] = !array[index];
}

function switchDoors(person, arr){
    for (let i = (person - 1); i < arr.length; i = i + person) {
        changeDoorStatus(i, arr);
    }
}
doors(5)
console.log(solution2(5))

function solution2(n){
    return Math.floor(Math.sqrt(n))
}

