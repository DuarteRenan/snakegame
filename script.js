window.onload = function () {
 
  var stage = document.getElementById('stage');
  var ctx = stage.getContext("2d");
 
  setInterval(game, 90);

  const vel = 1;
  var vx = vy = 0;
  var px = py = 10;
  var tp = 20;
  var qp = 20;
  var ax = ay = 15;
  var trail = [];
  tail = 3;
  var n = 0;
  var rn = 0;
  var nt=0;
  let total = document.getElementById('points');
  let record = document.getElementById('recordp');
 
  rn<=n? rn=nt:false;
  function game() {
    
    ctx.fillStyle = "#7c9473" //bg;
    ctx.fillRect(0,0,stage.width,stage.height);
  

    px += vx;
    py += vy;

    if (px < 0) {
      px = qp - 1;
    }
    if (px > qp - 1) {
      px = 0;
    }
    if (py < 0) {
      py = qp - 1;
    }
    if (py > qp - 1) {
      py = 0;
    }
    
  
 
  ctx.fillRect(0, 0, stage.width, stage.height);
    ctx.fillStyle = "#cdd0cb"//apple;
   
   
    ctx.fillRect(ax * tp, ay * tp, tp, tp)

   
    ctx.fillStyle = "#293126" //snake;
    for (var i = 0; i < trail.length; i++) {
      ctx.fillRect(trail[i].x * tp, trail[i].y * tp, tp - 1, tp - 1);

   

      if (trail[i].x == px && trail[i].y == py) {
        
        vy = vx =0;
        n = 0;
        tail = 3;
        tail<=3?total.innerHTML = `SCORE:0`:false;
        
      }
      
    }
  
    trail.push({
      x: px,
      y: py
    })
    
    while (trail.length > tail) {
      trail.shift();
    }

    if (ax == px && ay == py) {
      tail++;
      ax = Math.floor(Math.random() * qp);
      ay = Math.floor(Math.random() * qp);
      total.innerHTML = `SCORE: ${n+=10} `
      record.innerHTML = `RECORD: ${rn<=n?rn=n:rn}`

     
    }
  }
  
  document.addEventListener("keydown", keyPush);
  function keyPush(event) {
    switch (event.keyCode) {
      case 37: // Left
        vx = -vel;
        vy = 0;
        break;
      case 38: // up
        vx = 0;
        vy = -vel;
        break;
      case 39: // right
        vx = vel;
        vy = 0;
        break;
      case 40: // down
        vx = 0;
        vy = vel;
        break;

    
      default:

        break;
    }
   
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
           vx = -vel;
        vy = 0; /* left swipe */ 
        } else {
            vx = vel;
        vy = 0; /* right swipe */
        }                       
    } else {
        if ( yDiff > 0 ) {
            vx = 0;
        vy = -vel; /* up swipe */ 
        } else { 
            vx = 0;
        vy = vel /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
  }
}
 
