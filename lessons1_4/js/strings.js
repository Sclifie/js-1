<<<<<<< HEAD
(function() {
    'use strict';
    
    var str = "String";
    str = "Str \"hunori\" ing";
    str = "Str with \\";
    str = "Str with \n";
    
    
    // методы и свойства строк
    // 1 stringName.length - длина строки
    
    str = '"8"';
    console.log("длина строки str = ", str.length);
    
    // 2 stringName.charAt(index) - доступ к символам строки по индексу, нумерация с 0
    str = "Stringt";
    console.log("str.charAt(3)", str.charAt(3));
    console.log("str.[3]", str[3]);
    
    
    //3 stringName.indexOf(searchvalue, start);
    console.log(str.indexOf("t", 3));
    
    // 4. stringName.toUpperCase();
    // 5. stringName.toLowerCase();
    console.log(str.toLowerCase(), str);
    console.log(str[3].toUpperCase(), str);
    
    // взятие подстроки
    // stringName.substr(start_index [, length]) вернет строку из length, начиная со start
    str = "Stringt";
    console.log(str.substr(-12, 1));
    
    // stringName.substring(start [, end])
    console.log(str.substring(1, Infinity));
    
    // stringName.slice(start [, end])
    
    
    
    // сравнение строк
    // stringName.localeCompare(strForCompare
    // [, locales, options])
    str = "b";
    var str1 = 'c';
    console.log(str.localeCompare(str1));
    // 1 
    // -1
    // 0
    
    
=======
(function () {
    'use strict';

    // Строки, строковые функции

    var str = 'Строка'; // создание строки
    console.log(str);

    // \n «перенос строки».
    str = 'Очень \nдлинная \nстрока';
    console.log(str);

    // Экранирование специальных символов обрантым слэшем

    str = 'Переменная с именем \'str\'';
    console.log(str);
    str = 'Переменная с именем "str" ';
    console.log(str);
    str = 'Обратный слэш \\';
    console.log(str);

    // Методы и свойства строк
    // 1. string.length длина строки
    str = 'Str';
    console.log('Длина строки ' + str + ' = ' + str.length);
    str = '\nS t r'; // Пробелы и \n тоже учитываются
    console.log('Длина строки ' + str + ' = ' + str.length);

    // 2. string.charAt(index); осуществляет доступ к символам, первый символ имеет позицию 0
    str = 'Строка';
    console.log('Третий символ в "Строка" = ', str.charAt(3)); // осуществляет доступ к символам, первый символ имеет позицию 0
    console.log('Первый символ в "Строка" = ', str[1]);


    // 3. string.indexOf(searchvalue, start)  возвращает позицию, на которой находится подстрока,
                                           //либо -1, если ничего не найдено
    str = 'Строка с подстрокой';
    console.log(str.indexOf('с', 8));

// Содержимое строки в JavaScript нельзя изменять.
// Нельзя взять символ посередине и заменить его. Как только строка создана – она такая навсегда.

    // 4. string.toUpperCase()  меняет регистр строки на верхний
    // string[index]..toUpperCase()  меняет регистр символа на верхний
    console.log(str, 'к верхнему регистру - ', str.toUpperCase());

    // 5. string.toLowerCase()   меняет регистр строки на нижний
    // string[index].toLowerCase()   меняет регистр символа на нижний
    console.log('1 буква ', str, 'к нижнему регистру - ', str[0].toLowerCase());


    // Взятие подстроки: substr, substring, slice.
    // 6. string.substr(start [, length])   возвращает подстроку из length символов, начиная со start позиции
    str = 'Строка';
    console.log(str.substr(2, 3));
    /*
    Если передано отрицательное число, start трактуется как strLength - start, те использует его как индекс символа, начиная с конца строки.
    Если параметр start является положительным и он больше, либо равен длине строки, метод substr() вернёт пустую строку.
    Если параметр start отрицателен и по модулю больше длины строки, метод substr() будет использовать 0 в качестве начального индекса.
    Если параметр length равен нулю или отрицателен, метод substr() вернёт пустую строку.
    Если параметр length опущен, метод substr() извлечёт все символы до конца строки.
    JScript от Microsoft не поддерживает отрицательные значения для начального индекса.
    */

    // 7. string.substring(start [, end])  возвращает подстроку, начиная с индекса start до, но не включая, индекс end
    console.log(str.substring(2, 4));
    /*
    Если аргумент start === end, метод substring() вернёт пустую строку.
    Если аргумент end опущен, метод substring() извлечёт символы до конца строки.
    Если любой из аргументов меньше, либо равен нулю или равен NaN, он будет трактоваться как равный 0.
    Если любой из аргументов больше, чем string.length, он будет трактоваться как равный string.length
    */
    /*
    Если аргумент start будет больше аргумента end, то метод substring() сработает так,
    как если бы аргументы были поменяны местами;
    например, str.substring(1, 0) == str.substring(0, 1).
    */

    // 8. string.slice(start [, end])  извлекает часть строки и возвращает новую строку - возвращает построку со start по end символ (end не вкл)
    console.log(str.slice(2, 5));
    /*
    Если start отрицателен, то трактуется как string.length - start.
    Если end опущен, slice() извлечёт всё до конца строки.
    Если end отрицателен, то трактуется как string.length - end.
    */

    // 9. string.localeCompare(compareString[, locales[, options]])   сравнение строк
    // locales и options позволяют приложениям определять язык, чей порядок сортировки оно хочет использовать и настраивать поведение этой функции.
    console.log(str.localeCompare('Строчка'));
    // возвращает
    // -1, если str1 < str2,
    // 1, если str1 > str2 и
    // 0, если они равны.

>>>>>>> 07a461eff6ac3a582bdf529d4fc1b5bb05992f1f
}());