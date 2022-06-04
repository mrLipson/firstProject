"use strict";

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let studentClone = [...arr].sort();
    let newStudents = [];
    let arrLastStudents = [];
    let lastStudents = "Оставшиеся студенты: ";
    let i = 0,
        j = 3,
        k = 0;
    while (j <= 9) {
        newStudents[k] = studentClone.slice(i, j);
        i = j;
        j += 3;
        k++;
    }
    if (studentClone.length == 9) {
        lastStudents += '-';
        newStudents.splice(4, 0, lastStudents);
    } else if (studentClone.length > 9) {
        arrLastStudents = studentClone.slice(9, studentClone.length);
        lastStudents += arrLastStudents.join(", ");
        newStudents.splice(4, 0, lastStudents);
    }
    return newStudents;
}

console.log(sortStudentsByGroups(students));


  
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

sortStudentsByGroups(students);








 

