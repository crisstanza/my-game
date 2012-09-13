function MyGame(canvasId) {
	//
	Game.console.log('MyGame('+canvasId+')');
	//
	this.setSon(this);
	this.setCanvas(canvasId);
	//
	this.screenMainMenu = new ScreenMainMenu();
	this.screenHelp = new ScreenHelp();
	this.screenGame = new ScreenGame();
	//
	Game.LOG = true;
}

MyGame.instance = null;

MyGame.getInstance = function(canvasId) {
	if ( MyGame.instance == null )  {
		MyGame.instance = new MyGame(canvasId);
	}
	return MyGame.instance;
}

MyGame.prototype = new Game();

MyGame.prototype.draw = function(canvas) {
	//
	Game.console.log('MyGame.draw('+canvas+')');
	//
	if (this.currentScreen == Game.SCREEN_MAIN_MENU) {
		canvas.addEventListener('click', this.screenMainMenu.onClick, false);
		this.screenMainMenu.draw(canvas);
	} else if (this.currentScreen == Game.SCREEN_HELP) {
		canvas.addEventListener('click', this.screenHelp.onClick, false);
		this.screenHelp.draw(canvas);
	}
};

MyGame.prototype.constructor = MyGame;