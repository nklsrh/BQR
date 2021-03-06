var W = false, A = false, S = false, D = false, F = false, P = false, N = false;
var SHIFT = false, ESCAPE = false, preS = false;

	// bind keyboard events to game functions (movement, etc)
function updateKeyboard() {
  document.onkeydown = function(e) {
    e = e || window.event;
    switch (e.keyCode) { // which key was pressed?
		
case 87: // W, 		
W = true;	 break;
case 83: // S, 
S = true;         break;
case 65: // A,
A = true;         break;
case 68: // D, 
D = true;         break;
case 70: // F, 
F = true;         break;
case 80: // P; 
P = true;         break;
case 16: //LEFT SHIFT
SHIFT = true;         break;
case 27: //ESCAPE
ESCAPE = true;         break;
case 78: //N
N= true;					//localStorage.clear();         
break;
    }
  }
  // stop the player movement/rotation when the keys are released
  document.onkeyup = function(e) {
    e = e || window.event;
    switch (e.keyCode) {

case 87: // W, 		
W = false;	 break;
case 83: // S, 
S = false; 
preS = true;        break;
case 65: // A,
A = false;         break;
case 68: // D, 
D = false;         break;
case 70: // F, 
F = false;         break;
case 80: // P; 
P = false;         break;
case 16: //LEFT SHIFT
SHIFT = false;         break;
case 27: //ESCAPE
ESCAPE = false;         break;
case 78:
N = false; break;
    }
  }
}

function updateKeyboard_new(){
if(Key.isDown(Key.W)){W = true;}else{W=false;}
if(Key.isDown(Key.A)){A = true;}else{A=false;}
if(Key.isDown(Key.S)){S = true;}else{S=false;}
if(Key.isDown(Key.D)){D = true;}else{D=false;}
if(Key.isDown(Key.F)){F = true;}else{F=false;}
if(Key.isDown(Key.P)){P = true;}else{P=false;}
if(Key.isDown(Key.SHIFT)){SHIFT = true;}else{SHIFT=false;}
if(Key.isDown(Key.ESCAPE)){ESCAPE = true;}else{P=false;}
}

var Key = {
  _pressed: {},

  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  W: 87,
  S: 83,
  A: 65,
  D: 68,
  F: 70,
  P: 80,
  SHIFT: 16,
  ESCAPE: 27,
  
  isDown: function(keyCode) {
    return this._pressed[keyCode];
  },
  
  onKeydown: function(event) {
    this._pressed[event.keyCode] = true;
  },
  
  onKeyup: function(event) {
    delete this._pressed[event.keyCode];
  }
};


//window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
//window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);

function setupKeyboard(){
}
