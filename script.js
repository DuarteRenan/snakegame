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
   
   var ts_x;
var ts_y;
document.addEventListener('touchstart', function(e) {
   e.preventDefault();
   var touch = e.changedTouches[0];
   ts_x = touch.pageX;
   ts_y = touch.pageY;
}, false);

document.addEventListener('touchmove', function(e) {
   e.preventDefault();
   var touch = e.changedTouches[0];
   td_x = touch.pageX - ts_x; // deslocamento na horizontal
   td_y = touch.pageY - ts_y; // deslocamento na vertical
   // O movimento principal foi vertical ou horizontal?
   if( Math.abs( td_x ) > Math.abs( td_y ) ) {
      // é horizontal
      if( td_x < 0 ) {
        vx = -vel;
        vy = 0; // é para esquerda
      } else {
            vx = vel;
        vy = 0;// direita
      }
   } else {
      // é vertical
      if( td_y < 0 ) {
       vx = 0;
        vy = -vel;   // cima
      } else {
        vx = 0;
        vy = vel; // baixo
      }
   }
}, false);
  }
}
 
