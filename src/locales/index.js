import enEN from './en_EN.json'
import mnMN from './mn_MN.json'

const localeConfig = {
    en: enEN,
    mn: mnMN
}

export const getLocale = (id) => {
    let locale = localStorage.getItem("language")
    if (locale === null) {
        localStorage.setItem("language", "en")
        locale = "en"
    }
    let msg;
    if (locale === "mn")
        msg = localeConfig["mn"]
    else
        msg = localeConfig["en"]
    const content = msg[id]
    if (content === null)
        return "None"
    else
        return content
}