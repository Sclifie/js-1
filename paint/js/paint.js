(function(){
    'use strict';
    
    var canvas = document.getElementsByTagName('canvas')[0];
    
    var handlers = {};
    handlers.startDraw = function() {
        console.log("начало рисования");
        this.isDrawing = true;
    };
    
    handlers.endDraw = function() {
        console.log("рисование окончено");  
        this.isDrawing = false;
    };
    
    handlers.drawing = function(event) {
        if (this.isDrawing) {
            console.log("рисование в процессе"); 
            
            
            
            var context = canvas.getContext('2d');
            context.beginPath();
//            context.
            context.strokeStyle = document.getElementById('paint_brush_color').value;
            context.arc(event.offsetX, event.offsetY, document.getElementById('paint_brush_size').value,
            0, Math.PI*2, false);
            context.stroke();
//            context.fill();
            
           
            
        } else {
            return;
        }        
    };
    
    canvas.addEventListener('mousedown', handlers.startDraw);
    canvas.addEventListener('mousemove', handlers.drawing);
    canvas.addEventListener('mouseup', handlers.endDraw);
    canvas.addEventListener('mouseout', handlers.endDraw);
    
    
    
    
    
    
    
    
//    elem.getBoundingClientRect();
//    {
//        'top': 
//        'bottom':        
//    }
    
    
    
    
    
}());