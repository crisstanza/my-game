function ScreenHelp() {
}

ScreenHelp.prototype.draw = function(canvas) {
	//
	console.log('  ScreenHelp.draw('+canvas+')');
	//
};

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function ScreenGame() {
}

ScreenGame.prototype.draw = function(canvas) {
	//
	console.log('  ScreenGame.draw('+canvas+')');
	//
};

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function ScreenMainMenu() {
	this.mainTitle = new MainTitle();
	this.option1 = new Option1();
	this.option2 = new Option2();

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	this.onClick = function(event) {
		//
		console.log('    MainTitle.onClick('+event+')');
		//
	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function MainTitle() {
	}

	MainTitle.prototype.draw = function(canvas) {
		//
		console.log('    MainTitle.draw('+canvas+')');
		//
		var canvasContext = canvas.getContext('2d');
		var canvasW = canvas.width;
		var canvasH = canvas.height;
		//
		canvasContext.fillStyle = '#F00';
		canvasContext.fillRect(20, 20, canvasW - 20*2, 60);
	};

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function Option1() {
	}

	Option1.prototype.draw = function(canvas) {
		//
		console.log('    Option1.draw('+canvas+')');
		//
		var canvasContext = canvas.getContext('2d');
		var canvasW = canvas.width;
		var canvasH = canvas.height;
		//
		canvasContext.fillStyle = '#0F0';
		canvasContext.fillRect(120, 105, canvasW - 120*2, 20);
	};

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function Option2() {
	}

	Option2.prototype.draw = function(canvas) {
		//
		console.log('    Option2.draw('+canvas+')');
		//
		var canvasContext = canvas.getContext('2d');
		var canvasW = canvas.width;
		var canvasH = canvas.height;
		//
		canvasContext.fillStyle = '#00F';
		canvasContext.fillRect(120, 135, canvasW - 120*2, 20);
	};

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
}

ScreenMainMenu.prototype.draw = function(canvas) {
	//
	console.log('  ScreenMainMenu.draw('+canvas+')');
	//
	this.mainTitle.draw(canvas);
	this.option1.draw(canvas);
	this.option2.draw(canvas);
};

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function MyGame(canvasId) {
	this.setSon(this);
	this.setCanvas(canvasId);
	//
	this.screenMainMenu = new ScreenMainMenu();
	this.screenHelp = new ScreenHelp();
	this.screenGame = new ScreenGame();
}

MyGame.prototype = new Game();

MyGame.prototype.draw = function(canvas) {
	//
	console.log('MyGame.draw('+canvas+')');
	//
	if (this.currentScreen == Game.SCREEN_MAIN_MENU) {
		canvas.addEventListener('click', this.screenMainMenu.onClick, false);
		this.screenMainMenu.draw(canvas);
	}
};

MyGame.prototype.constructor = MyGame;