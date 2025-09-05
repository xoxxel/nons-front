import Profile from "@/components/categories/card/profile";
import convertToTehranTime from "@/utils/convertToTehranTime";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const TextChat = ({
  isSender,
  isLast,
  text,
  file,
  date,
  textType,
}: {
  isSender?: boolean;
  isLast?: boolean;
  text: string;
  file: string | null;
  date: Date;
  textType: "dispute" | "notification" | "message";
}) => {
  const filePath = file?.split("/");
  const fileName = filePath?.[filePath?.length - 1] || "";

  // const linkifyText = (text:string) => {
  //   const urlPattern = /(https?:\/\/[^\s]+)/g;
  //   return text.split(urlPattern).map((part, index) => {
  //     if (urlPattern.test(part)) {
  //       return (
  //         <a key={index} href={part} target="_blank" rel="noopener noreferrer">
  //           {part}
  //         </a>
  //       );
  //     }
  //     return part;
  //   });
  // };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: textType !== "message" ? "start" : isSender ? "start" : "end",
        justifyContent: "center",
        flexDirection: "column",
        mt: 2,
        mb: isLast ? "10px" : "0px",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            direction: "ltr", alignItems: "center", mb: 0.5,
            mr: textType !== "message" ? 3 : 0
          }}
        >
          <Typography
            sx={{
              color: "text.main",
              fontSize: "12px",
              fontWeight: "500",

              px: 1,
              textAlign: "left",
            }}
          >
            {convertToTehranTime(date)}
          </Typography>
          {
            textType !== "message" && <Box sx={{ mb: 0.6, height: "24px", fontSize: "14px", borderRadius: "5px", color: "#FFFFFF", px: "10px", py: "2px", backgroundColor: textType == "dispute" ? "#34C759" : "#1A79FE" }}>{textType == "dispute" ? "dispute" : "notification"}</Box>
          }
        </Box>
        {textType == "notification" ?
          <Box
            sx={{
              display: "flex",
              alignItems: "stretch",
              direction: "rtl", width: "calc(100% - 24px)",
              mr: 3
            }}
          >
            <Box
              sx={{
                width: "6px",
                borderRadius: "0px 8px 8px 0px",
                backgroundColor: "#1A79FE",
              }}
            ></Box>
            <Box
              sx={{
                bgcolor: "#EDF4FF",
                borderRadius: "12px 0px 0px 12px",

                p: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "14px" },
                  fontWeight: "500",
                  color: "#344054",
                  width: "100%",
                }}
              >
                {text}

              </Typography>
            </Box>
          </Box>
          : textType == "dispute" ?



            <Box
              sx={{
                display: "flex",
                alignItems: "stretch",
                direction: "rtl", mr: 3
              }}
            >
              <Box
                sx={{
                  bgcolor: "#FFFFFF",
                  borderRadius: "14px 14px 2px 14px;",
                  p: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "13px", md: "14px" },
                    fontWeight: "500",
                    color: "#344054",
                    width: "100%",
                  }}
                >
                  {text}
                </Typography>

              </Box>
            </Box>





            : <>
              {text?.length > 0 &&
                <Box
                  sx={{
                    display: "flex",
                    alignItems: textType !== "message" ? "start" : isSender ? "start" : "center",
                    direction: textType !== "message" ? "rtl" : isSender ? "rtl" : "ltr",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: textType !== "message" ? "button.main" : isSender ? "button.main" : "background.secondary",
                      borderRadius: textType !== "message" ? "14px 14px 2px 14px" : isSender
                        ? "14px 14px 2px 14px"
                        : { xs: "2px 14px 14px 14px", md: "14px 14px 14px 2px" },
                      p: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", md: "14px" },
                        fontWeight: "500",
                        color: textType !== "message" ? "#FFFFFF" : isSender ? "#FFFFFF" : "text.main",
                        width: "100%",
                      }}
                    >
                      {text}
                    </Typography>
                  </Box>
                </Box>
              }
            </>}
        {file && (
          <Box
            sx={{
              py: "7px",
              px: "10px",
              maxWidth: { sm: "300px", xs: "250px" },
              width: "100%",
              bgcolor: "background.secondary",
              borderRadius: "8px 0 0 8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between", mt: 1,
              mr: textType !== "message" ? 3 : 0
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "80%",
                overflow: "hidden"
              }}
            >
              <Box
                sx={{
                  width: "48px",
                  height: "27px",
                  borderRadius: "3px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={process.env.NEXT_PUBLIC_SERVER + file}
                  alt="receipt"
                  fill
                  objectFit="cover"
                />
              </Box>
              <Typography
                sx={{
                  marginInlineStart: 2,
                  color: "icon.main",
                  fontSize: "14px",
                  fontWeight: "400", whiteSpace: "nowrap",
                  width: "80%",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {fileName}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                cursor: "pointer",
                color: "icon.main",
                marginInlineStart: 1,
              }}
            >
              <Link
                href={`${process.env.NEXT_PUBLIC_API}/user/download/${fileName}/`}
                download={fileName}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 11.5V12.5C16.5 13.9001 16.5 14.6002 16.2275 15.135C15.9878 15.6054 15.6054 15.9878 15.135 16.2275C14.6002 16.5 13.9001 16.5 12.5 16.5H5.5C4.09987 16.5 3.3998 16.5 2.86502 16.2275C2.39462 15.9878 2.01217 15.6054 1.77248 15.135C1.5 14.6002 1.5 13.9001 1.5 12.5V11.5M13.1667 7.33333L9 11.5M9 11.5L4.83333 7.33333M9 11.5V1.5"
                    stroke="currentColor"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TextChat;
