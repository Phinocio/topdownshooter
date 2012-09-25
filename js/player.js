//Player.js

/* Player */

player = new player();

function player()
{
	this.velx = 1;
	this.vely = 1;
	this.x = 32;
	this.y = 32;
	this.img = new Image();
	this.img.src = 'images/player1.png';
	setTimeout('changePlayerSprite1()', 300);
}

function changePlayerSprite1() {
	player.img.src = "images/player2.png";
	setTimeout('changePlayerSprite2()', 300)
}
function changePlayerSprite2() {
	player.img.src = "images/player1.png";
	setTimeout('changePlayerSprite1()', 300)
}

function drawPlayer() {
	_canvasContext.drawImage(player.img, player.x, player.y, 20, 20);
}

function movePlayer() {
	
	xtile = (player.x - 5) / 32;
	xtile = Math.round(xtile, 0);
	ytile = (player.y - 5) / 32;
	ytile = Math.round(ytile, 0);
	//Debugging
	_canvasContext.filleStyle = "rgb(100, 230, 100)";
	_canvasContext.fillRect(xtile*32, ytile*32, 32, 32)
	
	currentTile = mapArray[xtile][ytile];

	
	console.log("player.x:" + xtile);
	//console.log("player.y:" + ytile);
	console.log("currentTile: " + currentTile);

	if (currentTile == 1)
	{
		player.velx = player.velx * 0;
	}

	if (player.direction == "up")
	{
		player.y--;
	}
	else if (player.direction == "down")
	{
		player.y++;
	}
	else if (player.direction == "left")
	{
		player.x--;
	}
	else if (player.direction == "right")
	{
		player.x++;
	}

}
