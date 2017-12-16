'use strict';
class ClassName  {
    constructor(name) {  // вызывается в момент создание объекта
        this.name = name;
        this.val = null;        
        // перечисление всех свойств
    }   

    // описание методов
    showInfo() { 
        console.log("showInfo");          
    }
    
    // сеттер
    set setGetVal(val) {
        console.log(val);
        this.val = val;
    }
        
    // геттер
    get setGetVal() {
        return this.val;
    }
    
    static staticMethodName(val){ // статический метод, доступен для вызова без создания объекта
//        имяКласса.имяСтатического метода()
//        this.val = val; - не работать в статических методах с контектом this
        console.log("staticMethodName", val + 90);
    }
    
}

let obj = new ClassName();
obj.showInfo();
obj.setGetVal = "12";  // сеттер
console.log("obj", obj.setGetVal); // геттер

ClassName.staticMethodName(34);


class SomeClass extends ClassName { // наследование
    constructor(name) {
       super(name); // вызов конструктора родительского класса
        this.id = 9;
    }
}

var someClass = new SomeClass("someClass");
console.log(someClass);



function calc(a, b) {
    a+b;
}

calc(); //  a+b;












