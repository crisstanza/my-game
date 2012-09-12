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