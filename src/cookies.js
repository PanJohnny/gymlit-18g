export function getCookie(name, headers) {
    const c = headers.get("cookie");
    const cookies = c.split(";");
    var value = null;
    cookies.forEach((cok) => {
        var data = cok.split("=");
        const n = data[0];
        if (n.trim() == name) {
            if (data.length > 1) {
                value = data[1];
            } else {
                value = "";
            }
        }
    });
    return value
}