function Game() {
	//
	console.log('Game()');
	//
	this.canvas = null;
	//
	this.currentScreen = Game.SCREEN_MAIN_MENU;
	this.son = null;
}

Game.prototype = {
	setSon: function(_son) {
		//
		console.log('Game.setSon('+_son+')');
		//
		son = _son;
	},
	setCanvas: function(canvasId) {
		//
		console.log('Game.setCanvas('+canvasId+')');
		//
		canvas = document.getElementById(canvasId);
	},
	start: function() {
		//
		console.log('Game.start()');
		//
		son.draw(canvas);
	}
};

Game.SCREEN_MAIN_MENU = 0;
Game.SCREEN_HELP = 1;
Game.SCREEN_GAME = 2;