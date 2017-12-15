// ооп - функциональный стиль

function ParentClassName() {
    var name = "Родительский класс";
    this.publicParentProperty = "публичное свойство родителя";
}


function ClassName(args) {  // функция конструктор - создание класса
    ParentClassName.call(this); // наследование от ParentClassName

    this.args = args;

    var privatePropertyName = 'value'; // приватное свойство
    this.publickPropertyName = 'value'; // публичное свойство

    function privateMethodName() { // приватный метод
        // some code
        console.log("приватный метод");
    }

    this.publickMethodName = function() { // публичный метод
        // some code
        console.log("публичный метод");
    };

    // сеттер - устанавливает значение свойства объекта
    this.setValue = function (value) {
        privatePropertyName = value;
    };

    // геттер - доступ к свойству
    this.getValue = function () {
        return privatePropertyName;
    }
}

var obj = new ClassName("какие-то аргументы"); // создание объекта

// console.log(obj.privatePropertyName);  // доступно только внутри класса
console.log(obj.publickPropertyName);  // доступно везде

// obj.privateMethodName();  // доступен только внутри класса
obj.publickMethodName(); // доступен везде

obj.setValue('какое-то значение');
obj.getValue();

// благодаря наследованию ClassName имеет доступ к публичным свойствам и методам родителя
console.log(obj.publicParentProperty);
