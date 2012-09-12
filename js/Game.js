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

Game.checkAutoValues = function(object, canvasW, canvasH) {
	//
	console.log('Game.checkAutoValues('+object+', '+canvasW+', '+canvasH+')');
	//
	if (object.left == Game.AUTO_CENTER) {
		object.left = (canvasW - object.width)/2;
	}
	if (object.top == Game.AUTO_CENTER) {
		object.top = (canvasH - object.height)/2;
	}
};

Game.getMousePos = function(event) {
	var root = document.documentElement;
	var canvas = event.target;
	var rect = canvas.getBoundingClientRect();
	var mouseX = event.clientX - rect.top - root.scrollTop;
	var mouseY = event.clientY - rect.left - root.scrollLeft;
	return {x: mouseX, y: mouseY};
};

Game.AUTO_CENTER = 'auto-center';

Game.SCREEN_MAIN_MENU = 0;
Game.SCREEN_HELP = 1;
Game.SCREEN_GAME = 2;