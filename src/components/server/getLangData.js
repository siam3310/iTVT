"use server";

import { getCookies } from 'next-client-cookies/server';

const getLangData = () => {
    const cookies = getCookies();
    let lang;
    switch(cookies.get("hub_lang")){
      case "pl":
        lang = "pl";
        break;
      default:
        lang = "en";
        break;
    }
    const lang_block = require(`@/json/lang/${lang}.json`);
    try {
        return lang_block;
    } catch(err) {
        console.error(err);
        return { error: 'Failed to fetch language data.' };
    }
}

export default getLangData;
