chrome.extension.onRequest.addListener(function (message, sender, sendResponse) { 
 if (message.check === 'getphone'){
  $.ajax({ 
    type: "GET", 
    url: "https://khowebmau.info/wp-json/api-qa/phone?fbid=100004354053667&key=5d7cbd59d0929"
  }).done(function (success) {
    sendResponse(success);
  }).fail(function () {
    sendMessage(error);
  });
 }
});

