"use client";
import CountDown from "@/components/login/otp/countDown";
import OTPInput from "@/components/login/otp/otpInput";
import { Box, Button, Typography } from "@mui/material";
import { BeatLoader } from "react-spinners";

const OTPComponent = ({
  onComplete,
  onSendAgain,
  timer,
  otpValue,
  setOtpValue,
  loading,
  loginMethod,
  value
}: {
  onComplete: () => void;
  onSendAgain: () => void;
  timer: number;
  otpValue: string;
  setOtpValue: React.Dispatch<React.SetStateAction<string>>;
  loading:boolean,
  loginMethod: "number" | "email",
  value?:string
}) => {

  const handleOTPComplete = () => {
    onComplete();
  };

  return (
    <Box>
      <Typography sx={{ color: "text.content", fontWeight: 600, my: 2 }}>
        کدتایید
      </Typography>
      <Typography sx={{ color: "text.secondary", fontWeight: 400, mb: 4 }}>
        {`کد تایید 4 رقمی به ${loginMethod === "number" ? `${value?.slice(7,11)}***${value?.slice(1,4)}` : "ایمیل شما"} ارسال شد`}
      </Typography>
      <OTPInput
        value={otpValue}
        setValue={setOtpValue}
        onComplete={handleOTPComplete}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "316px",
          mx: "auto",
          mt: 2,
        }}
      >
        <Typography sx={{ fontSize: "14px", color: "text.secondary" }}>
          ارسال دوباره
        </Typography>
        <CountDown initialSeconds={timer} onSendAgain={onSendAgain} />
      </Box>
      <Button
        onClick={handleOTPComplete}
        sx={{
          color: "white",
          bgcolor: "button.main",
          borderRadius: "5px",
          fontWeight: "600",
          width: "100%",
          py: { xs: "10px", md: 1.5 },
          height: "46px",
          mt: 2,
          ":hover": {
            bgcolor: "button.main",
          },
        }}
      >
        {loading ? <BeatLoader color="white" size={8} /> : "تایید"}
      </Button>
    </Box>
  );
};

export default OTPComponent;
