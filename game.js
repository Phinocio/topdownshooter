
var canvas = document.getElementById('canvas');
var canvasContext = null;


//Draw entire buffer onto main canvas: _canvasContext.drawImage(_canvasBuffer, 0, 0);

drawMap();
drawScreen();

//HTML onLoad event - Loading the game
Event.observe(window, 'load', function()
	{
		//check whether browser supports getting canvas context
		if (canvas && canvas.getContext) {
		canvasContext = canvas.getContext('2d');
		// ... drawing here ...
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

		window.addEventListener('keydown', handleKeyDown, true);
		window.addEventListener('keyup', handleKeyUp, true);
	}
})
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
		player.vely = -50;
	}
	else if (keys[37]) { //Left Arrow
		player.velx = -50;
	}
	else if (keys[39]) {
		player.velx = 50;
	}
	else if (keys [40] {
		player.vely = 50;
	}
}


