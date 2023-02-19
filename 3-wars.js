// Строки шаблона
// Строки шаблонов, это ката в основном нацелено на новое обновление JS ES6, в котором представлены строки шаблонов.
// Задача
// Ваша задача — вернуть правильную строку, используя функцию «Шаблон строки».
// Вход
// Две строки, проверка не требуется.
// Выход
// Вы должны вывести строку, содержащую две строки со словом ```' являются '```
// Ссылка: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

// var TempleStrings = function (obj, feature) {
//     return `${obj} are ${feature}`
// }
// console.log(TempleStrings("kkk", "jjj"))


//Если вы хотите, чтобы ваш код выполнял много похожей работы,
// хорошим выбором будет оператор цикла. Например, если нам нужно вычислить совокупное
// значение от 1 до 10, мы можем написать такой код:

// function sum1_10(){
//     return 1+2+3+4+5+6+7+8+9+10;
// }


// function getCount(str) {
//     return 0;
// }
//
// console.log(getCount("abracadabra"))


//Обычно, когда вы что-то покупаете, вас спрашивают, верны ли номер вашей кредитной карты, номер телефона или
// ответ на ваш самый секретный вопрос. Однако, поскольку кто-то может заглянуть вам через плечо, вы не хотите, чтобы это
// отображалось на вашем экране. Вместо этого мы маскируем его.
//
// Ваша задача — написать функцию maskify, которая заменяет все символы, кроме последних четырех, на '#'.
//Примеры
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""
//
// // "What was the name of your first pet?"
//
// "Skippy" --> "##ippy"
//
// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

// return masked string


function maskify(str) {
  const replacer = "#";
  console.log(replacer)
  const len = 4;

  if (str.length > 4) {
    if (len < 0)
      result = str.slice(0, -len) + replacer.repeat(str.length + len)
    else
      result = replacer.repeat(str.length - len) + str.slice(-len);
    return result;
  }

  return str
}


console.log(maskify('4556364607935616')) // '############5616'
console.log(maskify('1')) // '1'
console.log(maskify('11111')) //'#1111'