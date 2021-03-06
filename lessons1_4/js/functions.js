/*
Функция — это "подпрограмма", которую можно вызывать из внешнего (или внутренного, в случае рекурсии)
по отношению к функции кода.
Функция состоит из последовательности инструкций, называемой телом функции.
Значения могут быть переданы в функцию, а функция вернёт значение.

В JavaScript функции являются объектами

Именованные функции (FunctionDeclaration)
Именованные функции доступны везде в области видимости, т.е к ней можно обращаться и до ее создания и после
создаются интерпретатором до выполнения кода.
function имя_функции([параметр1[=значение по умолчанию], параметр2, ... , параметрN]) {  параметр - имя аргумента, передаваемого в функцию
    тело функции; – код, который выполняется при её вызове.
    [return;] выражение
}

ИМЯ ФУНКЦИИ ДОЛЖНО ОТРАЖАТЬ ТО, ЧТО ОНА ДЕЛАЕТ!!!  должно быть глаголом, т.к. функция – это действие.
функция не должна выполнять больше одного действия

function printFunction() {
    console.log('Так выглядит наша функция:\n' + printFunction);
}

printFunction(); // Вызов функции -

При вызове функции ей можно передать данные, которые Она использует в зависимости от кода

В JavaScript любая функция может быть вызвана с произвольным количеством аргументов.
Значения аргументов, которых нет в списке параметров можно получить
Доступ к ним осуществляется через объект arguments. (там они хранятся)
Например, выведем список всех аргументов:
function showAllUsers() {

for (var i = 0; i < arguments.length; i++) {
	console.log('User ' + (i+1), arguments[i]);
}
}
showAllUsers('User1', 'User2', 'User3');

Все параметры находятся в arguments, есть они в списке или нет

 Функцию можно вызвать с любым количеством аргументов.
 При объявлении функции необязательные аргументы, как правило, располагают в конце списка.
/Если параметр не передан при вызове – он считается равным undefined.
можно задать параметры по умолчанию в теле функции:

function printUsersInfo(name, surname) {
 	surname = surname || 'фамилия не известна'  // также можно: surname = surname || 'фамилия не известна' + name);
 	console.log(name + ' ' + surname);
}
printUsersInfo('Grisha');


или
function printUsersInfo(name, surname='фамилия не известна') {
    console.log(name + ' ' + surname);
}
printUsersInfo('Grisha');

нельзя задать по умолчанию тип данных, поэтому можно делать проверку внутри функции


function checkType(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        console.log('Ошибка ввода... Введите число!!!');
        return false;
    } else return true;
}



Функции также могут быть созданы внутри выражения, их можно присвоить переменной
Такие функции анонимны:
Анонимные функции (FunctionExpression)
Анонимные - доступны только с момента объявления, к ней можно обратиться только после создания

var имя_переменной = function([параметр1[=значение по умолчанию], параметр2, ... , параметрN]) {
  тело функции
};

var evenNumber = function(number) {
    if (number%2 == 0) {
            return 'четное';
    } else return 'нечетное'
}
console.log(evenNumber(9));


РЕКУРСИЯ
В теле функции могут быть вызываны другие функции для выполнения подзадач.
РЕКУРСИЯ – когда функция вызывает сама себя (как правило, с другими аргументами.).
Общее количество вложенных вызовов называют глубиной рекурсии.
Максимальная глубина рекурсии в браузерах ограничена, - 10000 вложенных вызовов для HTML


function pow(x, n) {
    if (n !== 1) {
        return x * pow(x, n-1);
    } else {
        return x;
    }
}

console.log(pow(2, 3));


ЗАМЫКАНИЯ
Если вы объявляете функцию внутри другой функции, первая получает доступ к переменным и аргументам последней:
function имя_функции1(параметр1) {
   var переменная;
   function имя_функции2() {
      имеет доступ к параметр1 и переменная
    }
 }

такие переменные продолжают существовать и остаются доступными внутренней функцией даже после того,
как внешняя функция, в которой они определены, была исполнена.

function counter() {
   var num = 0;
    return function() {
    	return num++; // запоминает
	};
}

var count = counter();

console.log( count() ); // 1
console.log( count() ); // 2
console.log( count() ); // 3

В функцию можно передавать функцию
*/