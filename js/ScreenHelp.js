function ScreenHelp() {
	//
	Game.console.log('ScreenHelp()');
	//
	this.mainTitle = new MainTitle();
	this.option1 = new Option1();

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function MainTitle() {
		this.left = Game.AUTO_CENTER;
		this.top = 20;
		this.width = 250;
		this.height = 60;
	}

	MainTitle.prototype.draw = function(canvas) {
		//
		Game.console.log('    MainTitle.draw('+canvas+')');
		//
		var canvasContext = canvas.getContext('2d');
		var canvasW = canvas.width;
		var canvasH = canvas.height;
		//
		Game.checkAutoValues(this, canvasW, canvasH);
		//
		canvasContext.fillStyle = '#FF0';
		canvasContext.fillRect(this.left, this.top, this.width, this.height);
	};

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function Option1() {
		this.left = Game.AUTO_CENTER;
		this.top = 135;
		this.width = 150;
		this.height = 20;
	}

	Option1.prototype.draw = function(canvas) {
		//
		Game.console.log('    Option1.draw('+canvas+')');
		//
		var canvasContext = canvas.getContext('2d');
		var canvasW = canvas.width;
		var canvasH = canvas.height;
		//
		Game.checkAutoValues(this, canvasW, canvasH);
		//
		canvasContext.fillStyle = '#0FF';
		canvasContext.fillRect(this.left, this.top, this.width, this.height);
	};

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
}

ScreenHelp.prototype = {
	draw: function(canvas) {
		//
		Game.console.log('  ScreenHelp.draw('+canvas+')');
		//
		var canvasContext = canvas.getContext('2d');
		var canvasW = canvas.width;
		var canvasH = canvas.height;
		//
		canvasContext.clearRect(0, 0, canvasW, canvasH);
		//
		this.mainTitle.draw(canvas);
		this.option1.draw(canvas);
	},
	onClick: function(event) {
		//
		Game.console.log('  ScreenHelp.onClick('+event+')');
		//
		var point = Game.getMousePos(event);
		//
		if (Game.collides(point, this.option1)) {
			MyGame.getInstance().currentScreen = Game.SCREEN_MAIN_MENU;
			MyGame.getInstance().refresh();
		}
	}
};