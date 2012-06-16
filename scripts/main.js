function Main(){
	game = new Game();
	game.Setup();
	
	setInterval(game.Update, 960/FPS);
	game.Draw();
}

var FPS = 60;
var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
var CANVAS_HEIGHT = 480, CANVAS_WIDTH = 800;
canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;
