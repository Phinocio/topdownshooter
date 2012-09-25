
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
	setTimeout('game()', 10); //Every 10ms
}

function draw() {
	drawMap();
	drawPlayer();
	_canvasContext.drawImage(_canvasBuffer, 0, 0);
}

function update() {
	handleInteractions()
	movePlayer();
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
		player.direction = "up";
	}
	else if (keys[37]) { //Left Arrow
		player.direction = "left";
	}
	else if (keys[39]) { //right arrow
		player.direction = "right";
	}
	else if (keys [40]) { //down arrow
		player.direction = "down";
	}
	else {

	}
}

$("#canvas").click(function(e){
   var parentOffset = $(this).parent().offset(); 
   //or $(this).offset(); if you really just want the current element's offset
   var relX = e.pageX - parentOffset.left;
   var relY = e.pageY - parentOffset.top;
   console.log('Mouse Click in canvas')
});

