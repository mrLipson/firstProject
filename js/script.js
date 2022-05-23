"use strict";

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    if (i <= lines) {
        for (let j = i; j <= lines; j++) {
            if (j == lines) {
                for (let k = 0; k <= i; k++) {
                    result += '*';
                    if (k == i) {
                        for (let m = 0; m < k; m++) {
                            result += '*';
                        }
                    }
                } 
            } else {
                result += ' ';
            }
        }
    }
    result += '\n';
}

console.log(result);


const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)
