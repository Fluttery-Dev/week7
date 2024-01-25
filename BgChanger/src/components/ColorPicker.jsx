import { useRecoilValue, useSetRecoilState } from "recoil";
import { colorSelector, getColorAtom } from "../atoms/colorsAtom";

export default function ColorPicker(){

    const colors = useRecoilValue(colorSelector);
    const selectColor = useSetRecoilState(getColorAtom);

    return(
        <div id="color-picker">
            {colors.map(color=>{
                return <button id="color" 
                onClick={()=>{
                    selectColor(color);
                }}
                style={{backgroundColor: color}}></button>
            })}
        </div>
    )
}