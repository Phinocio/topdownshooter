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
	_canvasContext.drawImage(player.img, player.x, player.y, 30, 30);
}

function movePlayer() {
	tile = getTileAtCoordinates(player.x, player.y);

	console.log("TILE: "+tile);

	if (player.direction == "up")
	{
		if (getTileAtCoordinates(player.x, (player.y - 1)) != 1 && getTileAtCoordinates((player.x + 31), player.y -1))
		{
			player.y--;
		}
	}
	else if (player.direction == "down")
	{
		if (getTileAtCoordinates(player.x, (player.y + 31)) != 1 && getTileAtCoordinates((player.x+30), (player.y + 31)) != 1)
		{
			player.y++;
		}
	}
	else if (player.direction == "left")
	{
		if (getTileAtCoordinates((player.x - 1), player.y) != 1)
		{
			player.x--;
		}
	}
	else if (player.direction == "right")
	{
		if (getTileAtCoordinates((player.x + 31), player.y) != 1 && getTileAtCoordinates(player.x + 31, player.y+30) != 1)
		{
			player.x++;
		}
	}

}

function getTileAtCoordinates(x,y) {
	xTile = Math.ceil((x+1)/32)-1
	yTile = Math.ceil((y+1)/32)-1

	console.log("Xtile: "+xTile);
	console.log("YTILE: "+yTile);

	/*if (x < 32) x = 32;
	if (y < 32) y = 32;
	xTile = x;
	xTile = xTile - (x % 32);
	xTile = x / 32;

	yTile = y;
	yTile = yTile - (x % 32);
	yTile = y / 32;
	
	yTile--;
	xTile--;
*/
	//console.log("Current tile: "+getMapTile(xTile, yTile));
	//These are supposed to be in this order. Just how the array is set up. yTile for [x], xTile for [y]
	return getMapTile(yTile, xTile);
}
