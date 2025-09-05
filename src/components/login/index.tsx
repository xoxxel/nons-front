"use client";  

import { useMediaQuery } from "@mui/material";  
import FirstLogin from "./firstLogin";  
import OTP from "./otp";  
import LoginWithPassword from "./loginWithPassword";  
import { useState } from "react";  
import AuthFlowRes from "./authFlowRes";


const Login = () => {  
  const [step, setStep] = useState<"login" | "otp" | "password">("login");  
  const [inputValue, setInputValue] = useState("");  
  const [isAuthVisible, setAuthVisibility] = useState<boolean>(false);  
  const isLargeScreen = useMediaQuery("(min-width:600px)");
  const [timer,setTimer] = useState<number>(0)

  return (  
    <>  
      {!isLargeScreen && (  
        <FirstLogin  
          setStep={setStep}
          setTimer={setTimer}
          inputValue={inputValue}  
          setInputValue={setInputValue}  
          setAuthVisibility={setAuthVisibility}  
        />  
      )}  
      {isLargeScreen && (  
        <>  
          {step === "login" && (  
            <FirstLogin  
              setStep={setStep}  
              setTimer={setTimer}
              inputValue={inputValue}
              setInputValue={setInputValue}  
              setAuthVisibility={setAuthVisibility}  
            />  
          )}  
          {step === "otp" && <OTP step={step} timer={timer} inputValue={inputValue} onBack={()=>setStep("login")} />}  
          {step === "password" && <LoginWithPassword />}  
          {/* {step === "passwordRecovery" && <PasswordRecovery />} */}  
          {/* {step === "newPassword" && <NewPassword />} */}  
        </>  
      )}  
      <AuthFlowRes  
        step={step}
        timer={timer}
        isAuthVisible={isAuthVisible}  
        inputValue={inputValue}
        onClose={()=> setAuthVisibility(false)}
      />  
    </>  
  );  
};  

export default Login;


