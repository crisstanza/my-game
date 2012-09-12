function $(id) {
	return document.getElementById(id);
}

function appendHeadChild(node) {
	document.getElementsByTagName('head')[0].appendChild(node);
}

function createScriptNode(path) {
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', path);
	return script;
}
  
appendHeadChild(createScriptNode('js/Game.js'));
appendHeadChild(createScriptNode('js/MyGame.js'));
appendHeadChild(createScriptNode('js/ScreenMainMenu.js'));
appendHeadChild(createScriptNode('js/ScreenGame.js'));
appendHeadChild(createScriptNode('js/ScreenHelp.js'));
  
window.onload = function() {
	var myGame = new MyGame('canvas');
	myGame.start();
};