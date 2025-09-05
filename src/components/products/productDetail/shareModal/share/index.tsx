"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";

const ShareComponent = ({
  handleClose,
  link,
}: {
  handleClose: Function;
  link?: string;
}) => {
  const linkRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);
  const pathname = usePathname()

  const copy = () => {
    if (linkRef.current) {
      navigator.clipboard.writeText(linkRef.current.value || "");
    }
  };

  function shareOnInstagram(link:string) {
    const instagramShareUrl = `https://www.instagram.com/?url=${encodeURIComponent(link)}`;
    window.open(instagramShareUrl, '_blank');
}

  function shareOnTelegram(link:string) {
    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(
      link
    )}`;
    window.open(telegramShareUrl, "_blank");
  }

  function shareOnWhatsApp(link:string) {
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      link
    )}`;
    window.open(whatsappShareUrl, "_blank");
  }

  function shareOnFacebook(link:string) {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      link
    )}`;
    window.open(facebookShareUrl, "_blank");
  }

  function shareOnTwitter(link:string) {
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      link
    )}`;
    window.open(twitterShareUrl, "_blank");
  }

  const handleCopy = () => {
    copy();
    setCopied(true);
    toast.success("کپی شد !");
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };
  return (
    <Box
      sx={{
        width: "240px",
        background: "linear-gradient(179.42deg, #394246 0.5%, #2B3235 69.42%)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.14)",
        borderRadius: "7px",
        border: "1px solid #394448",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
          py: "8px",
          px: "14px",
        }}
      >
        <Typography
          sx={{ color: "text.main", fontSize: "14px", fontWeight: "500" }}
        >
          اشتراک گذاری
        </Typography>
        <svg
          onClick={() => handleClose()}
          style={{ cursor: "pointer" }}
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 0.5L1 10.5M1 0.5L11 10.5"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row-reverse",
          py: "10px",
          px: "28px",
        }}
      >
        <Box onClick={()=>shareOnInstagram(link ?? pathname)} sx={{ display: "flex", cursor: "pointer" }}>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.625 5C17.625 5.82843 16.9534 6.5 16.125 6.5C15.2966 6.5 14.625 5.82843 14.625 5C14.625 4.17157 15.2966 3.5 16.125 3.5C16.9534 3.5 17.625 4.17157 17.625 5Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.625 15.5C13.3864 15.5 15.625 13.2614 15.625 10.5C15.625 7.73858 13.3864 5.5 10.625 5.5C7.86358 5.5 5.625 7.73858 5.625 10.5C5.625 13.2614 7.86358 15.5 10.625 15.5ZM10.625 13.5C12.2819 13.5 13.625 12.1569 13.625 10.5C13.625 8.84315 12.2819 7.5 10.625 7.5C8.96815 7.5 7.625 8.84315 7.625 10.5C7.625 12.1569 8.96815 13.5 10.625 13.5Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.625 10.1C0.625 6.73969 0.625 5.05953 1.27896 3.77606C1.8542 2.64708 2.77208 1.7292 3.90106 1.15396C5.18453 0.5 6.86469 0.5 10.225 0.5H11.025C14.3853 0.5 16.0655 0.5 17.3489 1.15396C18.4779 1.7292 19.3958 2.64708 19.971 3.77606C20.625 5.05953 20.625 6.73969 20.625 10.1V10.9C20.625 14.2603 20.625 15.9405 19.971 17.2239C19.3958 18.3529 18.4779 19.2708 17.3489 19.846C16.0655 20.5 14.3853 20.5 11.025 20.5H10.225C6.86469 20.5 5.18453 20.5 3.90106 19.846C2.77208 19.2708 1.8542 18.3529 1.27896 17.2239C0.625 15.9405 0.625 14.2603 0.625 10.9V10.1ZM10.225 2.5H11.025C12.7382 2.5 13.9027 2.50156 14.8029 2.5751C15.6798 2.64674 16.1282 2.77659 16.441 2.93597C17.1936 3.31947 17.8055 3.93139 18.189 4.68404C18.3484 4.99684 18.4783 5.44524 18.5499 6.32208C18.6234 7.22225 18.625 8.38684 18.625 10.1V10.9C18.625 12.6132 18.6234 13.7777 18.5499 14.6779C18.4783 15.5548 18.3484 16.0032 18.189 16.316C17.8055 17.0686 17.1936 17.6805 16.441 18.064C16.1282 18.2234 15.6798 18.3533 14.8029 18.4249C13.9027 18.4984 12.7382 18.5 11.025 18.5H10.225C8.51184 18.5 7.34725 18.4984 6.44708 18.4249C5.57024 18.3533 5.12184 18.2234 4.80904 18.064C4.05639 17.6805 3.44447 17.0686 3.06097 16.316C2.90159 16.0032 2.77174 15.5548 2.7001 14.6779C2.62656 13.7777 2.625 12.6132 2.625 10.9V10.1C2.625 8.38684 2.62656 7.22225 2.7001 6.32208C2.77174 5.44524 2.90159 4.99684 3.06097 4.68404C3.44447 3.93139 4.05639 3.31947 4.80904 2.93597C5.12184 2.77659 5.57024 2.64674 6.44708 2.5751C7.34725 2.50156 8.51184 2.5 10.225 2.5Z"
              fill="white"
            />
          </svg>
        </Box>
        <Box onClick={()=> shareOnFacebook(link ?? pathname)} sx={{ display: "flex", cursor: "pointer" }}>
          <svg
            width="11"
            height="20"
            viewBox="0 0 11 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.187 10.7464L10.7311 7.28884H7.32706V5.04612C7.32706 4.09999 7.80171 3.17718 9.32639 3.17718H10.875V0.233617C10.875 0.233617 9.4702 0 8.12773 0C5.32298 0 3.49146 1.65632 3.49146 4.65364V7.28884H0.375V10.7464H3.49146V19.1052C4.11712 19.201 4.75721 19.25 5.40926 19.25C6.06131 19.25 6.7014 19.201 7.32706 19.1052V10.7464H10.187Z"
              fill="white"
            />
          </svg>
        </Box>
        <Box onClick={()=>shareOnTelegram(link ?? pathname)} sx={{ display: "flex", cursor: "pointer" }}>
          <svg
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6116 1.70879C16.7362 0.903318 15.9704 0.267554 15.2542 0.581996L0.989818 6.84484C0.476228 7.07034 0.513796 7.84826 1.04647 8.01789L3.98815 8.95467C4.54958 9.13347 5.15753 9.04102 5.64779 8.70231L12.28 4.12027C12.48 3.9821 12.698 4.26646 12.5271 4.44263L7.75311 9.36465C7.29001 9.84211 7.38193 10.6512 7.93897 11.0005L13.284 14.3523C13.8835 14.7282 14.6547 14.3506 14.7668 13.6261L16.6116 1.70879Z"
              fill="white"
            />
          </svg>
        </Box>
        <Box onClick={()=>shareOnTwitter(link ?? pathname)} sx={{ display: "flex", cursor: "pointer" }}>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4067 16.2087H11.4449L0.660156 0.791992H5.62201L16.4067 16.2087ZM12.0361 14.9013H14.0118L5.03078 2.09933H3.05514L12.0361 14.9013Z"
              fill="white"
            />
            <path
              d="M2.23009 16.2081L7.7824 9.77625L7.05627 8.81348L0.655273 16.2081H2.23009Z"
              fill="white"
            />
            <path
              d="M8.84668 6.7436L9.54428 7.7372L15.5421 0.791992H14.0005L8.84668 6.7436Z"
              fill="white"
            />
          </svg>
        </Box>
        <Box onClick={()=>shareOnWhatsApp(link ?? pathname)} sx={{ display: "flex", cursor: "pointer" }}>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.375 21.8125C16.6907 21.8125 21 17.5032 21 12.1875C21 6.87176 16.6907 2.5625 11.375 2.5625C6.05926 2.5625 1.75 6.87176 1.75 12.1875C1.75 13.9137 2.20444 15.5338 3.0002 16.9347L1.75 21.8125L6.77897 20.6464C8.1447 21.39 9.71051 21.8125 11.375 21.8125ZM11.375 20.3317C15.8729 20.3317 19.5192 16.6854 19.5192 12.1875C19.5192 7.68957 15.8729 4.04327 11.375 4.04327C6.87707 4.04327 3.23077 7.68957 3.23077 12.1875C3.23077 13.9242 3.77435 15.5339 4.70064 16.8558L3.97115 19.5913L6.75495 18.8954C8.06769 19.8013 9.65939 20.3317 11.375 20.3317Z"
              fill="#BFC8D0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.375 21.125C16.6907 21.125 21 16.8157 21 11.5C21 6.18426 16.6907 1.875 11.375 1.875C6.05926 1.875 1.75 6.18426 1.75 11.5C1.75 13.2262 2.20444 14.8463 3.0002 16.2472L1.75 21.125L6.77897 19.9589C8.1447 20.7025 9.71051 21.125 11.375 21.125ZM11.375 19.6442C15.8729 19.6442 19.5192 15.9979 19.5192 11.5C19.5192 7.00207 15.8729 3.35577 11.375 3.35577C6.87707 3.35577 3.23077 7.00207 3.23077 11.5C3.23077 13.2367 3.77435 14.8464 4.70064 16.1683L3.97115 18.9038L6.75495 18.2079C8.06769 19.1138 9.65939 19.6442 11.375 19.6442Z"
              fill="white"
            />
            <path
              d="M8.96877 7.0312C8.73992 6.57156 8.38886 6.61225 8.03421 6.61225C7.4004 6.61225 6.41211 7.37144 6.41211 8.78437C6.41211 9.94235 6.92237 11.2099 8.64179 13.1061C10.3012 14.9361 12.4815 15.8827 14.2915 15.8505C16.1016 15.8183 16.474 14.2606 16.474 13.7346C16.474 13.5015 16.3293 13.3851 16.2296 13.3535C15.6128 13.0575 14.4752 12.5059 14.2163 12.4023C13.9575 12.2987 13.8223 12.4388 13.7383 12.5151C13.5036 12.7388 13.0382 13.3981 12.8789 13.5464C12.7196 13.6946 12.4821 13.6196 12.3832 13.5635C12.0195 13.4176 11.0333 12.9789 10.2471 12.2168C9.27491 11.2744 9.21785 10.9501 9.03468 10.6615C8.88815 10.4306 8.99568 10.2889 9.04933 10.227C9.2588 9.98531 9.54804 9.61215 9.67775 9.42671C9.80746 9.24127 9.70449 8.95973 9.6427 8.78438C9.37697 8.03023 9.15184 7.39892 8.96877 7.0312Z"
              fill="white"
            />
          </svg>
        </Box>
      </Box>
      <Box sx={{ py: "7px", px: 1, background: "rgba(255, 255, 255, 0.05)" }}>
        <Box
          sx={{
            width: "100%",
            position: "relative",
            backgroundColor: "#282F32",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // flexDirection: "row-reverse",
            py: "3px",
            px: 0.5,
          }}
        >
          <input
            ref={linkRef}
            disabled
            value={link ?? pathname}
            style={{
              width: "100%",
              outline: "none",
              border: "none",
              background: "none",
              direction: "ltr",
              position: "absolute",
              left: 0,
              paddingRight: "4px",
              paddingLeft: "4px",
            }}
          />
          <Button
            onClick={() => !copied && handleCopy()}
            sx={{
              //   position: "absolute",
              backgroundColor: "button.main",
              ":hover": {
                backgroundColor: "button.main",
              },
              height: "100% !important",
              fontSize: "10px",
              fontWeight: "500",
              borderRadius: "5px !important",
              color: "text.main",
              //   top: "0px",
              //   right: "0px",
            }}
          >
            {copied ? "کپی شد!" : "کپی لینک"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ShareComponent;
