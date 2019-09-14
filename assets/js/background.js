chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){

        if (message.greeting == "removeCookie"){
                    //remove cookie
                    //...

sendResponse({farewell:"cookie clean"});

        }

});