"use client"

import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const BackToTop = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [firstLoad,setFirstLoad] = useState(false)

    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
          setIsVisible(true);
          setFirstLoad(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }, []);

    const scrollToTop = () => {
        const scrollStep = 16; // Adjust the scroll step as needed
        const scrollDuration = 300; // Adjust the scroll duration in milliseconds
    
        const scrollToY = 0;
        const scrollY = window.scrollY;
        const scrollDistance = scrollY;
        let scrollCount = 0;
    
        const scrollInterval = setInterval(() => {
          window.scrollTo(0, scrollY - scrollDistance * (scrollCount / (scrollDuration / scrollStep)));
          scrollCount++;
    
          if (scrollCount > scrollDuration / scrollStep) {
            clearInterval(scrollInterval);
            window.scrollTo(0, 0);
          }
        }, scrollStep);
      };

  return (
    <Button
    onClick={scrollToTop}
      sx={{
        display: "flex",
        position:"fixed",
        bottom:isVisible ? {md:"20px",xs:"80px"} : "-50px",
        right:{md:"20px",xs:"10px"},
        animation: firstLoad ? (isVisible ? "backToTop 0.2s ease-out" : "hideButton 0.2s ease-out") : "none",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#0E0F0C",
        color:"white",
        minWidth:"44px",
        height:"44px !important",
        zIndex:99,
        borderRadius:"8px",
        ":hover" : {
            bgcolor:"#0E0F0C",
        }
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 20V4M12 4L6 10M12 4L18 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
};

export default BackToTop;
