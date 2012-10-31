function MyGame() {
	//
	Game.console.log('MyGame()');
	//
	this.setSon(this);
	//
	this.screenMainMenu = new ScreenMainMenu();
	this.screenHelp = new ScreenHelp();
	this.screenGame = new ScreenGame();
	//
	Game.LOG = true;
}

MyGame.instance = null;

MyGame.getInstance = function() {
	if ( MyGame.instance == null )  {
		MyGame.instance = new MyGame();
	}
	return MyGame.instance;
}

MyGame.prototype = new Game();

MyGame.prototype.draw = function(canvas) {
	//
	Game.console.log('MyGame.draw('+canvas+')');
	//
	canvas.removeEventListener('click', this.screenMainMenu.onClick, false);
	canvas.removeEventListener('click', this.screenHelp.onClick, false);
	//
	if (this.currentScreen == Game.SCREEN_MAIN_MENU) {
		canvas.addEventListener('click', this.screenMainMenu.onClick, false);
		this.screenMainMenu.draw(canvas);
	} else if (this.currentScreen == Game.SCREEN_HELP) {
		canvas.addEventListener('click', this.screenHelp.onClick, false);
		this.screenHelp.draw(canvas);
	} else if (this.currentScreen == Game.SCREEN_GAME) {
		canvas.addEventListener('click', this.screenGame.onClick, false);
		this.screenGame.draw(canvas);
	}
};

MyGame.prototype.constructor = MyGame;