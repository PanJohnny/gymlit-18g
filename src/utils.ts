export function validYear(c:string) {
    return c && /[0-8]/g.test(c) && c.length == 1
}

export function className(c:string) {
    return c != "0" ? "Třída: " + c + ". G" : "Třída: 1.G - 8.G"
}

export const cookieOptions = {maxAge: 24*60*60, path: "/"}

export function latinClass(n:number) {
    const clazz = [
        "Prima",
        "Sekunda",
        "Tercie",
        "Kvarta",
        "Kvinta",
        "Sexta",
        "Septima",
        "Oktáva"
    ]

    return clazz[n-1];
}