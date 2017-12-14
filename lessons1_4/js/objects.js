(function(){
    'use strict';
//    
//    
//    var obj = {};
//    
//    var user = {};
//    
//    user.login = "user1";  // создается свойство login со значением user1    
//    console.log(user);
//    
//    console.log(user.login);  
//    
//    console.log(user.email);
//    
//    user.email = "user1@mail.ru";
//    
//    // delete user.login;
//    
//    // in проверяет наличие свойства в объекте
//        
//    if("email" in user) {
//        console.log("user.email", user.email);
//    }
//    
//    // обращение к свойству через []
//    console.log(user.login);  
//    console.log(user['login']);  
//    
//    var propName = 'login';
//    console.log(user[propName]);  
//    var propName2 = "wq";
//    user[propName2] = 12;
//    console.log(user);
//    //
//    
//    propName2 = "rerere";
//    console.log(user);
//    
////    user = {
////        имя_свойства: значение,
////        имя_свойства2: значение,
////        имя_свойства3: значение,
////    };
////    user.login = "user1";
//    user = {
//        login: "user1",
//    };
//    
//    var size = 9;
//    var otherSize = size;
//    console.log("size=", size, "otherSize=", otherSize);
//    
//    
//    var otherSize = "4545";
//    console.log("size=", size, "otherSize=", otherSize);
//    
//    var horse = {
//        size: 'big'
//    };
//    
//    var pony = horse;
//    console.log("horse=", horse.size, "pony=", pony.size);
//    
//    
//    pony.size = "small";
//    console.log("horse=", horse.size, "pony=", pony.size);
//    
//    user = {
//        login: "user1",
//        introdusing: function() {
//            console.log("this", this);
//            console.log(this.login);
//        }
//               
//    };
//    
//    user.introdusing();
//    user.changeName("new login");
//    
//    
    
    
//    name, population, mayor 

//    var city1 = {};
//    city1.name = "SPb";
//    city1.population = 12;
//    city1.mayor = "SPb Mayor";
//    
//    var city2 = {
//        name: "City2",
//        population: 45,
//        mayor: "City2 Mayor",
//        changeName: function(new_name) {
//            console.log("this", this);
//            this.name = new_name;
//        }
//    };
//    
    
//    sity1 добавить метод, который позволяет забирать какую-то часть населения sity2 (и соответственно добавлять к своему)
//    city1.addPopulation = function(popCount) {
//        this.population = this.population + popCount;
//        city2.population = city2.population - popCount;
//    }
//    
//    console.log(city2.changeName('rew'));
    
//Написать функцию (вне этих объектов), которая показывает мэра города (в зависимости от объекта, переданного ей в качестве аргумента)
    
    
    
//    function changeMayor(new_val) {
//        this.mayor = new_val;
//        console.log(this.mayor);
//        
//    }
    // вызов функции
//    showMayor.call(city2, "New Name", "restrwt", "tqqyrt");
//    showMayor.apply(city1, ["New Name", "restrwt", "tqqyrt"]);
    
    // привязка контекста bind
//    var changeCity1 = changeMayor.bind(city1, "New Name");
//    console.log("changeCity1", window);
//    
//    var changeCity2 = changeMayor.bind(city2, "New Name22");
//    changeCity2();

//    Создать объект president c методом changeCountryMayor(), благодаря которому он сможет менять мэра города (в зависимости от объекта, переданного в качестве аргумента)
//    var city1 = {};
//    city1.name = "SPb";
//    city1.population = 12;
//    city1.mayor = "SPb Mayor";
//    
//    var city2 = {
//        name: "City2",
//        population: 45,
//        mayor: "City2 Mayor",
//        changeName: function(new_name) {
//            console.log("this", this);
//            this.name = new_name;
//        }
//    };
//    
//    var president = {
//         changeCountryMayor: function(new_name){
//             this.mayor = new_name;
//         }
//    };
//    
//    var changeC1 = president.changeCountryMayor.bind(city1, "m name");
//    changeC1();
////    president.changeCountryMayor.call(city1, "m name");
//    console.log(president, city1);
//    
    
    
    // Задание 2
// Написать функцию, которая на вход принимает строку и подстроку и ищет ВСЕ вхождения подстроки в строку

//var str = "trololololotrololololotrololololotrololololo";
//var substr = str.substring(3, 6);
//    // lol
//
//function searchString (str, substr) {
//	var position = 0;
//	var n = 0;
//	while (true) {
//		var foundPosition = str.indexOf(substr, position);
//		if (foundPosition == -1) break;
//	  	position = foundPosition + 1;
//	  	n++;
//        console.log(foundPosition);
//	}
//	return n;
//}
//
//console.log("Подстрока", substr, "встречается в строке", str, searchString (str, substr), "раз");
        
    
    

     
}());