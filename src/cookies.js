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

export function parseCookies(headers) {
    const cookies = new Cookies()
    const c = headers.get("cookie")
    const cooks = c.split(";")

    cooks.forEach((cok) => {
        var data = cok.split("=");
        const n = data[0].trim();
        if (data.length > 1) {
            cookies.set(n, data[1])
        } else {
            cookies.set(n, "")
        }
    });

    return cookies

}

export function hasCookie(name, headers) {
    return getCookie(name, headers) != null
}

export function sendCookie(name, value, days, responseHeaders) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    responseHeaders.append("Set-Cookie", name + "=" + (value || "") + expires + "; path=/")
}

export function canUseCookies(headers) {
    return hasCookie("cookie", headers)
}

export class Cookies {
    constructor() {
        this.cookies = {}
    }

    set(name, value) {
        this.cookies[name] = value
    }

    get(name) {
        return this.cookies[name]
    }

    has(name) {
        return this.get(name) != null
    }
}