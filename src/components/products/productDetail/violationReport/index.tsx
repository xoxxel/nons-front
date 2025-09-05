import { Box, Container, Typography } from "@mui/material";
import RiportModal from "../riportModal/indx";
import { useState } from "react";

const ViolationReport = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Box
        onClick={() => setOpen(true)}
        sx={{
          width: "fit-content",
          display: "flex",
          alignItems: "center",
          position: "relative",
          color: "text.main",
          cursor: "pointer",
          mr: "20px",
          mb: { md: "20px", xs: "0px" },
        }}
      >
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5685 5.54167H15.0338C15.3879 5.54167 15.565 5.54167 15.6685 5.61612C15.7589 5.68107 15.8177 5.78106 15.8306 5.89158C15.8454 6.01825 15.7594 6.17303 15.5874 6.48257L14.5218 8.40076C14.4594 8.51302 14.4282 8.56915 14.416 8.62859C14.4052 8.6812 14.4052 8.73546 14.416 8.78807C14.4282 8.84752 14.4594 8.90365 14.5218 9.01591L15.5874 10.9341C15.7594 11.2436 15.8454 11.3984 15.8306 11.5251C15.8177 11.6356 15.7589 11.7356 15.6685 11.8006C15.565 11.875 15.3879 11.875 15.0338 11.875H9.46017C9.0168 11.875 8.79511 11.875 8.62577 11.7887C8.4768 11.7128 8.35569 11.5917 8.27979 11.4427C8.19351 11.2734 8.19351 11.0517 8.19351 10.6083V8.70833M5.42267 16.625L2.25601 3.95833M3.44354 8.70833H9.30184C9.74522 8.70833 9.9669 8.70833 10.1362 8.62205C10.2852 8.54615 10.4063 8.42504 10.4822 8.27608C10.5685 8.10673 10.5685 7.88504 10.5685 7.44167V3.64167C10.5685 3.19829 10.5685 2.9766 10.4822 2.80726C10.4063 2.6583 10.2852 2.53719 10.1362 2.46129C9.9669 2.375 9.74522 2.375 9.30184 2.375H3.48248C2.92948 2.375 2.65299 2.375 2.46387 2.48958C2.29812 2.59001 2.17496 2.74774 2.11774 2.9329C2.05245 3.14416 2.11951 3.41241 2.25363 3.94889L3.44354 8.70833Z"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <Typography
          sx={{
            mr: "7px",
            color: "text.main",
            fontWeight: "500",
            fontSize: { md: "16px", xs: "12px" },
          }}
        >
          گزارش تخلف محصول
        </Typography>
      </Box>
      <RiportModal open={open} handleClose={handleClose} />
    </Container>
  );
};

export default ViolationReport;
