$(document).ready(function() {
	$('#loading').hide();
	var isClick = 0;

	function initHtml(data){
		return `<div class="col-4 d-flex align-items-center"> <div class="profile-userpic"> <img id="profile-userpic-img" src="assets/images/call.png" class="img-fluid rounded-circle" alt=""> </div> </div><div class="col-8 pl-0"><ul style="list-style: none;"><li class="py-2 border-bottom profile-usertitle-name"> <p class="mb-0 d-flex justify-content-between font-14 font-weight-500"><span>Tên KH: </span><span id="profile-user-name">${data.first_name} ${data.last_name}</span></p> </li> <li class="py-2 border-bottom profile-usertitle-id"> <p class="mb-0 d-flex justify-content-between font-14 font-weight-500"><span>Ngày hết hạn: </span><span>${data.date_expiry}</span></p> </li> <li class="py-2 border-bottom profile-usertitle-job"><span id="profile-user-count"> <p class="mb-0 d-flex justify-content-between font-14 font-weight-500"><span>Email: </span><span>${data.email}</span></p> </li> <li class="py-2 border-bottom profile-usertitle-job"><span id="profile-user-count"> <p class="mb-0 d-flex justify-content-between font-14 font-weight-500"><span>Trạng thái: </span><span class=" badge badge-success d-flex align-items-center">${data.status_label}</span></p> </li></ul></div>`;
	}
	function getData(key){
	     	$.ajax({
				type: "GET",
				dataType: "json",
				data: {id: key},
				url: `https://khowebmau.info/wp-json/api-qa/check?key=${key}`,
				cache: false,
				beforeSend: function(){
					$('#loading').show();
					$('#btnGetData').text('loading...');
				},
				success: function(data){
					let html = initHtml(data) ? initHtml(data) : '';

					$('#content').html(html);
					$('#btnGetData').text('Kích hoạt');
					$('#loading').hide();

					localStorage.setItem('key', key);
				}
			});

	}
	if (localStorage.getItem('key') !== null){
		$('#inputKey').hide();
		let key = localStorage.getItem('key');
		let data = getData(key);
	} else {
		$('#inputKey').show();
		$('#btnGetData').click(function(event) {
			let key = $('#idValue').val();
			getData(key);
			$('#inputKey').hide();


			// isClick++;
			// console.log(isClick)
			// chrome.notifications.create(
			//     `loginson-for-notification-${isClick}`,{
			// 	    type: 'basic', 
			// 	    iconUrl: 'assets/images/call.png', 
			// 	    title: "Tiện ích tìm kiếm sđt khách hàng", 
			// 	    message: "Đăng nhập thành công!" 
			//     },

			// function() {} 

			// );
		})
	}
	$('#logOut').click(function() {
		$('#inputKey').show();
		localStorage.removeItem('key');
		$('#content').html('');


		// isClick++;
		// console.log(isClick)
		// chrome.notifications.create(
		// 	    `logoutson-for-notification-${isClick}`,{
		// 	    type: 'basic', 
		// 	    iconUrl: 'assets/images/call.png', 
		// 	    title: "Tiện ích tìm kiếm sđt khách hàng", 
		// 	    message: "Đăng xuất thành công!" 
		//     },

		// function() {} 

		// );
	});
     
});