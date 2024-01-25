import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { paraLengthAtom } from "./paraLength";

export default function LengthInput() {
  
    const [size, setSize] = useState(0);
    const setLength = useSetRecoilState(paraLengthAtom);
  
    return (
      <>
        <input type="text" onChange={(e)=>setSize(parseInt(e.target.value))}/>
        <button onClick={()=> setLength(size)}>Generate</button>
      </>
    )
  }