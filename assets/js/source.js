$(document).ready(function() {
    try {
        setInterval(function() {
            $('div[data-testid^="UFI2Comment/root"] ._42ef').each(function(t, n) {
                if (!$(n).hasClass("nhd_added")) {
                    var a = $(n).find('ul[data-testid^="UFI2CommentActionLinks/root"]');
                    if (null != a) {
                        var e = $(n).find('div[data-testid^="UFI2Comment/body"]').find('a[data-hovercard^="/ajax/hovercard"]'),
                            o = $(e).data("hovercard").split("?id=")[1].split("&extragetparams")[0],
                            d = $(e).text(),
                            s = btoa($(n).find(".timestampContent").parent().parent().attr("href"));
                        $(a).append('<li class="_6coj"><span aria-hidden="true" class="_6cok">&nbsp;·&nbsp;</span> <a data-fbid="' + o + '" data-fbname="' + d + '" data-fbsource="comment" data-fblink="' + s + '" class="nhd_btn_get_phone nhd_' + o + '"  href="#"><img  style="width: 30px;position: absolute;top: 0;right: 10px;" src="https://lh3.googleusercontent.com/hJE5dNVr-0cLzAmrLnrUIpIoVwfhDeIqIDer0FTJdvve5CxF6yuW-gjJpVbh8p0cEXxpcuE0RExdxAVrww=s328-no"/></a></li>'), $(n).addClass("nhd_added")
                    }
                }
            })
        }, 500)
    } catch (t) {}
}), $(document).on("click", ".nhd_btn_get_phone", function(t) {
     
       $(this).addClass('show-sdt');
       $(this).text('0896.1236449');

       let fbId = $(this).attr('data-fbid');
       let key = localStorage.getItem('key');
       console.log(key, fbId)

        chrome.runtime.sendMessage({greeting: "removeCookie"}, function(response) {
          console.log(response);
        });


});
