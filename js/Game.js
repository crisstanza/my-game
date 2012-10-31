function Game() {
	//
	Game.console.log('Game()');
	//
	this.canvas = null;
	//
	this.currentScreen = Game.SCREEN_MAIN_MENU;
	this.son = null;
}

Game.LOG = false;

Game.AUTO_CENTER = 'auto-center';

Game.SCREEN_MAIN_MENU = 0;
Game.SCREEN_HELP = 1;
Game.SCREEN_GAME = 2;

Game.prototype = {
	setSon: function(_son) {
		//
		Game.console.log('Game.setSon('+_son+')');
		//
		son = _son;
	},
	setCanvas: function(canvasId) {
		//
		Game.console.log('Game.setCanvas('+canvasId+')');
		//
		canvas = document.getElementById(canvasId);
	},
	start: function() {
		//
		Game.console.log('Game.start()');
		//
		son.draw(canvas);
	},
	refresh: function() {
		//
		Game.console.log('Game.refresh()');
		//
		son.draw(canvas);
	}
};

Game.checkAutoValues = function(object, canvasW, canvasH) {
	//
	Game.console.log('Game.checkAutoValues('+object+', '+canvasW+', '+canvasH+')');
	//
	if (object.left == Game.AUTO_CENTER) {
		object.left = (canvasW - object.width)/2;
	}
	if (object.top == Game.AUTO_CENTER) {
		object.top = (canvasH - object.height)/2;
	}
};

Game.getMousePos = function(event) {
	var rect = event.target.getBoundingClientRect();
	return {
		x: event.clientX - rect.left - 1,
		y: event.clientY - rect.top - 1
	};
};

Game.collides = function(point, rectangle) {
	return (
		point.x >= rectangle.left && point.x <= (rectangle.left + rectangle.width) &&
		point.y >= rectangle.top && point.y <= (rectangle.top + rectangle.height)
	);
};

Game.console = {
	log: function(msg) {
		if (Game.LOG === true) {
			console.log(msg);
		}
	}
};