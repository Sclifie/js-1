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
    
    
}());