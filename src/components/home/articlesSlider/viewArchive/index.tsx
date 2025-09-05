import { Box, Typography } from "@mui/material";
import Link from "next/link";

const ViewArchive = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "47px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "1px solid",
        borderColor: "grey.700",
        mt: "10px",
      }}
    >
      <Link href="/">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "fit-content",
          }}
        >
          <Typography color="primary.main">مشاهده آرشیو</Typography>
          <Box sx={{ display: "flex", color: "primary.main", mr: 1 }}>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.58333 7.16675L6.39824 10.1634C6.20058 10.3493 6.20059 10.6508 6.39825 10.8368L9.58333 13.8334"
                stroke="currentcolor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M13.3333 10.5H7.08331"
                stroke="currentcolor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default ViewArchive;
