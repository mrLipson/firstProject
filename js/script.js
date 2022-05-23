"use strict";

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    if (i <= lines) {
        for (let j = i; j <= lines; j++) {
            result += ' ';
            if (j == lines) {
                for (let k = 0; k <= i; k++) {
                    result += '*';
                    if (k == i) {
                        for (let m = 0; m < k; m++) {
                            result += '*';
                        }
                    }
                } 
            }
        }
    }
    result += '\n';
}

console.log(result);

