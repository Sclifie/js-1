// ссылка __proto__

var animals = {
    run: function() {
        console.log("Run");
    },
    eat: function() {
        console.log("Eat");
    },
    name: "animal",
}

var domastic = {
    sleep: function() {
        console.log("Sleep at home");
    }
}

domastic.__proto__ = animals;
// animals - прототип для domastic
// domastic прототипно наследуется от animals
domastic.run();
console.log("domastic", domastic);

//objName.hasOwnProperty(property)
for (var key in domastic) {
    if (domastic.hasOwnProperty(key)) {
        console.log("domastic has prop", key);
    } else {
        console.log("domastic has't prop", key);
    }
}

// animals.toString();
animals = Object.create(null); // создание объекта без свойств и методов
console.log(animals);

// создание классов с использованием прототипов
// 1. создать фцнкцию - конструктор (со свойствами)
// 2. Необходимые методы -> в prototype
function Car() {
    this.price = null;   
}

Car.prototype.move = function() {
    console.log("move");
}

var car = new Car(42344);
console.log(car);

car.move();













function LittleCar(price) {
    this.price = price;   
}










// наследование
LittleCar.prototype = Object.create(Car);


LittleCar.prototype.sale = function(){
    console.log("sale");
}

var littleCar = new LittleCar(1212);

LittleCar.prototype.move = function() {
    Car.prototype.move.apply(this, args); // вызов метода родительского класса внутри дочернего
}

//littleCar.prototype.move();






