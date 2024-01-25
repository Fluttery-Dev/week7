import { useRef } from "react";
import { useState } from "react"

export default function OtpLogin() {
    
    const [otp,setOtp] = useState(new Array(4).fill(""));
    const otpBoxRef = useRef([]);

    

    function handleChange(val,index){
        let newOtp = [...otp];
        newOtp[index] = val;
        setOtp(newOtp);

        if(val && index <3)
        otpBoxRef.current[index+1].focus();
    }

    function handleKeyPress(e, i) {
        if (e.key === 'Backspace' && !e.target.value && i > 0) {
            otpBoxRef.current[i-1].focus();
        }

        if(e.key === 'Enter' && e.target.value && i==3){
            alert("Succussfully Logged In");
        }
    }

    function handleButtonPress() {
        if(otp[3]){
            alert("Succussfully Logged In");
        }
    }

    return (
        <div>
            <div className="title">Login Via Otp</div>
            {otp.map((e,i)=>{
                return <input 
                ref={(e)=>otpBoxRef.current[i]=e}
                onKeyUp={(e)=>handleKeyPress(e,i)} 
                onChange={(e)=>handleChange(e.target.value,i)}  
                className="otp-input" type="text" maxLength="1" 
                />
            })}
            <br />
            <button onClick={handleButtonPress}>Login</button>
        </div>
    )
}
