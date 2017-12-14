<<<<<<< HEAD
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
        
    
    

     
=======
(function () {
    'use strict';

    // Объекты, как ассоциативные массивы

    var obj = {}; // Cоздание пустого ассоциативного массива
    console.log("obj", obj);
    // В объекте можно хранить любые значения, которые называются свойствами объекта.
    // Доступ к свойствам осуществляется по имени свойства («по ключу»)

    // Основные операции с объектами: создание, получение и удаление свойств.
    // Для обращения к свойствам используется запись «через точку», вида имя_объекта.имя_свойства(ключ)
    // Удаление осуществляется оператором delete

    var user = {};

    user.id = 1;  // создали свойство с именем id, присвоили ему значение 1
    user.login = 'nikname';
    user.email = 'nikname@email.ru';

    console.log(user);
    console.log('Имя пользователя: ', user.name);  // прочитали свойство name объекта user
    console.log('E-mail: ', user.email);  // прочитали свойство email объекта user

    delete user.email; // удалили свойство email

    console.log(user.email);
    console.log(user);

    // Если нужно проверить, есть ли в объекте свойство с определенным ключом.
    // используется оператор: "in": "имя_свойства(ключ)" in obj, имя свойства – обязательно должно быть в виде строки

    if ("email" in user) {
        console.log( "Свойство email существует!" );
    }

    if ("login" in user) {
        console.log( "Свойство login существует!" );
    }



    // Работа со свойствами  через квадратные скобки имя_объекта['имя_свойства']
    user.phone = '459807';
    user['phone'] = '459807';
    console.log(user);

    /*
    Доступ к свойству через переменную  Квадратные скобки также позволяют обратиться к свойству, имя которого хранится в переменной
    Доступ через точку используется, если мы на этапе написания программы уже знаем название свойства.
    А если оно будет определено по ходу выполнения, то единственный выбор – квадратные скобки.
    */
    var propName = 'phone';
    console.log(user[propName]);

    // литеральный способ объявление объекта
    // Объект можно заполнить значениями при создании, указав их в фигурных скобках
    /*
     var obj = {
     имя_свойства(ключ): значение,
     имя_свойства(ключ): значение,
     имя_свойства(ключ): значение
     }
     // */
    // Названия свойств можно перечислять как в кавычках, так и без, если они удовлетворяют ограничениям для имён переменных.

    user = {
        id: 3,
        login: 'qwerty',
        email: 'nikname@email.com'
    };

    // Хранение по ссылке и хранение по значению
    // хранение по значению
    var size = 9;
    var mySize = size;     // две разных переменных
    console.log('size =', size, 'mySize =', mySize);
    mySize = 165;
    console.log('size =', size, 'mySize =', mySize);

    // хранение по ссылке
    var horse = {
        size: 'big'
    };
    var pony = horse;   // ссылки на один объект!!!
    console.log(pony.size);

    pony.size = 'small';
    console.log('horse.size - ' + horse.size + '\npony.size - ' + pony.size);


    // Если в качестве свойства объекта указана функция - получаем МЕТОД объекта
    user = {
        id: 3,
        login: 'qwerty',
        email: 'nikname@email.com',
        changeLogin: function (newLogin) {
            console.log("this", this);
            this.login = newLogin;
        }
    };

    user.changeLogin('Gosha');
    console.log(user.login);

    // this используется для получения к свойствам и методам внутри объекта (this.login === user.login)



>>>>>>> 07a461eff6ac3a582bdf529d4fc1b5bb05992f1f
}());