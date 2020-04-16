
/*
Shoppe Check in Get Cookie.
The following URL check in once
https://shopee.vn

http-request ^https:\/\/shopee\.vn\/me\/setting max-size=0,script-path=shopee_getcookie.js

MITM = shopee.vn
*/
$notification = {
  post: (title, subTitle, detail) => {
    $notify(title, subTitle, detail);
  }
}

if ($request.headers['Cookie']) {
  var headerSP = $request.headers['Cookie'];
  var cookie = $prefs.setValueForKey(headerSP, "CookieSP");
  if (!cookie){
    $notification.post("Shopee Cookie lỗi‼️", "", "Đăng nhập lại")
  } else {
    $notification.post("Shopee Cookie done🎉🎉", "", "")
  }
} else {
  $notification.post("Shopee lỗi đọc cookiee‼️", "", "Đăng nhập lại")
}
$done({})
