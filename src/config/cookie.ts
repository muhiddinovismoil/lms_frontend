import Cookies from "js-cookie";

export function GetCookie(key: string) {
    try {
        const getData = Cookies.get(key);
        if (!getData) return undefined;
        return JSON.parse(getData);
    } catch (err) {
        console.error("GetCookie error:", err);
        return undefined;
    }
}

function parseExpiresIn(timeStr: string): number | undefined {
    const match = timeStr.match(/^(\d+)([mhdMy])$/);
    if (!match) return undefined;

    const value = parseInt(match[1], 10);
    const unit = match[2];

    switch (unit) {
        case "m":
            return value / (60 * 24);
        case "h":
            return value / 24;
        case "d":
            return value;
        case "M":
            return value * 30;
        case "y":
            return value * 365;
        default:
            return undefined;
    }
}

export function SaveCookie(key: string, state: any, expiresIn: string) {
    try {
        const expiresDays = parseExpiresIn(expiresIn);
        if (expiresDays === undefined)
            throw new Error("Invalid expiresIn format");

        Cookies.set(key, JSON.stringify(state), { expires: expiresDays });
        return true;
    } catch (err) {
        console.error("SaveCookie error:", err);
        return undefined;
    }
}

export function RemoveCookie(key: string) {
    try {
        Cookies.remove(key);
        return true;
    } catch (err) {
        console.error("RemoveCookie error:", err);
        return undefined;
    }
}
