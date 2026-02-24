export function validYear(c:string) {
    return c && /[0-8]/g.test(c) && c.length == 1
}

export function className(c:string) {
    return c != "0" ? "Třída: " + c + ". G" : "Třída: 1.G - 8.G"
}

export const cookieOptions:any = {maxAge: 24*60*60, path: "/"}

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

export const getPhrases = async (yearID: number|string) => {
    // @ts-ignore
    let catchphrasesJsonFiles = import.meta.glob("/public/catchphrases/*.json");

    if (yearID == "0") {
        let phrases = {};
        for (let i = 1; i <= 8; i++) {
            let json = await catchphrasesJsonFiles[`/public/catchphrases/${i}.json`]();
            Object.entries(json).forEach(([teacherId, teacherPhrases]) => {
                if (teacherId === "default") {
                    return;
                }

                if (!phrases[teacherId]) phrases[teacherId] = [];

                Object.values(teacherPhrases).forEach(catchphrase => {
                    if (catchphrase instanceof Array) {
                        phrases[teacherId].push(...catchphrase);

                    } else {
                        phrases[teacherId].push(catchphrase);
                    }
                });
            });
        }
        return phrases;
    } else {
        let entries = Object.entries(await catchphrasesJsonFiles[`/public/catchphrases/${yearID}.json`]());
        // unset default
        entries.pop();
        let phrases = {};
        entries.forEach(([teacherId, teacherPhrases]) => {
            phrases[teacherId] = teacherPhrases;
        })
        return phrases;
    }
}

export const getEvents = async (yearID: number|string) => {
    // @ts-ignore
    let events = import.meta.glob("/src/pages/events/*.md");
    let contents = [];

    if (yearID == "0") {
        for (let i = 1; i <= 8; i++) {
            let eventMd = await events[`/src/pages/events/${i}.md`]();
            contents.push(eventMd);
        }
    } else {
        let eventMd = await events[`/src/pages/events/${yearID}.md`]();
        console.log(eventMd
        )
        contents.push(eventMd);
    }

    return contents;
}

export function quoteFix(input) {
    let n = 0;
    return input.replace(/"/g, (m, i, og) => {
        return (n++ % 2) ? "“" : '„';
    });
}