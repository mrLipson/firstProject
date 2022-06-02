"use strict";

const shoppingMallData = {
    shops: [
        {
            width: 10, 
            length: 5
        },
        {
            width: 15,
            length: 7  
        },
        {
            width: 20,  
            length: 5
        },
        {
            width: 8,   
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let shopsS = 0;
    let mollV;
    let s = 1;
    for (let i = 0; i < data.shops.length; i++) {
        Object.values(data.shops[i]).forEach((item) => {
            s = s * item;
        });
        shopsS += s;
        s = 1;
    }

    mollV = shopsS * data.height;

    if (data.budget < mollV * data.moneyPer1m3) {
        return "Бюджета недостаточно";
    } else {
        return "Бюджета достаточно";
    }
    
}

console.log(isBudgetEnough(shoppingMallData));










 

