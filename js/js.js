function $(id) {
	return document.getElementById(id);
}

function appendHeadChild(node) {
	document.getElementsByTagName('head')[0].appendChild(node);
}

function createLinkNode(path) {
	var node = document.createElement('link');
	node.setAttribute('type', 'text/css');
	node.setAttribute('rel', 'stylesheet');
	node.setAttribute('href', path);
	return node;
}

function createScriptNode(path) {
	var node = document.createElement('script');
	node.setAttribute('type', 'text/javascript');
	node.setAttribute('src', path);
	return node;
}

appendHeadChild(createLinkNode('css/css.css'));

appendHeadChild(createScriptNode('js/Game.js'));
appendHeadChild(createScriptNode('js/MyGame.js'));
appendHeadChild(createScriptNode('js/ScreenMainMenu.js'));
appendHeadChild(createScriptNode('js/ScreenGame.js'));
appendHeadChild(createScriptNode('js/ScreenHelp.js'));
  
window.onload = function() {
	var myGame = MyGame.getInstance();
	myGame.setCanvas('canvas');
	myGame.start();
};