chrome.extension.onRequest.addListener(function (message, sender, sendResponse) { 
 if (message.check === 'getphone'){
  $.ajax({ 
    type: "GET", 
    url: `https://khowebmau.info/wp-json/api-qa/phone?fbid=${message.id}&key=${localStorage.getItem('key')}`
  }).done(function (success) {
  	if (localStorage.getItem('key') !== null) {
	    sendResponse(success);
  	} else {
  		sendResponse({status: 2});
  	}
  }).fail(function (error) {
    sendMessage(error);
  });
 }
});

