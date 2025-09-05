"use client";
import { Box } from "@mui/material";
import { useState, useEffect, useRef } from "react";

type OTPInputprops = {
  onComplete: Function;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const OTPInput = ({ onComplete, value, setValue }: OTPInputprops) => {
  // const [value, setValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0); // Track the currently selected index
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(4).fill(null)); // Initialize refs for 4 inputs

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = value.split(""); // Convert the string to an array
    const inputValue = event.target.value;

    // Ignore space input
    if (inputValue === " ") {
      return;
    }

    // Handle input change
    if (inputValue.length === 1) {
      newValue[index] = inputValue; // Update the specific index
      setValue(newValue.join("")); // Convert the array back to a string
      // Move focus to the next input if the current input is filled
      if (index < 3) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) nextInput.focus();
        setSelectedIndex(index + 1); // Update selected index
      }
    } else if (inputValue === "") {
      newValue[index] = ""; // Clear the specific index
      setValue(newValue.join("")); // Convert the array back to a string
      // Move focus to the previous input if the current input is empty and not the first input
      if (index > 0) {
        const prevInput = document.getElementById(`otp-input-${index - 1}`);
        if (prevInput) prevInput.focus();
        setSelectedIndex(index - 1); // Update selected index
      }
    }
  };

  const handleKeyUp = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const prevInput = document.getElementById(`otp-input-${index - 1}`);
    const nextInput = document.getElementById(`otp-input-${index + 1}`);

    if (event.code === "Backspace" && !value[index] && index > 0) {
      if (prevInput) prevInput.focus();
      setSelectedIndex(index - 1); // Update selected index
    } else if (event.code === "ArrowLeft") {
      if (prevInput) prevInput.focus();
      setSelectedIndex(index - 1); // Update selected index
    } else if (event.code === "ArrowRight") {
      if (nextInput) nextInput.focus();
      setSelectedIndex(index + 1); // Update selected index
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent the letter 'e' from being entered
    if (event.key === "e" || event.key === "E") {
      event.preventDefault();
    }

    // Prevent entering anything other than numbers
    if (
      !/^\d$/.test(event.key) &&
      event.key !== "Backspace" &&
      event.key !== "ArrowLeft" &&
      event.key !== "ArrowRight"
    ) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    // Select the text in the input when it gains focus
    if (inputRefs.current[selectedIndex]) {
      inputRefs.current[selectedIndex]?.select();
    }
  }, [selectedIndex]);

  useEffect(() => {
    if (value.length === 4) {
      onComplete();
    }
  }, [value]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Box sx={{ display: "flex", gap: "20px", flexDirection: "row-reverse" }}>
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <Box
              key={index}
              sx={{
                width: "64px",
                height: "64px",
                border: selectedIndex === index ? "2px solid" : "0.5px solid",
                borderColor:
                  value[index] || selectedIndex === index
                    ? "button.main"
                    : "border.main",
                borderRadius: "5px",
              }}
            >
              <input
                type="number"
                id={`otp-input-${index}`}
                className="otp"
                ref={(el) => {
                  inputRefs.current[index] = el;
                }} // Store the input ref
                value={value[index] || ""} // Ensure value is always a string
                maxLength={1}
                onChange={(e) => handleChange(index, e)}
                onKeyUp={(e) => handleKeyUp(index, e)}
                onKeyDown={(e) => handleKeyDown(e)}
                autoComplete="off"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "5px",
                  outline: "none",
                  backgroundColor: "transparent",
                  fontSize: "29px",
                  fontWeight: "600",
                  textAlign: "center",
                  color: "var(--mui-palette-button-main)",
                  direction: "ltr",
                  cursor: "text",
                }}
                onFocus={() => setSelectedIndex(index)} // Update selected index on focus
              />
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default OTPInput;
