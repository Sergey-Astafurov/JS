// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
const cube = (num) => num ** 3
console.log(cube(9));



// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// const salary = +prompt('Введите зарплату')
// const getSalary = (num) => isNaN(num) ? 'Ввели не число' : `Размер заработной платы за вычетом налогов равен ${num * 0.87}`
// console.log(getSalary(salary))
// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// const num1 = +prompt('a')
// const num2 = +prompt('b')
// const num3 = +prompt('c')

// const maxValue = (a, b, c) => isNaN(a) || isNaN(b) || isNaN(c) ? `Eror` : Math.max(a, b, c)
// console.log(`max value :  ${maxValue(num1, num2, num3)}`);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление

const n1 = +prompt('a')
const n2 = +prompt('b')

const sum = (n1, n2) => n1 + n2
console.log(sum(n1, n2));
const diff = (n1, n2) => {
    const max = Math.max(n1, n2)
    const min = Math.min(n1, n2)
    return max - min // функция всегда должна что то возвращать
}
console.log(diff(n1, n2));
const mult = (n1, n2) => n1 * n2
console.log(mult(n1, n2));
const del = (n1, n2) => n1 / n2
console.log(del(n1, n2));

// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.