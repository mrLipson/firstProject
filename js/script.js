"use strict";

// Место для первой задачи

function getTimeFromMinutes(writeNumber) {
    if (writeNumber < 0 || !Number.isInteger(writeNumber) || typeof writeNumber === 'snring') {
        return 'Ошибка, проверьте данные';
    } 
        
    let hours = ~~(writeNumber/60),
        minutes = writeNumber % 60;
    let hs = hours % 10,
        min = minutes % 10;
    
    const transHour = {
            0: 'часов',
            1: 'час',
            2: 'часа',
            3: 'часа',
            4: 'часа',
            5: 'часов',
            6: 'часов',
            7: 'часов',
            8: 'часов',
            9: 'часов'
    };

    const transMin = {
        0: 'минут',
        1: 'минута',
        2: 'минуты',
        3: 'минуты',
        4: 'минуты',
        5: 'минут',
        6: 'минут',
        7: 'минут',
        8: 'минут',
        9: 'минут'
    };

    function translateHours() {
        for (let i = 0; i <= hs; i++) {
            if (hs == i) {
                hs = transHour[i];
                return hs;
            }
        }
    }

    function translateMinutes() {
        for (let i = 0; i <= min; i++) {
            if (min == i) {
                min = transMin[i];
                return min;
            }
        }
    }

    
    if (hours < 10) {
        translateHours();
    } else if (hours >= 5 && hours <= 20) {
        hs = 'часов';
    } else if (hours > 20 && hours <= 100) {
        translateHours();
    }

    if (minutes < 10) {
        translateMinutes();
    } else if (minutes >= 5 && minutes <= 20) {
        min = 'минут';
    } else if (minutes > 20 && minutes <= 59) {
        translateMinutes();
    }
        
    return `Это ${hours} ${hs} и ${minutes} ${min}`;   
}

// 1 час
// 1 минута
// 2 3 4 часа
// 2 3 4 минуты
// 0 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 часов
// 0 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 минут

console.log(getTimeFromMinutes(20));



// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    if (typeof a !== 'number' ||
        typeof b !== 'number' ||
        typeof c !== 'number' ||
        typeof d !== 'number' ) {
        return 0;
    } else if (a > b && a > c && a > d) {
        return a;
        } else if (b > c && b > d) {
            return b;
        } else if (c > d) {
            return c;
        } else {
            return d;
        }
}

console.log(findMaxNumber(1, 5, 89, 11));





function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';     //0 1 1 2 3 5 8 13
    let first = 0;       //1 1 2 3 5 8 13 21
    let second = 1;      //1 2 3 5 8 13 21 24

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

console.log(fib(8));


