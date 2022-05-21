"use strict";

let star = '';

for (let i = 0; i <= 6; i++) {
    star = star + '*';
    console.log(star);
}


let result = '';
const lenght = 10;

for (let i = 1; i < lenght; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += '\n';
}

console.log(result);



first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j <= 3; j++) {
        console.log(`Second level: ${j}`);
        if (j === 2) continue first;
        for (let k = 0; k < 1; k++) {
            console.log(`Third level: ${k}`);
        }
    }
}


for ( let i = 5; i <= 10; i++) {
    console.log(i);
}

for ( let i = 20; i >= 10; i--) {
    console.log(i);
    if (i === 13) break;
}

for (let i = 1; i <= 10; i++ ) {
    if (i % 2 === 0) console.log(i);
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let k = 0;
while (k < 2) {
    // if (i % 2 === 0) {
    //     continue;
    // } else {
    //     console.log(i);
    // }
    k++;
}

let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
  console.log( i );
  i++;
}