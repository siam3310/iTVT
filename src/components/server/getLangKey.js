"use server";
import { getCookies } from 'next-client-cookies/server';

/**
 * Loads a translation key from a language file.
 *
 * @param {string} key - The translation key (e.g. "navbar.contact", "pages.404").
 * @returns {string} The translated value.
 */
const getLangKey = (key) => {
    var lang;
    const cookies = getCookies();
    switch(cookies.get("hub_lang")){
        case "pl":
            lang = "pl";
            break;
        default:
            lang = "en";
            break;
    }
    const langFile = require(`@/json/lang/${lang}.json`);
    const keyParts = key.split('.');
    let translation = langFile;
    for (const part of keyParts) {
      if (translation && typeof translation === 'object') {
        translation = translation[part];
      } else {
        return null;
      }
    }
    return translation;
  }

export default getLangKey;