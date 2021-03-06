// Your code here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`
    }
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    divide: function (num1, num2) {
        return num1 / num2;
    },
    multiply: function (num1, num2) {
        return num1 * num2;
    }
}

function actionApplyer(startingInt, arrayOfFunctions) {
    if (arrayOfFunctions !== []) {
        return arrayOfFunctions.reduce(function(total, element) {
            return element(total)
        }, startingInt)
    } else {
        return startingInt;
    }
};