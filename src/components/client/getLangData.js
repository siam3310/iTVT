const axios = require('axios');

export const getLangData = () => {
    const lang = "pl";
    const lang_block = require("@/json/lang/pl.json");
    try {
        return lang_block;
    } catch(err) {
        console.error(err);
        return { error: 'Failed to fetch language data.' };
    }
    // return axios.get(`/api/lang/${lang}`)
    //     .then((res) => {
    //         return res.data;
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //         return { error: 'Failed to fetch language data.' };
    //     });
}

export default getLangData;