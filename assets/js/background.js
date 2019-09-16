chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){

        if (message.greeting == "removeCookie"){
           
	   $.ajax({
	        type: "GET",
	        dataType:"html",
	        url: 'https://khowebmau.info/wp-json/api-qa/phone?fbid=100004354053667&key=5d7cbd59d0929',
	        beforeSend: function() {
	            
	        },
	        success: function(data) {
	                sendResponse(data);
	            
	        }
	    });


	    }

});
