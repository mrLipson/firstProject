"use strict";

// Место для первой задачи
function calculateVolumeAndArea(a) {
    if (typeof(a) === 'string' || a <= 0 || a == null || isNaN(a) || !Number.isInteger(a)) {
        return "При вычислении произошла ошибка";
    } else {
        let vCube = a * a * a,
              sCube = 6 * a * a;
        return `Объем куба: ${vCube}, площадь всей поверхности: ${sCube}`;
    }

}

calculateVolumeAndArea(5);

// Место для второй задачи
function getCoupeNumber(n) {
  const  coupeNumber = {
            1: [1, 2, 3, 4],
            2: [5, 6, 7, 8],
            3: [9, 10, 11, 12],
            4: [13, 14, 15, 16],
            5: [17, 18, 19, 20],
            6: [21, 22, 23, 24],
            7: [25, 26, 27, 28],
            8: [29, 30, 31, 32],
            9: [33, 34, 35, 36]
         };

    if (typeof(n) === 'string' || !Number.isInteger(n) || n < 0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }  
    
    if (n > 36 || n === 0) {
        return "Таких мест в вагоне не существует";
    } 
    
    for (let i = 1; i <= 9; i++) {
        for(let j = 0; j < 4; j++) {
            if (coupeNumber[i][j] == n) {
                console.log(i);
                return i;
            } 
        }
    }
      
}
getCoupeNumber(37);


