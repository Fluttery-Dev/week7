import { useRecoilValue } from "recoil"
import { getColorAtom } from "../atoms/colorsAtom"

export default function Display(){
    const color = useRecoilValue(getColorAtom);
    return <div id="paint" style={{backgroundColor:color}}>I Change Colors</div>
}