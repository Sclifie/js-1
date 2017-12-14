(function () {
    'use strict';

    // 1. DOM (Document Object Model) – объектная модель, используемая для XML/HTML-документов.

    /*
    2. Узлы DOM дерева:
     Всё, что есть в HTML, находится и в DOM.
    Всего различают 12 типов узлов дерева, вот некоторые из них:
    1. Документ.
    2. Узел с типом «элемент» - каждый HTML-тег образует такой узел дерева,
    							вложенные в него теги - дочерние узлы.
    3. Узел с типом «текст» (текстовый узел) – содержит сам текст.
    						Текстовый узел содержит исключительно строку текста и
    						не может иметь потомков.
    */

    // 3. Перемещение по DOM:
    // все нижеперечисленные навигационные свойства только для чтения!
    console.log(document);  // объект document, вход в DOM

    // верхние элементы DOM доступны напрямую из document:
    console.log(document.documentElement); // доступ к <html>

    console.log(document.body); // доступ к <body>

    // В DOM доступна навигация по соседним узлам через ссылки:
    // 	1.По любым узлам.
    // 	2.Только по элементам.

    // если узел не найден, возвращают null

    // 1. Перемещение по любым узлам:
    // ДЕТИ
    // 1) childNodes хранит все дочерние узлы, включая текстовые
    // элемент.childNodes, например document.body.childNodes


    // 2) firstChild возвращает ссылку на первый дочерний узел внутри указанного узла.
    // элемент.firstChild, например document.body.firstChild


    // 3) lastChild возвращает ссылку на последний дочерний узел внутри указанного узла.
    // элемент.lastChild, например document.body.lastChild


    // РОДИТЕЛИ
    // 4) parentNode хранит все родительские узлы
    // элемент.parentNode, например document.body.parentNode

    // СОСЕДИ
    // 5) previousSibling - доступ к узлам слева
    // элемент.previousSibling, например document.body.previousSibling

    // 6) nextSibling - доступ к узлу справа
    // элемент.nextSibling, например document.body.nextSibling


    // 1. Перемещение только!!! по узлам-элементам:
    // ДЕТИ
    // 1) children хранит только дочерние узлы-элементы, то есть соответствующие тегам.
    // элемент.children, например document.body.children

    // 2) firstElementChild возвращает ссылку на первый дочерний узел-элемент
    // (игнорируя узлы текст и комментарий).
    // элемент.firstElementChild, например document.body.firstElementChild

    // 3) lastElementChild возвращает ссылку на последний дочерний узел-элемент
    // (игнорируя узлы текст и комментарий)
    // элемент.lastElementChild, например document.body.lastElementChild

    // РОДИТЕЛИ
    // 4) parentElement хранит родительские узлы-элменты
    // parentElement равно parentNode во всех случаях, кроме:
    console.log('Случай, когда parentElement не равен parentNode:\n',
        'Родительский узел <html> =', document.documentElement.parentNode,
        'а родительский узел-элемент <html> =', document.documentElement.parentElement);

    // СОСЕДИ
    // 5) previousElementSibling доступ к узлам-элементам слева
    // элемент.previousElementSibling, например document.body.previousElementSibling

    // 6) nextElementSibling доступ к узлам-элементам справа
    // элемент.nextElementSibling, например document.body.nextElementSibling


    // 4. Поиск элементов в DOM
    /*
    1) getElementById('some_id') - поиск по id элемента
    (элементу должен быть назначен специальный атрибут id,
    значение id должно быть уникально)
    существует только в контексте document
    */
    var elem = document.getElementById('some_div');

    // 2) getElementsByName('some_name') - позволяет получить все элементы
    // с одинаковыми значениями, заданные атрибутом name.
    // используется редко
    // elem = document.getElementsByName("elem_name");


    // 3) getElementsByTagName('tag_name') - ищет все элементы с заданным тегом внутри элемента
    // и возвращает их в виде списка.
    // Может искать внутри любого элемента,
    // (не только в контексте document).
    // Чтобы получить всех потомков, передать звездочку '*' вместо тега
    elem = document.body.getElementsByTagName('*');
    elem = document.getElementsByTagName('div');


    elem = document.getElementById('some_div');  // поиск в контексте document
    var h1InElem = elem.getElementsByTagName('h1'); // поиск в контексте elem


    // 4) getElementsByClassName('class_name') - возвращает коллекцию элементов
    // с классом class_name.
    // Может искать внутри любого элемента,
    // (не только в контексте document).
    elem = document.getElementsByClassName('class-name');


    // 5) querySelector(селектор) - возвращает только первый элемент,
    // соответствующий селектору CSS.
    elem = document.querySelector('ul>li');

    // 6) querySelectorAll() -  возвращает все элементы,
    // соответствующие селектору CSS
    elem = document.querySelectorAll('ul>li');


// 5. Создание элементов DOM
    // 1) document.createElement('tag') - cоздает новый узел-элемент с указанным тегом
    var newP = document.createElement('p');

    // 2) document.createTextNode('text') - cоздает новый текстовый узел с текстом text
    var newText = document.createTextNode('createTextNode("txt") создал новый текстовый узел');

    // 3) innerHTML - свойство позволяет получить HTML-содержимое элемента в виде строки.
    // В innerHTML можно и читать и писать.
    var div = document.getElementById('elem_id');
    div.innerHTML = '<div><h1>Text</h1></div>';

    // 4) Атрибуты HTML и свойства DOM
    // Атрибуты – это то, что написано в HTML, они должны быть строкой, видны в innerHTML
    // Работа с атрибутами осуществляетмя при помощт следующих методов:

    elem = document.getElementById('elem_id');
    elem.hasAttribute('href'); // проверяет наличие атрибута
    elem.setAttribute('type', 'button'); // устанавливает атрибут
    elem.removeAttribute('type'); // удаляет атрибут

    elem.getAttribute('href'); // получает значение атрибута

    // Свойства DOM-объекттов принимают любые значения, регистрозависимы, не видны в innerHTML
    // Узел DOM – это объект
    console.log('свойство href объекта DOM <a> =', elem.href);


    // 5) свойство style
    // элемент.style.width="100px";
    elem.style.backgroundColor = '#9370DB';


    // 6) classlist
    // атрибуту "class" соответствует свойство classList – это объект для работы с классами.
    // методы classList:
    // 1. elem.classList.contains('class') - возвращает true/false,
    // в зависимости от того, есть ли у элемента класс
    // 2. elem.classList.add("class") - добавляет класс
    // 3. elem.classList.remove("class") - удаляет класс
    // 4. elem.classList.toggle("class") // если класса class нет,
    // добавляет его, если есть – удаляет.

// 6. Добавление элемента в DOM
    // Чтобы DOM-узел был показан на странице, его необходимо вставить в document.
    // Созданные элементы вставляются в родительские:
    // 1) элемент_родитель.appendChild(элемент) - добавляет элемент
    // в конец дочерних элементов элемент_родитель
    var input = document.createElement('input'); // создали узел-элемент <input>
    input.setAttribute('type', 'button'); // добавили атрибут type="button"
    input.setAttribute('value', 'Кнопка'); // добавили атрибут value="Кнопка"
    input.classList.add('btnStyle'); // добавили class="btnStyle"

    var image = document.createElement('img'); // создали элемент <img>
    image.setAttribute('src', 'img/flowers.jpg'); // добавили атрибут src="img/flowers.jpg"
    image.setAttribute('alt', 'flowers'); // добавили атрибут alt="forest"
    image.classList.add('img'); // добавили class="img"

    var div = document.createElement('div');
    div.setAttribute('id', 'btnImg'); // добавили атрибут id="btnImg"
    div.classList.add('class-name');

    div.appendChild(input); // добавили в созданный <div>, также созданный <input>
    div.appendChild(image); // добавили в созданный <div>, также созданный <image>

    var elemForDiv = document.getElementById('elem_id'); // получили доступ к элементу,
    // в который будем вставлять все остальные
    elemForDiv.appendChild(div); // вставили в него созданный <div>
    // всместе с <input> и <image>

    // 2) элемент_родитель.insertBefore(элемент, сосед_справа) - вставляет элемент
    // в родительский перед элементом сосед_справа
    // если ходим вставить первым, нужно указать firstChild вторым аргументом


// 7. Элементы можно удалять из родительских:
    // 1) элемент_родитель.removeChild(элемент) - удаляет элемент из элемент_родитель


// 8. Замена элементов:
    // элемент_родитель.replaceChild(новый_элемент, элемент) - среди детей элемента_родителя
    // удаляет элемент и вставляет на его место новый_элемент



//     Обработчики событий
//        Чтобы повесить на элемент обработчик события
//     элемент.addEventListener('имя события', имя функции(без вызова));

//    чтобы удалить обработчик события
//     элемент.removeEventListener('имя события', имя функции(без вызова));
    var divElem = document.getElementById('elem_id');
    divElem.addEventListener('click', changeElemBackground);


    function changeElemBackground() {
        console.log("клик мыши на элементе", this);
        this.style.background = "red";
    }

//     события мыши

    // mousedown - кнопка мыши нажата над элементом.
    // mouseup - кнопка мыши отпущена над элементом.
    // mouseover - мышь появилась над элементом.
    // mouseout - мышь ушла с элемента.
    // mousemove - каждое движение мыши над элементом генерирует это событие.
   // click - вызывается при клике мышью на элементе
   //  contextmenu - вызывается при клике правой кнопкой мыши на элементе.
   //  dblclick - двойной щелчек мыши на элементе

//    вся информация о событии содержится в объекте события, он всегда передается первым аргументом, когда происходит событие
//    доступ к нему можно получить
    divElem.addEventListener('click', showEventInfo);
    function showEventInfo(event) {
        console.log("информация о событии", event);
    }

//     Удалить обработчик события, заданный по умолчанию
    divElem.addEventListener('contextmenu', delDefaultEvent);
    function delDefaultEvent(event) {
        event.preventDefault();

        // далее описывается код, который необходим Вам
        console.log("Меню по нажатию на правую кнопку мыши больше не отображается");
    }

//    события клавиатуры
//     keyup кнопка нажата над элементом
//     keydown  кнопка отпущена
//     keypress кнопка нажата и не отпущена











































}());