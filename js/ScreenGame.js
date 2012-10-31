function ScreenGame() {
	//
	Game.console.log('ScreenGame()');
	//
}

ScreenGame.prototype = {
	draw: function(canvas) {
		//
		Game.console.log('  ScreenGame.draw('+canvas+')');
		//
		var canvasContext = canvas.getContext('2d');
		var canvasW = canvas.width;
		var canvasH = canvas.height;
		//
		canvasContext.clearRect(0, 0, canvasW, canvasH);
		//
	},
	onClick: function(event) {
		//
		Game.console.log('  ScreenGame.onClick('+event+')');
		//
		var point = Game.getMousePos(event);
		//
	}
};