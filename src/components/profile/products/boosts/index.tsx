"use client";

import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReportUpdate from "./reportUpdate";
import Image from "next/image";

const Boosts = ({
  boosts,
  loading,
}: {
  boosts: BoostModel[];
  loading: boolean;
}) => {
  const [openDropDownIndex, setOpenDropDownIndex] = useState<number | null>(
    null
  );

  const [status, setStatus] = useState<string>("");
  const [isReportUpdateOpen, setIsReportUpdateOpen] = useState<boolean>(false);

  const handleDropDownOpen = (index: number) => {
    if (index === openDropDownIndex) {
      setOpenDropDownIndex(null);
    } else {
      setOpenDropDownIndex(index);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (!target.closest(".dropdown-wrapper")) {
        setOpenDropDownIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <ReportUpdate
        status={status}
        isReportUpdateOpen={isReportUpdateOpen}
        setIsReportUpdateOpen={setIsReportUpdateOpen}
      />
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Box
          sx={{
            bgcolor: "background.element",
            padding: "25px 15px",
          }}
        >
          <Box sx={{ mt: 2, px: "10px", mb: "40px" }}>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              بوست
            </Typography>
          </Box>
          <Box
            sx={{
              color: "text.main",
              px: "10px",
              mb: "14px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <svg
                width="12"
                height="19"
                viewBox="0 0 12 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12.5L6 17.5L11 12.5M1 6.5L6 1.5L11 6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Typography
              sx={{
                color: "text.main",
                fontSize: "16px",
                fontWeight: "500",
                mx: 1.5,
              }}
            >
              همه
            </Typography>
          </Box>
          <Box
            id="boost__wrapper"
            sx={{
              display: "flex",
              flexDirection: "column",
              border: "0.5px solid",
              borderColor: "border.main",
              borderRadius: "5px 5px 0 0",
            }}
          >
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <CircularProgress size={25} />
              </Box>
            ) : (
              boosts?.map((boost, index) => (
                <Box
                  key={boost?.id}
                  className="boost__card"
                  sx={{
                    p: "10px",
                    borderBottom: "0.5px solid",
                    borderBottomColor: "border.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "40%",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        width: "45px",
                        minWidth: "45px",
                        height: "45px",
                        // border: "0.5px solid",
                        // borderColor: "border.main",
                        borderRadius: "7px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_SERVER}/${boost?.brand?.icon}`}
                        fill
                        alt={boost?.brand?.title}
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: "text.main",
                        fontSize: "16px",
                        fontWeight: "500",
                        mx: 1,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {boost?.title}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          color: "#4C5357",
                          display: "flex",
                          mx: 1.5,
                        }}
                      >
                        <svg
                          width="16"
                          height="11"
                          viewBox="0 0 16 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.61342 5.9761C1.52262 5.83234 1.47723 5.76046 1.45182 5.6496C1.43273 5.56632 1.43273 5.43498 1.45182 5.35171C1.47723 5.24084 1.52262 5.16896 1.61341 5.0252C2.36369 3.83721 4.59693 0.833984 8.00027 0.833984C11.4036 0.833984 13.6369 3.83721 14.3871 5.0252C14.4779 5.16896 14.5233 5.24084 14.5487 5.35171C14.5678 5.43498 14.5678 5.56632 14.5487 5.6496C14.5233 5.76046 14.4779 5.83234 14.3871 5.9761C13.6369 7.16409 11.4036 10.1673 8.00027 10.1673C4.59693 10.1673 2.36369 7.16409 1.61342 5.9761Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1.61342 5.9761C1.52262 5.83234 1.47723 5.76046 1.45182 5.6496C1.43273 5.56632 1.43273 5.43498 1.45182 5.35171C1.47723 5.24084 1.52262 5.16896 1.61341 5.0252C2.36369 3.83721 4.59693 0.833984 8.00027 0.833984C11.4036 0.833984 13.6369 3.83721 14.3871 5.0252C14.4779 5.16896 14.5233 5.24084 14.5487 5.35171C14.5678 5.43498 14.5678 5.56632 14.5487 5.6496C14.5233 5.76046 14.4779 5.83234 14.3871 5.9761C13.6369 7.16409 11.4036 10.1673 8.00027 10.1673C4.59693 10.1673 2.36369 7.16409 1.61342 5.9761Z"
                            stroke="currentColor"
                            strokeOpacity="0.2"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1.61342 5.9761C1.52262 5.83234 1.47723 5.76046 1.45182 5.6496C1.43273 5.56632 1.43273 5.43498 1.45182 5.35171C1.47723 5.24084 1.52262 5.16896 1.61341 5.0252C2.36369 3.83721 4.59693 0.833984 8.00027 0.833984C11.4036 0.833984 13.6369 3.83721 14.3871 5.0252C14.4779 5.16896 14.5233 5.24084 14.5487 5.35171C14.5678 5.43498 14.5678 5.56632 14.5487 5.6496C14.5233 5.76046 14.4779 5.83234 14.3871 5.9761C13.6369 7.16409 11.4036 10.1673 8.00027 10.1673C4.59693 10.1673 2.36369 7.16409 1.61342 5.9761Z"
                            stroke="currentColor"
                            strokeOpacity="0.2"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1.61342 5.9761C1.52262 5.83234 1.47723 5.76046 1.45182 5.6496C1.43273 5.56632 1.43273 5.43498 1.45182 5.35171C1.47723 5.24084 1.52262 5.16896 1.61341 5.0252C2.36369 3.83721 4.59693 0.833984 8.00027 0.833984C11.4036 0.833984 13.6369 3.83721 14.3871 5.0252C14.4779 5.16896 14.5233 5.24084 14.5487 5.35171C14.5678 5.43498 14.5678 5.56632 14.5487 5.6496C14.5233 5.76046 14.4779 5.83234 14.3871 5.9761C13.6369 7.16409 11.4036 10.1673 8.00027 10.1673C4.59693 10.1673 2.36369 7.16409 1.61342 5.9761Z"
                            stroke="currentColor"
                            strokeOpacity="0.2"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.00027 7.50065C9.10484 7.50065 10.0003 6.60522 10.0003 5.50065C10.0003 4.39608 9.10484 3.50065 8.00027 3.50065C6.8957 3.50065 6.00027 4.39608 6.00027 5.50065C6.00027 6.60522 6.8957 7.50065 8.00027 7.50065Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.00027 7.50065C9.10484 7.50065 10.0003 6.60522 10.0003 5.50065C10.0003 4.39608 9.10484 3.50065 8.00027 3.50065C6.8957 3.50065 6.00027 4.39608 6.00027 5.50065C6.00027 6.60522 6.8957 7.50065 8.00027 7.50065Z"
                            stroke="currentColor"
                            strokeOpacity="0.2"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.00027 7.50065C9.10484 7.50065 10.0003 6.60522 10.0003 5.50065C10.0003 4.39608 9.10484 3.50065 8.00027 3.50065C6.8957 3.50065 6.00027 4.39608 6.00027 5.50065C6.00027 6.60522 6.8957 7.50065 8.00027 7.50065Z"
                            stroke="currentColor"
                            strokeOpacity="0.2"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.00027 7.50065C9.10484 7.50065 10.0003 6.60522 10.0003 5.50065C10.0003 4.39608 9.10484 3.50065 8.00027 3.50065C6.8957 3.50065 6.00027 4.39608 6.00027 5.50065C6.00027 6.60522 6.8957 7.50065 8.00027 7.50065Z"
                            stroke="currentColor"
                            strokeOpacity="0.2"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                      <Typography
                        sx={{
                          color: "text.secondary",
                          fontSize: "12px",
                          fontWeight: "500",
                          mx: 0.5,
                        }}
                      >
                        {boost?.views}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mx: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          color: "#4C5357",
                          display: "flex",
                        }}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.50016 9.50065C5.29102 9.50065 3.50016 7.70979 3.50016 5.50065V1.79695C3.50016 1.52105 3.50016 1.3831 3.54037 1.27264C3.60777 1.08746 3.75364 0.941588 3.93882 0.874189C4.04928 0.833984 4.18723 0.833984 4.46313 0.833984H10.5372C10.8131 0.833984 10.951 0.833984 11.0615 0.874189C11.2467 0.941588 11.3926 1.08746 11.46 1.27264C11.5002 1.3831 11.5002 1.52105 11.5002 1.79695V5.50065C11.5002 7.70979 9.7093 9.50065 7.50016 9.50065ZM7.50016 9.50065V11.5007M11.5002 2.16732H13.1668C13.4775 2.16732 13.6328 2.16732 13.7553 2.21806C13.9186 2.28573 14.0484 2.41551 14.1161 2.57886C14.1668 2.70138 14.1668 2.85669 14.1668 3.16732V3.50065C14.1668 4.12063 14.1668 4.43062 14.0987 4.68496C13.9137 5.37514 13.3747 5.91424 12.6845 6.09917C12.4301 6.16732 12.1201 6.16732 11.5002 6.16732M3.50016 2.16732H1.8335C1.52287 2.16732 1.36755 2.16732 1.24504 2.21806C1.08169 2.28573 0.951906 2.41551 0.884243 2.57886C0.833496 2.70138 0.833496 2.85669 0.833496 3.16732V3.50065C0.833496 4.12063 0.833496 4.43062 0.901644 4.68496C1.08658 5.37514 1.62567 5.91424 2.31586 6.09917C2.57019 6.16732 2.88018 6.16732 3.50016 6.16732M4.46313 14.1673H10.5372C10.7008 14.1673 10.8335 14.0347 10.8335 13.871C10.8335 12.5619 9.77225 11.5007 8.46313 11.5007H6.5372C5.22808 11.5007 4.16683 12.5619 4.16683 13.871C4.16683 14.0347 4.29949 14.1673 4.46313 14.1673Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.50016 9.50065C5.29102 9.50065 3.50016 7.70979 3.50016 5.50065V1.79695C3.50016 1.52105 3.50016 1.3831 3.54037 1.27264C3.60777 1.08746 3.75364 0.941588 3.93882 0.874189C4.04928 0.833984 4.18723 0.833984 4.46313 0.833984H10.5372C10.8131 0.833984 10.951 0.833984 11.0615 0.874189C11.2467 0.941588 11.3926 1.08746 11.46 1.27264C11.5002 1.3831 11.5002 1.52105 11.5002 1.79695V5.50065C11.5002 7.70979 9.7093 9.50065 7.50016 9.50065ZM7.50016 9.50065V11.5007M11.5002 2.16732H13.1668C13.4775 2.16732 13.6328 2.16732 13.7553 2.21806C13.9186 2.28573 14.0484 2.41551 14.1161 2.57886C14.1668 2.70138 14.1668 2.85669 14.1668 3.16732V3.50065C14.1668 4.12063 14.1668 4.43062 14.0987 4.68496C13.9137 5.37514 13.3747 5.91424 12.6845 6.09917C12.4301 6.16732 12.1201 6.16732 11.5002 6.16732M3.50016 2.16732H1.8335C1.52287 2.16732 1.36755 2.16732 1.24504 2.21806C1.08169 2.28573 0.951906 2.41551 0.884243 2.57886C0.833496 2.70138 0.833496 2.85669 0.833496 3.16732V3.50065C0.833496 4.12063 0.833496 4.43062 0.901644 4.68496C1.08658 5.37514 1.62567 5.91424 2.31586 6.09917C2.57019 6.16732 2.88018 6.16732 3.50016 6.16732M4.46313 14.1673H10.5372C10.7008 14.1673 10.8335 14.0347 10.8335 13.871C10.8335 12.5619 9.77225 11.5007 8.46313 11.5007H6.5372C5.22808 11.5007 4.16683 12.5619 4.16683 13.871C4.16683 14.0347 4.29949 14.1673 4.46313 14.1673Z"
                            stroke="currentColor"
                            strokeOpacity="0.2"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.50016 9.50065C5.29102 9.50065 3.50016 7.70979 3.50016 5.50065V1.79695C3.50016 1.52105 3.50016 1.3831 3.54037 1.27264C3.60777 1.08746 3.75364 0.941588 3.93882 0.874189C4.04928 0.833984 4.18723 0.833984 4.46313 0.833984H10.5372C10.8131 0.833984 10.951 0.833984 11.0615 0.874189C11.2467 0.941588 11.3926 1.08746 11.46 1.27264C11.5002 1.3831 11.5002 1.52105 11.5002 1.79695V5.50065C11.5002 7.70979 9.7093 9.50065 7.50016 9.50065ZM7.50016 9.50065V11.5007M11.5002 2.16732H13.1668C13.4775 2.16732 13.6328 2.16732 13.7553 2.21806C13.9186 2.28573 14.0484 2.41551 14.1161 2.57886C14.1668 2.70138 14.1668 2.85669 14.1668 3.16732V3.50065C14.1668 4.12063 14.1668 4.43062 14.0987 4.68496C13.9137 5.37514 13.3747 5.91424 12.6845 6.09917C12.4301 6.16732 12.1201 6.16732 11.5002 6.16732M3.50016 2.16732H1.8335C1.52287 2.16732 1.36755 2.16732 1.24504 2.21806C1.08169 2.28573 0.951906 2.41551 0.884243 2.57886C0.833496 2.70138 0.833496 2.85669 0.833496 3.16732V3.50065C0.833496 4.12063 0.833496 4.43062 0.901644 4.68496C1.08658 5.37514 1.62567 5.91424 2.31586 6.09917C2.57019 6.16732 2.88018 6.16732 3.50016 6.16732M4.46313 14.1673H10.5372C10.7008 14.1673 10.8335 14.0347 10.8335 13.871C10.8335 12.5619 9.77225 11.5007 8.46313 11.5007H6.5372C5.22808 11.5007 4.16683 12.5619 4.16683 13.871C4.16683 14.0347 4.29949 14.1673 4.46313 14.1673Z"
                            stroke="currentColor"
                            strokeOpacity="0.2"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.50016 9.50065C5.29102 9.50065 3.50016 7.70979 3.50016 5.50065V1.79695C3.50016 1.52105 3.50016 1.3831 3.54037 1.27264C3.60777 1.08746 3.75364 0.941588 3.93882 0.874189C4.04928 0.833984 4.18723 0.833984 4.46313 0.833984H10.5372C10.8131 0.833984 10.951 0.833984 11.0615 0.874189C11.2467 0.941588 11.3926 1.08746 11.46 1.27264C11.5002 1.3831 11.5002 1.52105 11.5002 1.79695V5.50065C11.5002 7.70979 9.7093 9.50065 7.50016 9.50065ZM7.50016 9.50065V11.5007M11.5002 2.16732H13.1668C13.4775 2.16732 13.6328 2.16732 13.7553 2.21806C13.9186 2.28573 14.0484 2.41551 14.1161 2.57886C14.1668 2.70138 14.1668 2.85669 14.1668 3.16732V3.50065C14.1668 4.12063 14.1668 4.43062 14.0987 4.68496C13.9137 5.37514 13.3747 5.91424 12.6845 6.09917C12.4301 6.16732 12.1201 6.16732 11.5002 6.16732M3.50016 2.16732H1.8335C1.52287 2.16732 1.36755 2.16732 1.24504 2.21806C1.08169 2.28573 0.951906 2.41551 0.884243 2.57886C0.833496 2.70138 0.833496 2.85669 0.833496 3.16732V3.50065C0.833496 4.12063 0.833496 4.43062 0.901644 4.68496C1.08658 5.37514 1.62567 5.91424 2.31586 6.09917C2.57019 6.16732 2.88018 6.16732 3.50016 6.16732M4.46313 14.1673H10.5372C10.7008 14.1673 10.8335 14.0347 10.8335 13.871C10.8335 12.5619 9.77225 11.5007 8.46313 11.5007H6.5372C5.22808 11.5007 4.16683 12.5619 4.16683 13.871C4.16683 14.0347 4.29949 14.1673 4.46313 14.1673Z"
                            stroke="currentColor"
                            strokeOpacity="0.2"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                      <Typography
                        sx={{
                          color: "text.secondary",
                          mx: 0.5,
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                      >
                        {boost?.place}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mx: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          color: "#4C5357",
                          display: "flex",
                        }}
                      >
                        <svg
                          width="14"
                          height="15"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.00016 5.83398V8.50065L8.66683 9.50065M7.00016 2.83398C3.87055 2.83398 1.3335 5.37104 1.3335 8.50065C1.3335 11.6303 3.87055 14.1673 7.00016 14.1673C10.1298 14.1673 12.6668 11.6303 12.6668 8.50065C12.6668 5.37104 10.1298 2.83398 7.00016 2.83398ZM7.00016 2.83398V0.833984M5.66683 0.833984H8.3335M12.5528 3.22868L11.5528 2.22868L12.0528 2.72868M1.44751 3.22868L2.44751 2.22868L1.94751 2.72868"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.00016 5.83398V8.50065L8.66683 9.50065M7.00016 2.83398C3.87055 2.83398 1.3335 5.37104 1.3335 8.50065C1.3335 11.6303 3.87055 14.1673 7.00016 14.1673C10.1298 14.1673 12.6668 11.6303 12.6668 8.50065C12.6668 5.37104 10.1298 2.83398 7.00016 2.83398ZM7.00016 2.83398V0.833984M5.66683 0.833984H8.3335M12.5528 3.22868L11.5528 2.22868L12.0528 2.72868M1.44751 3.22868L2.44751 2.22868L1.94751 2.72868"
                            stroke="currentColor"
                            strokeOpacity="0.2"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.00016 5.83398V8.50065L8.66683 9.50065M7.00016 2.83398C3.87055 2.83398 1.3335 5.37104 1.3335 8.50065C1.3335 11.6303 3.87055 14.1673 7.00016 14.1673C10.1298 14.1673 12.6668 11.6303 12.6668 8.50065C12.6668 5.37104 10.1298 2.83398 7.00016 2.83398ZM7.00016 2.83398V0.833984M5.66683 0.833984H8.3335M12.5528 3.22868L11.5528 2.22868L12.0528 2.72868M1.44751 3.22868L2.44751 2.22868L1.94751 2.72868"
                            stroke="currentColor"
                            strokeOpacity="0.2"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.00016 5.83398V8.50065L8.66683 9.50065M7.00016 2.83398C3.87055 2.83398 1.3335 5.37104 1.3335 8.50065C1.3335 11.6303 3.87055 14.1673 7.00016 14.1673C10.1298 14.1673 12.6668 11.6303 12.6668 8.50065C12.6668 5.37104 10.1298 2.83398 7.00016 2.83398ZM7.00016 2.83398V0.833984M5.66683 0.833984H8.3335M12.5528 3.22868L11.5528 2.22868L12.0528 2.72868M1.44751 3.22868L2.44751 2.22868L1.94751 2.72868"
                            stroke="currentColor"
                            strokeOpacity="0.2"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                      <Typography
                        sx={{
                          color: "text.secondary",
                          mx: 0.5,
                          fontSize: "12px",
                          fontWeight: 500,
                          direction: "ltr",
                        }}
                      >
                        {boost?.time_remaining}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mx: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          color: "#06D6A0",
                          display: "flex",
                        }}
                      >
                        <svg
                          width="16"
                          height="9"
                          viewBox="0 0 16 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.6668 1.16602L9.42108 6.41177C9.15707 6.67578 9.02506 6.80779 8.87284 6.85724C8.73895 6.90075 8.59471 6.90075 8.46082 6.85724C8.3086 6.80779 8.17659 6.67578 7.91258 6.41177L6.08774 4.58693C5.82373 4.32292 5.69173 4.19091 5.53951 4.14145C5.40561 4.09795 5.26138 4.09795 5.12748 4.14145C4.97527 4.19091 4.84326 4.32292 4.57925 4.58693L1.3335 7.83268M14.6668 1.16602H10.0002M14.6668 1.16602V5.83268"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                      <Typography
                        sx={{
                          color: "#06D6A0",
                          mx: 0.5,
                          fontSize: "12px",
                          fontWeight: 500,
                          direction: "ltr",
                        }}
                      >
                        {`${parseInt(boost?.growth)}%`}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    className="dropdown-wrapper"
                    // onClick={() => handleDropDownOpen(index)}
                    sx={{
                      width: "45px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        width: "16px",
                        height: "5px",
                        color: "icon.main",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        width="16"
                        height="5"
                        viewBox="0 0 16 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00016 3.33268C8.4604 3.33268 8.8335 2.95959 8.8335 2.49935C8.8335 2.03911 8.4604 1.66602 8.00016 1.66602C7.53993 1.66602 7.16683 2.03911 7.16683 2.49935C7.16683 2.95959 7.53993 3.33268 8.00016 3.33268Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.8335 3.33268C14.2937 3.33268 14.6668 2.95959 14.6668 2.49935C14.6668 2.03911 14.2937 1.66602 13.8335 1.66602C13.3733 1.66602 13.0002 2.03911 13.0002 2.49935C13.0002 2.95959 13.3733 3.33268 13.8335 3.33268Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.16683 3.33268C2.62707 3.33268 3.00016 2.95959 3.00016 2.49935C3.00016 2.03911 2.62707 1.66602 2.16683 1.66602C1.70659 1.66602 1.3335 2.03911 1.3335 2.49935C1.3335 2.95959 1.70659 3.33268 2.16683 3.33268Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        zIndex: "10",
                        top: "0px",
                        left: "0px",
                        width: "235px",
                        bgcolor: "background.element",
                        borderRadius: "0 8px 8px 8px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                        py: "10px",
                        px: "14px",
                        transition: "all 0.3s ease",
                        transform:
                          openDropDownIndex == index
                            ? "translateY(0px)"
                            : "translateY(25px)",
                        opacity: openDropDownIndex == index ? "1" : "0",
                        visibility:
                          openDropDownIndex == index ? "visible" : "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          rowGap: "5px",
                        }}
                      >
                        <Box
                          onClick={() => {
                            setStatus("report");
                            setIsReportUpdateOpen(true);
                          }}
                          sx={{
                            borderRadius: "5px",
                            py: "10px",
                            px: "7px",
                            ":hover": {
                              background: "#F5F5F5",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              color: "text.secondary",
                              fontSize: "14px",
                              fontWeight: "600",
                            }}
                          >
                            گزارش
                          </Typography>
                        </Box>
                        <Box
                          onClick={() => {
                            setStatus("update");
                            setIsReportUpdateOpen(true);
                          }}
                          sx={{
                            borderRadius: "5px",
                            py: "10px",
                            px: "7px",
                            ":hover": {
                              background: "#F5F5F5",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              color: "text.secondary",
                              fontSize: "14px",
                              fontWeight: "600",
                            }}
                          >
                            بروزرسانی
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Boosts;
