export const getLangData = () => {
    const lang = "pl";
    const lang_block = require(`@/json/lang/${lang}.json`);
    try {
        return lang_block;
    } catch(err) {
        console.error(err);
        return { error: 'Failed to fetch language data.' };
    }
}

export default getLangData;