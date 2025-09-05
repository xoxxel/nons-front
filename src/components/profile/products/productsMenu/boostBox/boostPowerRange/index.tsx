import { Box, Slider } from "@mui/material";
import React from "react";

const BoostPowerRange = ({
  position,
  setPosition,
}: {
  position: number;
  setPosition: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    setPosition(newValue as number);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          mt: 2,
          px:1,
        }}
      >
        <Slider
          valueLabelDisplay="on"
          min={10}
          max={200}
          step={1}
          value={position}
          onChange={handleChange}
          sx={{
            "& .MuiSlider-track": {
              border:"none",
              backgroundColor: "transparent",
            },
            "& .MuiSlider-rail": {
              borderBottom: "2px dashed",
              borderColor: "text.secondary",
              opacity: 1,
              backgroundColor: "transparent",
            },
            "& .MuiSlider-thumb": {
              height: 15,
              width: 33,
              borderRadius: "50px",
              backgroundColor: "primary.main",
              "&:hover": {
                boxShadow: "none",
              },
              "& .MuiSlider-valueLabelOpen": {
                backgroundColor: "transparent",
                padding: 0,
                margin: 0,
                height: "10px",
              },
              "& .MuiSlider-valueLabelLabel": {
                color: "text.main",
                fontSize: "14px",
              },
            },
          }}
        />
      </Box>
    </>
  );
};

export default BoostPowerRange;
