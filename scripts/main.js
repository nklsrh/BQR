function Main(){
	game = new Game();
	game.Setup();
	
	setInterval(game.Update, 960/FPS);
	game.Draw();
}

var FPS = 30;
var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');


