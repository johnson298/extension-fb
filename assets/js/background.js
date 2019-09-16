chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){

        if (message.greeting == "removeCookie"){
           

sendResponse('hi');

	    }

});

