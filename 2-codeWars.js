// node 2-codeWars.js
//Этот код не выполняется должным образом. Попытайтесь понять, почему.
// function multiply(a, b){
//     a * b
// }
//
// function multiply(a=2, b=4){
//     let result = a * b
//     return result
// }
//Создайте функцию, которая принимает целое число в качестве аргумента и
// возвращает значение "Even"для четных или "Odd"нечетных чисел.
// function evenOrOdd(number) {
//
// }

// function evenOrOdd(number) {
//     if(number%2 ==0){
//         return "Even"
//     }else{
//         (number%2 ==0)
//         return "Odd"
//     }
// }

// function evenOrOdd(number) {
//     return number%2 ==0? "Even" : "Odd"
//
// }
// console.log(evenOrOdd(97))

// по заданному целому числу или числу с плавающей запятой найти его противоположность.
//
// Примеры:
//
// 1: -1
// 14: -14
// -34: 34
//
// function opposite(number) {
//     return number *(-1);
// }
// console.log(opposite(-10))

//Нам нужна функция, которая может преобразовать число (целое число) в строку.
//Какие способы достижения этого вы знаете?
//
// Примеры (ввод --> вывод):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// function numberToString(num) {
//    return num.toString()
// }
// console.log(numberToString(22))

// Преобразовать число в перевернутый массив цифр
// Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.
//
// Пример (ввод => вывод):
// 35231 => [1,3,2,5,3]
// 0 => [0]
// const arr = digitize(35231);
// function digitize(n) {
//     n = String(n).split('').reverse().map(Number);
//     return n;
// }

// console.log(arr);

// Напишите функцию для преобразования имени в инициалы.Это ката строго
// состоит из двух слов с одним пробелом между ними.На выходе
// должны быть две заглавные буквы
// с точкой, разделяющей их.Это должно выглядеть так:
//     Sam
// Harris => S.H
//
// patrick
// feeney => P.F

// function abbrevName(name) {
//
//     let names = name.split(' '),
//         initials = names[0].substring(0, 1).toUpperCase() +'.';
//
//     if (names.length > 1) {
//         initials += names[names.length - 1].substring(0, 1).toUpperCase();
//     }
//     return initials;
// }
//
// console.log(abbrevName("jYcpMlfQfjaPiYDlknY haRiewWlOPqCiAsWeGn"))
// console.log(abbrevName('FirstName LastName'));

// Напишите функцию, которая преобразует входную строку в верхний регистр.
// function makeUpperCase(str) {
//    const res= str.toUpperCase()
//     return res
// }
// console.log(makeUpperCase('jjijp ijij'))

// Тимми и Сара думают, что они влюблены, но там, где они живут, они узнают об этом,
//     только когда каждый сорвет по цветку. Если у одного из цветов четное количество лепестков,
//     а у другого нечетное количество лепестков, это означает, что они влюблены.
//
//     Напишите функцию, которая будет принимать количество лепестков каждого цветка и возвращать true,
//     если они влюблены, и false, если нет. Функция проверки на четность
// function lovefunc(flower1, flower2){
//    return (flower1, flower2 % 2 === 0) ? true : false;(someNumber % 2 === 0) ? true : false;
// }
// console.log(lovefunc(5,5))
//
//  Учитывая набор чисел, верните добавку, обратную каждому из них. Каждое положительное становится отрицательным,
//  а отрицательное становится положительным.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// Можно предположить, что все значения являются целыми числами. Не изменяйте входной массив/список.
// function invert(array) {
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === "0") {
//             array[i] = array[i] * (1);
//         }
//         array[i] = array[i] * (-1);
//     }
//     return array ;
// }
// console.log(invert([1,-20,78,-21,-121,2,33]))

// Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
// Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!
//Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:
//
// name + " plays banjo"
// name + " does not play banjo"
// Указанные имена всегда являются допустимыми строками.
// function areYouPlayingBanjo(name) {
//     if (name.toLowerCase().charAt(0) == 'r'){
//         name = name + ' plays banjo';
//     }else{
//         name = name + ' does not play banjo';
//     }
//     return name;
// }
// Напишите функцию, которая вычисляет среднее значение чисел в заданном списке.
//     Примечание. Пустые массивы должны возвращать 0.
// function findAverage(array) {
//
//     return 0;
// }
// console.log(findAverage([]))


//Часы показывают hчасы, mминуты и sсекунды после полуночи.
//  Ваша задача — написать функцию, которая возвращает время с полуночи в миллисекундах.
//     Пример:
// h = 0
// m = 1
// s = 1
//
// result = 61000
// Входные ограничения:
//
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// function past(h, m, s){
//     return ((h * 3600 + m * 60 + s) * 1000);
// }
// console.log(past(0,1,1))

//Тимми и Сара думают, что они влюблены, но там, где они живут, они узнают об этом, только когда каждый сорвет по
// цветку. Если у одного из цветов четное количество лепестков, а у другого нечетное количество лепестков,
// это означает, что они влюблены.
// Напишите функцию, которая будет принимать количество лепестков каждого цветка и возвращать true,
// если они влюблены, и false, если нет.
// function lovefunc(flower1, flower2){
//     return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)
// }
// console.log(lovefunc(57,90))


//Ваши одноклассники попросили вас скопировать для них некоторые документы. Вы знаете, что есть «n» одноклассников,
// а в документах «m» страниц.
//  Ваша задача — посчитать, сколько чистых страниц вам нужно. Если n < 0 или m < 0 вернуться 0.
//
// Пример:
// n= 5, m=5: 25
// n=-5, m=5:  0

// function paperwork(n, m) {
//     if (n < 0 || m < 0) {
//         return 0
//     } else {
//         return n * m
//     }
//
// }
//
// console.log(paperwork(-5, 5))


//Напишите функцию, которая принимает массив чисел и возвращает сумму чисел. Числа могут быть отрицательными или нецелыми.
// Если массив не содержит чисел, вы должны вернуть 0.
//
// Примеры
// Вход: [1, 5.2, 4, 0, -1]
// Выход:9.2
//
// Вход: []
// Выход:0
//
// Вход: [-2.398]
// Выход:-2.398
//
// Предположения
// Вы можете считать, что вам даны только цифры.
// Вы не можете предположить размер массива.
// Вы можете предположить, что вы получили массив, и если массив пуст, верните 0.
// Что мы тестируем
// Мы тестируем базовые циклы и математические операции. Это для новичков, которые только изучают циклы и математические операции.
// Продвинутым пользователям это может показаться очень простым, и они могут легко записать это в одну строку.

// Sum Numbers
// function sum(numbers) {
//     "use strict";
//     if (numbers.length === 0) return 0;
//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }
//
// console.log(sum([])); // 0
// console.log(sum([1, 5.2, 4, 0, -1])); // 9.2







