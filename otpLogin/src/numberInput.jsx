import { useState } from "react"
import {useNavigate} from "react-router-dom"

export default function NumberInput(){

    const [num, setNum] = useState("");
    const navigate = useNavigate();
    function handleButtonPress() {
        navigate('/loginViaOtp');
    }

    return (
        <div>
            <div className="title">Login Via OTP</div>
            <input type="text" onChange={(e)=>setNum(e.target.value)} maxLength={10} />
            <button onClick={handleButtonPress}>Send OTP</button>
        </div>
    )
}