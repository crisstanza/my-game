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
  
appendHeadChild(createScriptNode('js/Game.js?v=1'));
appendHeadChild(createScriptNode('js/MyGame.js?v=1'));
  
window.onload = function() {
	var myGame = new MyGame('canvas');
	myGame.start();
};