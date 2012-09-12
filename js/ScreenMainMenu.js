function ScreenMainMenu() {
	this.mainTitle = new MainTitle();
	this.option1 = new Option1();
	this.option2 = new Option2();

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	this.onClick = function(event) {
		//
		console.log('    MainTitle.onClick('+event+')');
		//
		var point = Game.getMousePos(event);
	};

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function MainTitle() {
		this.left = Game.AUTO_CENTER;
		this.top = 20;
		this.width = 250;
		this.height = 60;
	}

	MainTitle.prototype.draw = function(canvas) {
		//
		console.log('    MainTitle.draw('+canvas+')');
		//
		var canvasContext = canvas.getContext('2d');
		var canvasW = canvas.width;
		var canvasH = canvas.height;
		//
		Game.checkAutoValues(this, canvasW, canvasH);
		//
		canvasContext.fillStyle = '#F00';
		canvasContext.fillRect(this.left, this.top, this.width, this.height);
	};

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function Option1() {
		this.left = Game.AUTO_CENTER;
		this.top = 105;
		this.width = 150;
		this.height = 20;
	}

	Option1.prototype.draw = function(canvas) {
		//
		console.log('    Option1.draw('+canvas+')');
		//
		var canvasContext = canvas.getContext('2d');
		var canvasW = canvas.width;
		var canvasH = canvas.height;
		//
		Game.checkAutoValues(this, canvasW, canvasH);
		//
		canvasContext.fillStyle = '#0F0';
		canvasContext.fillRect(this.left, this.top, this.width, this.height);
	};

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function Option2() {
		this.left = Game.AUTO_CENTER;
		this.top = 135;
		this.width = 150;
		this.height = 20;
	}

	Option2.prototype.draw = function(canvas) {
		//
		console.log('    Option2.draw('+canvas+')');
		//
		var canvasContext = canvas.getContext('2d');
		var canvasW = canvas.width;
		var canvasH = canvas.height;
		//
		Game.checkAutoValues(this, canvasW, canvasH);
		//
		canvasContext.fillStyle = '#00F';
		canvasContext.fillRect(this.left, this.top, this.width, this.height);
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