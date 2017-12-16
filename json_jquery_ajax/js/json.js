(function(){
    'use strict';
    
    
//    JSON формат - текстовый формат обмена данными    
    
//    объекты
//    массивы
//    строки в ""
//    числа
//    true/false
//    null
    
//    JSON.parse - читает объекты из строки формата JSON
//    JSON.stringify - превращает объекты в json строку
    
//    '{"name": "Ivan"}'
//    
//    {
//        name: 'Ivan'
//    }
    
//    JSON.parse(str[, reviver]) 
    var jsonStr =  '{"name": "Ivan"}';
    // {"name": "Ivan"} 3 true
    var res = JSON.parse(jsonStr);    
    console.log(res);
    
//    reviver
    
     jsonStr =  '{"name": "Ivan", "login": "user"}';
    var obj = JSON.parse(jsonStr, function(key, value){
//        if (key === "") {
//            console.log("Empty")
//        }
        if(key === "login") {
            return "new login";
           } else {
               return value;
           }
    });
    
    console.log("obg", obj);
    
    
//    JSON.stringify(data[, replacer, space])
    
    var data = {
        name: "Oleg"
    };
    data = 4;
    data = true;
    data = "Str";
    data = [45, 90, 23];
    
    var jsonRes = JSON.stringify(data);
    console.log(jsonRes);
    
    
    data = {
        name: "Oleg",
        login: "user"
    };
    
    jsonRes = JSON.stringify(data, ["login", "name"]);
    console.log(jsonRes);
    
    data = {
        name: undefined,
        login: "user"
    };
    
//    data = [undefined, 56];
    jsonRes = JSON.stringify(data);

    console.log(jsonRes);
    
    
    
    

    
}());