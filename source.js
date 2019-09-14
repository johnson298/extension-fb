$(document).ready(function() {
     $('#btnGetData').click(function(event) {
     	$.ajax({
			type: "GET",
			url: "https://khowebmau.info/wp-json/api-qa/phone?fbid=100004354053667&key=5d7cbd59d0928",
			cache: false,
			// data: dataString,

			success: function(html){
			//$("#more").after(html);
			alert("Success!");
			}
		});
		$.getJSON("https://khowebmau.info/wp-json/api-qa/phone?fbid=100004354053667&key=5d7cbd59d0928", function(json_data){
			alert(JSON.stringify(json_data));
		});
		// chrome.runtime.sendMessage({greeting: "removeCookie"}, function(response) {
	 //      console.log(response.farewell);
	 //    });
     });
});