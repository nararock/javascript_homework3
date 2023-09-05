//task1
function getCube(number){
    return Math.pow(number, 3);
}

console.log(getCube(2) + getCube(3));

//task2
let userNumber = +(prompt('Введите число'));
if (!userNumber){
    console.log('Вы ввели неверное значение!')
} else{
    calcProcent(userNumber);
}

function calcProcent(number){
    return console.log(`Размер заработной платы за вычетом налогов равен значение ${number * 0.87}`);
}

//task3
let firstNumber = Number.parseInt(prompt('Введите первое число'));
let secondNumber = Number.parseInt(prompt('Введите второе число'));
let thirdNumber = Number.parseInt(prompt('Введите третье число'));

function getMax(num1, num2){
    let max = Math.max(num1, num2);
    return function getAnswer(num3){
        return Math.max(max, num3);
    }
}

const firstFunc = getMax(firstNumber, secondNumber);
const secondFunc = firstFunc(thirdNumber);
console.log(secondFunc);

//task4
const sum = (number1, number2) => number1 + number2;
const sub = (number1, number2) => {
    if (number1 == number2){
        return 0;
    }
    else {
        return Math.max(number1, number2) - Math.min(number1, number2);
    }
}
const mult = (number1, number2) => number1 * number2;
const div = (number1, number2) => number1 / number2;

console.log(sum(45,56));
console.log(sub(45,56));
console.log(sub(56,56));
console.log(mult(45,56));
console.log(div(45,56));