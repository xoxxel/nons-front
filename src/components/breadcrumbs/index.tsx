import BreadCrumbModel from "@/models/BreadCrumb";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Breadcrumbs = ({ breadCrumbs }: { breadCrumbs: BreadCrumbModel[] }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Link href={"/"}>
        <Box sx={{ position: "relative", color: "text.main", display: "flex" }}>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66667 14.6668H13.3333M9.18141 2.80345L3.52949 7.19939C3.15168 7.49324 2.96278 7.64017 2.82669 7.82417C2.70614 7.98716 2.61633 8.17078 2.56169 8.366C2.5 8.58639 2.5 8.8257 2.5 9.30433V15.3334C2.5 16.2669 2.5 16.7336 2.68166 17.0901C2.84144 17.4037 3.09641 17.6587 3.41002 17.8185C3.76654 18.0001 4.23325 18.0001 5.16667 18.0001H14.8333C15.7668 18.0001 16.2335 18.0001 16.59 17.8185C16.9036 17.6587 17.1586 17.4037 17.3183 17.0901C17.5 16.7336 17.5 16.2669 17.5 15.3334V9.30433C17.5 8.8257 17.5 8.58639 17.4383 8.366C17.3837 8.17078 17.2939 7.98716 17.1733 7.82417C17.0372 7.64017 16.8483 7.49324 16.4705 7.19939L10.8186 2.80345C10.5258 2.57574 10.3794 2.46189 10.2178 2.41812C10.0752 2.37951 9.92484 2.37951 9.78221 2.41812C9.62057 2.46189 9.47418 2.57574 9.18141 2.80345Z"
              stroke="currentColor"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Box>
      </Link>
      <Box sx={{ position: "relative", color: "text.main", display: "flex" }}>
        <svg
          width="6"
          height="11"
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 9.5L1 5.5L5 1.5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Box>
      {breadCrumbs.map((item, index) => (
        <React.Fragment key={index}>
          <Link href={item.link}>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  height: "28px",
                  backgroundColor: item.active ? "text.main" : "transparent",
                  borderRadius: "6px",
                  p: item.active ? "4px 8px" : "4px 0px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: item.active ? "background.main" : "text.main",
                }}
              >
                {item?.title}
              </Box>
            </Box>
          </Link>
          {/* اگر این آخرین آیتم نیست، SVG را اضافه کنید */}
          {index < breadCrumbs.length - 1 && (
            <Box
              sx={{
                position: "relative",
                color: "text.main",
                display: "flex",
              }}
            >
              <svg
                width="6"
                height="11"
                viewBox="0 0 6 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 9.5L1 5.5L5 1.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Breadcrumbs;
