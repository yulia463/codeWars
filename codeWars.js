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


function even_or_odd(number) {
let result ;
if(number %2 ==0){
    result="Even"
}else{
   result="Odd"

}

return result;
}
console.log(even_or_odd(22))










