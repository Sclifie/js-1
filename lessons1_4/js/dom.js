(function() {
    'use strict';
    
    console.log(document);
    
    
    var divs = document.getElementsByTagName('div');
    console.log("divs", divs);
    
    var divsByClassName = document.getElementsByClassName('div-class');
    
    console.log("div-class", divsByClassName);
    
    var querySelector = document.querySelector("li a");
    
    var querySelectorAll = document.querySelectorAll("li a");
    
        
    var div = document.getElementById('div');
    console.log("div", typeof div);
    
    var divChildren = document.getElementById('div').children;
    console.log("divChildren", divChildren);
        
//    div.remove();
    
    div.hasAttribute('id');
    console.log(div.hasAttribute('id'));
    
    div.setAttribute("id", "div_id");
    div.getAttribute("id");
    console.log(div.getAttribute("id"));
    div.removeAttribute("id");    
    
    div.style.color = "red";
    
//    div.classList.add("css-class-name");
//    console.log(div.classList.remove("css class name"));
//    div.classList.toggle("css class name");
    
    
    div.innerHTML = "<p>Text</p>";
//    divs[1].innerHTML = div.innerHTML;
    
        var pElem = document.createElement("img");
        pElem.setAttribute("src", "srcPath");
        pElem.setAttribute("alt", "pict");
        div.appendChild(pElem);
         
    
    
    
    
}());