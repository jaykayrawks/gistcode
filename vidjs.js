videojs.plugin('pluginLocalize', function() {
	console.log("added Language");  
  videojs.addLanguage('de',{});
});
videojs('player').pluginLocalize();