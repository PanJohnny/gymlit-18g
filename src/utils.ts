export function createExpires(days:number) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    return date;
}

export function validYear(c:string) {
    return c && /[0-8]/g.test(c) && c.length == 1
}

export function className(c:string) {
    return c != "0" ? "Třída: " + c + ". G" : "Třída: 1.G - 8.G"
}