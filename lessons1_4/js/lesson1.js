// однострочный комментарий
/*
многострочный комментарий
*/
 
'use strict';
console.log("Lesson 1", "info"); // отладка
var varName; // объявление (создание) переменной
// буквы
// цифры (не может быть первым символом)
// $
// _
varName = 45; // присвоение переменной значения
varName = "new val"; // переопределение переменной

let var1, var2, var3;
let varName2 = "value";
console.log(window, varName2);

// data types
//простые типы данных
let str = "Строковой тип 'строка в кавычках' данных";
str = "Строковой \n тип \"строка в кавычках\" данных";
//str = '56';

console.log("str: ", str);

//логический тип
let boo = true;
let boo2 = false;

// К false преобразуются
//0
//""
//null
//undefined

//console.log(0 == false);
//console.log(" " == false);
//console.log("" == false);

// Числа
//isNaN(someVar);
// true - если значение является NaN или не может быть преобразовано в число
// false - если значение чило или может быть в него преобразовано
console.log("56", isNaN(56));
console.log("'56'", isNaN('56'));
console.log("wqwq", isNaN('wqwqwqw'));
console.log("false", isNaN(false));
console.log("true", isNaN(true));
console.log("", isNaN(""));

// null 
// undefined

let nullVar = null;
let undefVar;
let someNum = 78; // 23.54353635
//typeof имя переменной;
console.log("typeof str: ", typeof str);
console.log("typeof someNum: ", typeof someNum);

console.log("typeof nullVar: ", typeof nullVar);

// операторы

// арифметические операторы
// + | - | * | / | % - деление по модулю (остаток от деления)

console.log("56" - 9);
console.log("trhvrdy" - 9);

console.log("dewfjw" + "ihwirgjhw"); 


console.log("0.1 + 0.2 = ", 0.1 + 0.2);
//console.log(9999999999999999);

// операторы присваивания
// = присваивание
// += | -= | *= | /= | %=
let a = 30;
//a = a + 10; a += 10;

console.log(10%3); // 1

// операторы сравнения
// == равенство
//!= неравенство
//=== идентичность
//!== неидетичность
console.log("==", "" == false);
console.log("===", "" === false);
// > больше
// < меньше
// >= больше или равно
// <= меньше или равно

console.log(3 > 6);

// инкремент и декремент
// ++a - префиксный инкремент
// a++ - постфиксный инкремент

// --а - префиксный декремент
// а-- - префиксный декремент
//let x= 1;
//x++ | ++x
//x = x + 1;
//x += 1;
//let y = 9;
//console.log(x++, x++, ++x);
//console.log(++x === x++);
//console.log(y--);

// тернарный оператор "?"
/*
условие ? значение1 : значение2
если условие верно (true), вернет значение1, если неверно (false) - значение2
*/
let x = 2;
let y = 9;

let result = x < y ? x - y : x + y; 

console.log("result = ", result);

let now = new Date();
console.log("now: ", now );

let sec = now.getSeconds();
//let month = now.getMonth();
console.log("month", sec);
// 0 1 2 3 ... 11


// в начале каждого часа:
/*
5 минут
в течение 3х минут горит зеленый
затем, в течение 1 минуты - желтый
затем, в течение 1 минуты - красный
и тд
Какой сигнал горит в данный момент времени
*/
/*
0 1 2 - зеленый
3 - желтый
4 - красный
*/

let res = sec%5 >= 0 && sec%5 < 3 ?
    "green" : sec%5 === 3 ? "yellow" : "red";

console.log(sec, res);
//alert("lhfgfwsr");
console.log("%c%s", "color:red; font-size:18px;", res);


















