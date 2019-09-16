$(document).ready(function() {
    $('#loading').hide();



    function initHtml(data) {
        return `<div class="col-4 d-flex align-items-center"> <div class="profile-userpic"> <img id="profile-userpic-img" src="assets/images/call.png" class="img-fluid rounded-circle" alt=""> </div> </div><div class="col-8 pl-0"><ul style="list-style: none; padding: 0"><li class="py-2 border-bottom profile-usertitle-name"> <p class="mb-0 d-flex justify-content-between font-14 font-weight-500"><span>Tên KH: </span><span id="profile-user-name">${data.name}</span></p> </li> <li class="py-2 border-bottom profile-usertitle-id"> <p class="mb-0 d-flex justify-content-between font-14 font-weight-500"><span>Ngày hết hạn: </span><span>${data.date_expiry_format}</span></p> </li> <li class="py-2 border-bottom profile-usertitle-job"><span id="profile-user-count"> <p class="mb-0 d-flex justify-content-between font-14 font-weight-500"><span>Email: </span><span>${data.email}</span></p> </li><li class="py-2 border-bottom profile-usertitle-job"><span id="profile-user-count"> <p class="mb-0 d-flex justify-content-between font-14 font-weight-500"><span>Số ngày còn lại: </span><span class=" badge badge-success d-flex align-items-center">${data.time_remaining}</span></p> </li> <li class="py-2 border-bottom profile-usertitle-job"><span id="profile-user-count"> <p class="mb-0 d-flex justify-content-between font-14 font-weight-500"><span>Trạng thái: </span><span class=" badge badge-${data.status_label_color} d-flex align-items-center">${data.status_label}</span></p> </li></ul></div>`;
    }

    function getData(key) {
        $.ajax({
            type: "GET",
            dataType: "json",
            data: {
                id: key
            },
            url: `https://khowebmau.info/wp-json/api-qa/check?key=${key}`,
            cache: false,
            beforeSend: function() {
                $('#loading').show();
                $('#btnGetData').text('loading...');
            },
            success: function(data) {
                let html = initHtml(data) ? initHtml(data) : '';

                $('#content').html(html);
                $('#btnGetData').text('Kích hoạt');
                $('#loading').hide();

                localStorage.setItem('key', key);

                notification_et(`Trạng thái tài khoản: ${data.status_label}`);
            }
        });

    }
    if (localStorage.getItem('key') !== null) {
        $('#inputKey').hide();
        let key = localStorage.getItem('key');
        let data = getData(key);
    } else {
        $('#inputKey').show();
        $('#btnGetData').click(function(event) {
            let key = $('#idValue').val();
            getData(key);
            $('#inputKey').hide();
  			notification_et('Đăng nhập thành công!');


        })
    }
    $('#logOut').click(function() {
        $('#inputKey').show();
        localStorage.removeItem('key');
        $('#content').html('');
        notification_et('Đăng xuất thành công!');


    });

});

function notification_et(text) {
	// config notification
    var option_notification = {
        icon: 'assets/images/call.png',
        body: text
    };
	var notification = new Notification("Tìm kiếm SĐT khách hàng", option_notification);
    notification.onclick = function() {

    };
    // set time close 
    setTimeout(function() {
        notification.close();
    }, 3000);
}
