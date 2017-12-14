(function(){
   'use strict';
   //let arr = [2, 5, 8, 'str', 45];
    //arr.includes(значение);  определяет, есть ли значение в массиве
    
//    alert('message');
    
    console.log("After alert");
    
//    prompt("title", " ");
    
    
    var promptRes = prompt("Enter Smth", " ");
    console.log("promptRes", promptRes, typeof promptRes);
    // prompt возвращает
    // то, что ввел пользователь, либо null, если ввод отменен
    
    var num = +"biybti7"; // NaN
    var num2 = +"45"; // 45
    
    var str = "ртшг4птсш3г";
    console.log("parseInt(str)", parseInt(str), typeof parseInt(str)); // чтение целого числа из строки
    console.log("parseFloat", parseFloat(str)); //чтение из строки числа с плавающей точкой
    
    
    var confirmRes = confirm("question?");
    console.log("confirmRes", confirmRes);
    
    // возвращает true, если пользователь нажал ок
    // false в случае отмены
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}());