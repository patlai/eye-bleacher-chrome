// content.js
 

var filesArray = [];
for(var i=1; i<=27; i++){
	filesArray.push('http://www.cs.mcgill.ca/~plai15/img/images/' + 'img' + i +'.jpg');
}

 // var images = document.getElementsByTagName('img');-
 // for (var i = 0, l = images.length; i < l; i++) {
	// 		images[i].src = 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg';
	// 	}
	
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

	if( request.message === "clicked_browser_action" ) {
			var imgCount = filesArray.length;
    		var images2 = document.getElementsByTagName('img');
 			for (var i = 0, l = images2.length; i < l; i++) {
				var randomIndex = Math.floor(Math.random() * (imgCount-1));
				images2[i].src = filesArray[randomIndex];
			}
			//document.body.style.backgroundImage = 'http://www.cs.mcgill.ca/~plai15/img/images/bg.jpg';
		}
	}
);