(function(){
    'use strict';
    
    var slider = {
        init: function(id){            
            this.elem = document.getElementById(id);
        },
        add: function(src, alt) {
            var img = document.createElement('img');
            img.setAttribute('src', src);
            img.setAttribute('alt', alt);
            this.elem.appendChild(img);           
        },
        
        
    };
     
    
    slider.init('slider');
    slider.add('', 'alt txt');
    slider.add('', 'alt2 txt');
    slider.add('', 'alt3 txt');
    
    
    
    
//    var obj = {
//        name: "obj name",    
//        id: 12,  
//        meth: function() {
//            for (var key in obj) {
//                console.log("in obj", key, obj[key]);
//            }
//        }
//    };
//    
    
//    for (key in obj):
//    var arr = [1, 3, 5];
//    
//    for (var i = 0; i<arr.length; i++) {
//        console.log(i, arr[i]);
//    }
//    
    
//    var obj2 = {
//        key1: 'val1',
//        key2: 'val2',
//        key3: 'val2',
//    }
//    for (var key in window) {
//        console.log(key, window[key]);
//    }
    
    // родитель для формы
    var formContainer = document.getElementById('form');
    
    // форма
    var form = document.createElement('form');
    form.setAttribute("id", "form_id");
    form.setAttribute("action", "#");
    form.setAttribute("method", "post");
    
    // input
    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("required", true);
//    input1.setAttribute("id", "input_id");
        
    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    
    // checkbox
    var check = document.createElement('input');
    check.setAttribute("type", "checkbox");
    check.checked = true;
    
    var btn = document.createElement('button');
    btn.setAttribute("value", "btn");
    
    
    // добавление элементов в форму
    form.appendChild(input1);
    form.appendChild(input2);
    form.appendChild(check);
    form.appendChild(btn);
    
    // добавление формы в html
    formContainer.appendChild(form);
    
 
//    document.getElementById('input_id').checked;
    
    console.log("input_val", document.getElementById('input_id').value);
    
    var click = document.getElementById("click");    
    click.addEventListener("click", showClickElem);
    
    // click
    // contextmenu
    // dblclick
    // mousedown
    // mouseup
    // mouseover
    // mouseout
    // mousemove
    
    function showClickElem(e){
        console.log("click", document.getElementById('input_id').value);
//        console.log("event", e);
    }
    
    
//    click.removeEventListener("click", showClickElem);
    
    
    click.addEventListener("contextmenu", dbClickInfo);
    
    function dbClickInfo(event) {
        event.preventDefault();
        console.log("contextmenu", this);        
    }    
    
//    document.body.addEventListener("mousemove", showCoord);
    
    document.getElementById("mousemove").addEventListener("mousemove", showCoord);
    
    function showCoord(event) {
        console.log("mouse coords: ", event.clientX, event.clientY);
    }
    
    
    
    
    
    
    
    
    
}());