import {  useRecoilValueLoadable } from "recoil";
import { generateParagraphSelector, paraLengthAtom } from "./paraLength";

export default function DisplayParagraph() {
    let para = useRecoilValueLoadable(generateParagraphSelector);
    console.log(para);

    return (
        <div id="para">
            {
                para.state === 'hasValue' ? (para.contents) : 'Loading...'
            }
        </div>
    );
}