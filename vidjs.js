videojs.plugin('pluginLocalize', function() {
	console.log("added Language");  
  videojs.addLanguage('de',{'video':'amore'});
  videojs.addLanguage('ar',{'video':'amore'});
});
videojs('player').pluginLocalize();