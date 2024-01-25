import { atom, selector } from "recoil";



export const colorSelector = selector({
    key: "colorSelector",
    get: ({get})=>{
        return ["#DFFF00", "#FFBF00", "#FF7F50", "#DE3163", "#9FE2BF","#40E0D0", "#6495ED", "#CCCCFF"]
    }
})

export const getColorAtom = atom({
    key: "getColorAtom",
    default: colorSelector[0],
});
