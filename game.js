
var _canvas = document.getElementById('canvas');
var _canvasContext = null;


//Draw entire buffer onto main canvas: _canvasContext.drawImage(_canvasBuffer, 0, 0);

/* Loading */

//HTML onLoad event - Loading the game
$(window).load(function() {
		//check whether browser supports getting canvas context
		if (_canvas && _canvas.getContext) {
		_canvasContext = canvas.getContext('2d');
		// ... drawing here ...
		_canvasContext.strokeStyle = "rgb(0,0,0)"
		}

		//Setup double buffering (_canvasBuffer)
		_canvas = document.getElementById('canvas');
		if (_canvas && _canvas.getContext) {
		_canvasContext = _canvas.getContext('2d');
		_canvasBuffer = document.createElement('canvas');
		_canvasBuffer.width = _canvas.width;
		_canvasBuffer.height = _canvas.height;
		_canvasBufferContext = _canvasBuffer.getContext('2d');
		}

		//Event listeners for keystrokes
		window.addEventListener('keydown', handleKeyDown, true);
		window.addEventListener('keyup', handleKeyUp, true);

		//Finally call the game loop
		game();
	}
)

/* Game Loop */

function game()
{
	draw();
	update();
	setTimeout('game()', 10) //Every 10ms
}

function draw() {
	drawMap();
	_canvasContext.fillRect(player.x, player.y, 30, 30);
	_canvasContext.drawImage(_canvasBuffer, 0, 0);
}

function update() {
	handleInteractions()
	player.x += player.velx;
	player.y += player.vely;
}


/* Player */

player = new player();

function player()
{
	this.velx = 1;
	this.vely = 1;
	this.x = 0;
	this.y = 0;
	this.img = 'images/tile2.png';
}

function drawPlayer() {

}

/* Interactivity */
keys = [];

//Disable browsers usual function of scrolling with up/down arrow keys
document.onkeydown=function(){return event.keyCode!=38 && event.keyCode!=40}  

function handleKeyDown(evt) {
	keys[evt.keyCode] = true;
}
function handleKeyUp(evt) {
	keys[evt.keyCode] = false;
}

function handleInteractions() {
	if (keys[38]) { //Up arrow
		player.vely = -2;

	}
	else if (keys[37]) { //Left Arrow
		player.velx = -2;
	}
	else if (keys[39]) {
		player.velx = 2;
	}
	else if (keys [40]) {
		player.vely = 2;
	}
	else {
		player.vely = 0;
		player.velx = 0;
	}
}


