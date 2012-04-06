function Main(){
	game = new Game();
	game.Setup();
	
	setInterval(game.Update, 960/FPS);
	game.Draw();
}

var FPS = 30;
var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
var CANVAS_HEIGHT = 480, CANVAS_WIDTH = 800;

function Install(){
        navigator.mozApps.install("http://nklsrh.github.com/BQR/manifest.webapp");
        document.getElementById('installBtn').style.display = "none"; 
        Main();       
        return false;
}
