export function setCookie(name, value, day, path) {
	var name = encodeURI(name);
	var value = encodeURI(value);
	var expires = new Date();
	console.log(name)
	expires.setTime(expires.getTime() + day * 3600000 *24);
    path = path == "" ? "" : ";path=" + path;
    var _expires = (typeof day) == "string" ? "" : ";expires=" + expires.toUTCString();
    document.cookie = name + "=" + value + _expires + path;
}

export function getCookieValue(name) {
	var name = encodeURI(name);
    //读cookie属性，这将返回文档的所有cookie
    var allcookies = document.cookie;
    //查找名为name的cookie的开始位置
    name += "=";
    var pos = allcookies.indexOf(name);
    //如果找到了具有该名字的cookie，那么提取并使用它的值
    if (pos != -1) {   //如果pos值为-1则说明搜索"version="失败
        var start = pos + name.length;  //cookie值开始的位置
        var end = allcookies.indexOf(";", start); //从cookie值开始的位置起搜索第一个";"的位置,即cookie值结尾的位置
        if (end == -1) end = allcookies.length;  //如果end值为-1说明cookie列表里只有一个cookie
        var value = allcookies.substring(start, end);  //提取cookie的值
        return decodeURI(value);  //对它解码
        
    }
    else return "";  //搜索失败，返回空字符串
}