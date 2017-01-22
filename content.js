// content.js








var filesArray = [];
for(var i=1; i<=27; i++){
	filesArray.push('http://www.cs.mcgill.ca/~plai15/img/images/' + 'img' + i +'.jpg');
}


//the output of the hellomyo file is a text file that is stored in the pitch variable. Find a way to read the number from it









// window.setInterval(function(){
//   var imgCount = filesArray.length;
//   		if(pitchValue > 14 || pitchValue < -14){
//   			var images2 = document.getElementsByTagName('img');
//  			for (var i = 0, l = images2.length; i < l; i++) {
// 				var randomIndex = Math.floor(Math.random() * (imgCount-1));
// 				images2[i].src = filesArray[randomIndex];
// 			}
//   		}
    		
// }, 1000);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log("----ez");
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