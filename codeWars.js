//ЗАДАЧА 1
// По заданному целому числу или числу с плавающей запятой найти его противоположность.
//
//     Примеры:
//
// 1: -1
// 14: -14
// -34: 34

// решение тут:

// function opposite(number) {
//     //your code here
//     return -number;
// }


//тестирование тут: например, в следующей строке должно законсолится -1 (сейчас консолится undefined)
// console.log(opposite(-34))


// ЗАДАЧА 2
// Нам нужна функция, которая может преобразовать число в строку.
//
//     Какие способы достижения этого вы знаете?
//
//     Примеры:
//     123 --> "123"
//      999 --> "999"

// решение тут:
// function numberToString(num) {
//     let string = String(num);
//     return string;
// }

//тестирование тут: например, в следующей строке должно законсолится '99' (сейчас консолится undefined)
// console.log(numberToString(99))

//ЗАДАЧА 3

// Завершите функцию, которая принимает
// логическое значение и возвращает "Yes"строку для true, или "No"строку для false.

// решение тут:
// function boolToWord(bool) {
//     if(bool) {
//         return 'Yes'
//     } else {
//         return 'No'
//     };
// }
//
// тестирование тут: например, в следующей строке
// должно законсолится 'No', а сейчас коесолится 'Yes', то есть функция работает неправильно
// console.log(boolToWord(true))
//
// function printer(obj, number) {
//     if (obj.messages.length == 0) {
//         console.log("Ошибка формата! В теме нет сообщений")
//     }
//     for (let i = obj.messages.length - 1; i >= 0; i--) {
//         console.log(`${obj.messages[i].author.name} (репутациия: ${obj.messages[i].author.reputation}): ${obj.messages[i].text}`)
//     }
// }
//
//
// let thread = {
//     title: "Поделитесь книжкой",
//     author: "RuBrick",
//     total: 23,
//     messages: [
//         {
//             id: 13201,
//             date: "2018-01-09",
//             text: "Посоветуйте, пожалуйста, с одной стороны подробную, а с другой доступную для понимания книгу по javascript. Спасибо",
//             author: {
//                 name: "RuBrick",
//                 login: "ru_brick",
//                 reputation: 3,
//                 role: "user"
//             }
//         },
//         {
//             id: 13208,
//             date: "2018-01-12",
//             text: "Неужели нет хорошей литературы?",
//             author: {
//                 name: "RuBrick",
//                 login: "ru_brick",
//                 reputation: 3,
//                 role: "user"
//             }
//         },
//         {
//             id: 13209,
//             date: "2018-01-12",
//             text: "в общем, NodeJS это JS + некоторые доп. модули и объекты. Тебе нужна литература по самому JS и дока на официальном сайте.",
//             author: {
//                 name: "Popov",
//                 login: "popov_ma",
//                 reputation: 2310,
//                 role: "user"
//             }
//         },
//         {
//             id: 13219,
//             date: "2018-01-14",
//             text: "В сети много сайтов с хорошими объяснениями + есть курсы.",
//             author: {
//                 name: "Void",
//                 login: "void",
//                 reputation: 5005,
//                 role: "user"
//             }
//         },
//         {
//             id: 13220,
//             date: "2018-01-14",
//             text: "Есть большая книга «JavaScript.Подробное руководство», потом смотришь документацию.",
//             author: {
//                 name: "noname",
//                 login: "noname",
//                 reputation: 100,
//                 role: "user"
//             }
//         },
//         {
//             id: 13250,
//             date: "2018-01-19",
//             text: "Или можно посмотреть видео-курсы на youtube! А самое главное - практика! И этот форум - лучшая тренировочная площадка!",
//             author: {
//                 name: "noname",
//                 login: "noname",
//                 reputation: 110,
//                 role: "user"
//             }
//         },
//         {
//             id: 13259,
//             date: "2018-01-20",
//             text: "Понял, спасибо!",
//             author: {
//                 name: "RuBrick",
//                 login: "ru_brick",
//                 reputation: 13,
//                 role: "user"
//             }
//         }
//     ]
// };
//
// // printer(thread, 6)
//
//
// let allMessages = [
//     {author: "zloy-zloy", text: "А у кого какой мобильный??", edited: true},
//     {
//         author: "zloy-zloy",
//         text: "Я с андроидом. Уже 3 года живет, он самым крепким оказался, пережил 2 утопления.",
//         edited: false
//     },
//     {
//         author: "МамаЗузу",
//         text: "Айфон в свое время успешно сдох при первом же падении на кафельную плитку.",
//         edited: false
//     },
//     {author: "void", text: "У меня андроид. Особенно нравится, что никаких заморочек с айтюнс.", edited: false},
//     {author: "mama", text: "Айфон.", edited: false},
//     {author: "mama", text: "Почему не отвечаешь?", edited: false},
//     {author: "void", text: "Дэвид Хэрман «Сила JavaScript. 68 способов эффективного использования JS».", edited: false},
//     {author: "void", text: "Marijn Haverbeke, Вячеслав Голованов «Выразительный javascript: Введение».", edited: false},
//     {author: "void", text: "Ленюсь.", edited: false},
//     {author: "void", text: "Пока оценивать нечего.", edited: false},
//     {author: "void", text: "Не по-русски как-то получается, хоть и на русском.", edited: false},
//     {author: "ivanov", text: "Чип и Дейл прикольно, играл в детстве.", edited: false},
//     {author: "ivanov", text: "hello, world", edited: true},
//     {author: "void", text: "Сейчас напишу книгу по JS.", edited: false},
//     {author: "ivanov", text: "Спасибо.", edited: false},
//     {
//         author: "ivanov",
//         text: "Смысл такого видео? Все непонятные функции приходится самому смотреть. Надо не так делать. Пишете код - объясняете сразу, что к чему, голосом, ну, или там, текстом хотя бы, хотя лучше голосом.",
//         edited: true
//     },
//     {author: "void", text: "Поделитесь видео-каналами по js.", edited: false},
//     {author: "void", text: "Ничего не понравилось.", edited: false}
// ];
//
//
// function caunter(arr) {
//     let res = {edited: 0, notEdited: 0}
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].edited) {
//             res.edited += 1;
//
//         } else {
//             res.notEdited +=1
//         }
//     }
//     return res
//
// }
//
// console.log(caunter(allMessages))


// function multiply(a, b){
//     a * b
//     let result  ;
//     result=a*b;
//     return result;
// }
// console.log(multiply(10,2))


// function even_or_odd(number) {
// let result ;
// if(number %2 ==0){
//     result="Even"
// }else{
//    result="Odd"
//
// }
//
// return result;
// }
// console.log(even_or_odd(22))
//
//задача с learn javascript

// let users = [
//     {name: "Вася", age: 25},
//     {name: "Петя", age: 30},
//     {name: "Маша", age: 28}
// ];
//
// // let names = users.map((u)=>u.name)
// let ages = users.filter((u)=>u.age>27)
// console.log(ages); // Вася, Петя, Маша

// let users = [
//     { name: "Вася", surname: "Пупкин", id: 1 },
//     { name: "Петя", surname: "Иванов", id: 2 },
//     { name: "Маша", surname: "Петрова", id: 3 },
// ];
//
// let usersMapped = users.map((u)=>({fullName: `${u.name} ${u.surname}` , id: u.id}))
// console.log(usersMapped)
/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/
// задача с код ворса
// function opposite(number) {
//     return number * (-1)
// }
// console.log(opposite(15))

// function maps(x){
// let result=x.map((m)=>m *2)
//     return result
// }
// console.log(maps([1,2,3]))


// Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
//
//     Например:
//
// Учитывая [34, 15, 88, 2], что ваше решение вернется2
// Учитывая [34, -345, -1, 100], что ваше решение вернется-345
// Для целей этого ката вы можете предположить, что предоставленный массив не будет пустым.


// function findSmallestInt(args) {
//     let result = args[0];
//     for (let i = 0; i < args.length; i++) {
//
//         if(args[i] < result){
//             result= args[i]
//         }
//     }
//     return result
//
//
// }
//args[0]
// console.log(findSmallestInt([2, -5, 8, 0]))


//
// Просто удалите пробелы из строки, затем верните результирующую строку

// function noSpace(x){
// return x.split('').filter((item)=> item !== ' ').join('')
//
// }
//
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

// Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.
//
//     Например, for [1, 2, 2]это должно возвращаться , 9потому что 1^2 + 2^2 + 2^2 = 9.

// function squareSum(numbers){
// return numbers.map((o)=>o*o).reduce((sum, current) => sum + current, 0);
// }
//
// console.log(squareSum([1,2,2]))


// Найдите среднее значение (среднее) списка чисел в массиве.
//
//     Информация
// Чтобы найти среднее значение (среднее) набора чисел, сложите все числа вместе и разделите на количество значений в списке.
//
//     Для примера список1, 3, 5, 7
//
// 1. Сложите все числа
//
// 1+3+5+7 = 16
// 2. Разделить на количество значений в списке. В этом примере в списке 4 числа.
//
// 16/4 = 4
// 3. Среднее (или среднее) этого списка равно 4.
// let findAverage = function (nums) {
//     //nums = [1, 3, 5, 7]
//     let n=0;
//     for (i=0; i<nums.length ;i++){
//        n+=nums[i]
//     }
// let vreeq=nums.length
//     return n/vreeq
// }
// console.log(findAverage([1,3,5,7]))


// Сможете ли вы найти иголку в стоге сена?
//
//     Напишите функцию findNeedle(), которая принимает arrayполный мусор, но содержит один"needle"
//
// После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), в котором говорится:
//
//     "found the needle at position "плюс indexон нашел иглу, так что:
//
//     Пример (ввод --> вывод)
//
//         ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Примечание. В COBOL он должен возвращать "found the needle at position 6"
// function findNeedle(haystack) {
//     for(let i=0; i<haystack.length ;i++){
//         if (haystack[i]==='needle'){
//             return `found the needle at position ${i}`
//         }
//     }
//   return
// }
// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))

// В этом ката ваша задача состоит в том, чтобы вернуть два различных самых высоких значения в списке. Если уникальных значений меньше двух, верните как можно больше из них.
//
//     Результат также должен быть упорядочен от высшего к низшему.
//
//     Примеры:
//
// [4, 10, 10, 9]  =>  [10, 9]
//     [1, 1, 1]  =>  [1]
//     []  =>  []

// function twoHighest(arr) {
//     let result =[];
//     let ty = arr.sort(function (a, b) {
//         return b - a;
//     });
//     for(let i=0; i<ty.length; i++){
//         if(ty[i] && result.length<2 && ty[i] !== ty[i-1]){
//             result.push(ty[i])
//         }
//     }
//     return result;
// }
//
// console.log(twoHighest([ ]))
// Суммирование
// Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом больше 0.
//
// Например:
//     summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// let summation = function (num) {
//     let result = 0
//     for (let i = 1; i <= num; i ++) {
//        console.log(i)
//         result = result+i
//     }
//    return result;
// }
// console.log(summation(8));

// Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает наличие).
//
// Например,
//
//     [true,  true,  true,  false,
//         true,  true,  true,  true ,
//         true,  false, true,  false,
//         true,  false, false, true ,
//         true,  true,  true,  true ,
//         false, false, true,  true]
// Правильный ответ будет 17.
//
// Подсказка: не забудьте проверить наличие неправильных значений, таких как null/undefined

// function countSheeps(arrayOfSheep) {
//     let result = 0 ;
//
//         for(let i=0 ; i<arrayOfSheep.length; i++){
//            if( arrayOfSheep[i] === true ){
//                result++
//            }
//         }
//    return result
// }
// console.log(countSheeps([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]))

// Описание:
//     Создайте простую функцию с именем приветствие , которая возвращает самое известное «привет, мир!».
//
// Очки стиля
// Конечно, это настолько просто, насколько это возможно. Но насколько умным вы можете быть, чтобы создать
// самый креативный приветственный мир, какой вы только можете себе представить? Какое решение «hello world»
// вы хотели бы показать своим друзьям?


// function greet (){
//
//     return "hello world!"
// }
// console.log(greet())

// Нам нужна функция, которая может преобразовать строку в число. Какие способы достижения этого вы знаете?
//
//     Примечание. Не беспокойтесь, все входные данные будут строками,
//     а каждая строка является абсолютно допустимым представлением целого числа.
//
//     Примеры
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7
//
// const stringToNumber = function(str){
// let number= Number(str)
//     return number
// }
// console.log(stringToNumber('123'))

// Натан любит кататься на велосипеде.
//     Поскольку Натан знает, как важно избегать обезвоживания, он выпивает 0,5 литра воды за час езды на велосипеде.
//     Вам дается время в часах, и вам нужно вернуть количество литров, которые выпьет Натан, округленное до наименьшего значения.
//     Например:
//
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

// function litres(time) {
//    let result= Math.floor(time*(0.5))
//     return result;
// }
// console.log(litres(11.8))

// Задача
// Первое столетие охватывает период с 1 года по 100 год включительно , второе столетие — с 101 года по 200 год включительно и т. д.
// Учитывая год, верните столетие, в котором он находится.
//
//     Примеры
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// function century(year) {
//  let result = Math.ceil(year/100)
//     return result
// }
// console.log(century(2000))

// Создайте функцию, которая будет возвращать оператор приветствия, использующий ввод; ваша программа должна вернуться,
//     "Hello, <name> how are you doing today?".
//     [Убедитесь, что вы вводите именно то, что я написал, иначе программа может работать неправильно]

// function greet(name){
//     let hi = `Hello, ${name} how are you doing today?`
//    return  hi
// }
// console.log(greet('Sema est govno'))

// Ваша задача — создать функцию, которая выполняет четыре основные математические операции.
//
//     Функция должна принимать три аргумента - операция(строка/символ), значение1(число), значение2(число).
//     Функция должна возвращать числовой результат после применения выбранной операции.
//
// Примеры(Оператор, значение1, значение2) --> вывод
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// function basicOp(operation, value1, value2)
// {
//     if(operation == '+'){
//         return value1 + value2
//     }else if(operation == '-'){
//         return value1 - value2
//     } else if(operation == '*'){
//         return value1 * value2
//     }else if(operation == '/'){
//         return value1 / value2
//     }
// return;
// }
// console.log(basicOp('-', 15, 18))


// Реализуйте функцию, которая преобразует данное логическое значение в его строковое представление.
//
//     Примечание. Будут даны только действительные входные данные.
//
// true =====> "true"
// false =====> "false"


// function booleanToString(b){
//     if(b === true){
//         return "true"
//     }else(b === false)
//     return "false"
// return;
// }
// console.log(booleanToString(false))

// Код так быстро, как вы можете! Вам нужно удвоить целое число и вернуть его.

// function doubleInteger(i) {
//     return i*2;
// }
// console.log(doubleInteger(5))