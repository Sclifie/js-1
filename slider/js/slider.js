(function(global){
    'use strict';
    
    var slider = {    
        init: function(id) {
            
            this.elem = document.createElement('ul');          document.getElementById(id).appendChild(this.elem);
            this.curentSlide = 0;
        },
        
        addSlide: function(src, alt) {
            var li = document.createElement('li');
            var img = document.createElement('img');
            img.setAttribute('src', src);
            img.setAttribute('alt', alt);
            
            img.style.height = window.innerHeight + "px";
            img.style.width = window.innerWidth + "px";
            
            li.appendChild(img);
            this.elem.appendChild(li);
        },
        
        nextSlide: function() {
//            i = 0
//            [li, li, li]
        if (this.curentSlide < this.allSlides.length-1) {
        this.allSlides[this.curentSlide].classList.remove('active');
        this.allSlides[this.curentSlide+1].classList.add('active');
        this.curentSlide++; 
            } else {
        this.curentSlide = 0;
this.allSlides[this.allSlides.length-1].classList.remove('active');
this.allSlides[0].classList.add('active');
            }              
        },
        
        runSlider: function() {
            this.allSlides = document.querySelectorAll('#slider > ul > li');
            this.nextSlide();
            setInterval(this.nextSlide.bind(this), 1500);
        },
        
        setSize: function() {
            var imgs = document.querySelectorAll('img');
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].style.height = window.innerHeight + 'px';
                imgs[i].style.width = window.innerWidth + 'px';
            }
        }
        
    };
    
//    slider.init('slider');
//    slider.addSlide('img/slide1.jpeg');
//    slider.addSlide('img/slide2.jpg');
//    slider.addSlide('img/slide3.jpeg');
//    slider.runSlider();    
    
    window.addEventListener('resize', slider.setSize);
    
    
    global.initSlider = slider.init.bind(slider);
    
    
}(window));











var slider = (function() {
    var currentSlide = 0;
    function init() {
        
    }
    
    function addSlide() {
        
    }
    
    
    return {
       initSlider: init,        
    };
    
    
    
}());

slider.initSlider();







elem.addEventListener('click', showSmth);

function showSmth() {
    console.log("show", this);
}



obj.showSmth.call(context); //"show", this
obj.showSmth.apply(context);  //"show", this

var show = obj.showSmth.bind(context); 
show();//"show", this


























