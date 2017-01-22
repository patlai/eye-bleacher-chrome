// background.js

// Called when the user clicks on the browser action.
console.log(chrome.extension.getURL('pitch.txt'));
console.log(chrome.runtime.getURL("pitch.txt"));

 var pitchValue = 0;

window.setInterval(function(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', chrome.extension.getURL('pitch.txt'), true);
  xhr.onreadystatechange = function()
  {
      if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
      {
          //alert(xhr.responseText);
          pitchValue = parseInt(xhr.responseText);
          console.log(xhr.responseText);
      }
  };
  xhr.send();
 

  if(pitchValue > 11){
     console.log("value found!");
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
  }
}, 1000);



chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tabs
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

// This block is new!
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
  }
);