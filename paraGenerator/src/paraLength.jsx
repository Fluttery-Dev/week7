import {atom, selector} from "recoil"

export const paraLengthAtom = atom({
    key: "paraLengthAtom",
    default:  1,
})

export const generateParagraphSelector = selector({
    key: "generateParagraph",
    get: async ({get})=>{
        const length = get(paraLengthAtom);
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = `https://random-word-api.vercel.app/api?words=${length}`;
        const res = await fetch(proxyUrl + targetUrl);
        const para = await res.json();
        const sentence = para.join(' ');
        console.log(sentence);
        return sentence;
    }
})