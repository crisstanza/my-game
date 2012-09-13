function ScreenHelp() {
	//
	Game.console.log('ScreenHelp()');
	//
}

ScreenHelp.prototype.draw = function(canvas) {
	//
	Game.console.log('  ScreenHelp.draw('+canvas+')');
	//
	var canvasContext = canvas.getContext('2d');
	var canvasW = canvas.width;
	var canvasH = canvas.height;
	//
	canvasContext.clearRect(0, 0, canvasW, canvasH);
	//

};

ScreenHelp.prototype.onClick = function(event) {
	//
	Game.console.log('  ScreenHelp.onClick('+event+')');
	//
	
};