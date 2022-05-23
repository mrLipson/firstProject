"use strict";

// Место для первой задачи
function sayHello() {
    const userName = prompt('What is your name?', 'John');
    return('Привет, ' + userName + '!');
}

alert(sayHello());


// Место для второй задачи
function returnNeighboringNumbers(numb) {
    let arrNumb = [numb - 1, numb, numb + 1];
    return arrNumb;
}

console.log(returnNeighboringNumbers(228));

// Место для третьей задачи
function getMathResult(a, b) {
    let res = a;
    let sumi = a;
    for (let i = 1; i < b; i++) {
        if (typeof b === 'string') {
            return res;
        } else {
            res += '---';
        }
        sumi += a;
        res += sumi;
    }
    return res;
}

console.log(getMathResult(5, 3));