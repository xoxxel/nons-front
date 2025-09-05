import { Box } from "@mui/material";
import React from "react";

type MessagesSearchProps = {
    searchQuery: string;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    filterMessages: (query: string) => void;
    handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const MessagesSearch: React.FC<MessagesSearchProps> = ({
    searchQuery,
    handleSearchChange,
    filterMessages,
    handleKeyPress,
}) => {
    return (
        <Box sx={{ px: 1 }}>
            <Box
                sx={{
                    width: "100%",
                    bgcolor: "background.secondary",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "5px",
                    height: "44px",
                    px: "16px",
                    gap: 0.5,
                    mt: 1,
                    mb: 3,
                    color: "text.main",
                }}
            >
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => filterMessages(searchQuery)} // Trigger search on SVG click
                    style={{ cursor: "pointer" }} // Change cursor to pointer
                >
                    <g clipPath="url(#clip0_2170_310)">
                        <path
                            d="M10.5 10.5L8.325 8.325M9.5 5.5C9.5 7.70914 7.70914 9.5 5.5 9.5C3.29086 9.5 1.5 7.70914 1.5 5.5C1.5 3.29086 3.29086 1.5 5.5 1.5C7.70914 1.5 9.5 3.29086 9.5 5.5Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_2170_310">
                            <rect width="12" height="12" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <input
                    value={searchQuery}
                    onChange={handleSearchChange} // Update and filter search query
                    onKeyPress={handleKeyPress} // Handle key press for search
                    type="text"
                    placeholder="جستجو"
                    style={{
                        width: "100%",
                        border: "none",
                        outline: "none",
                        backgroundColor: "transparent",
                        color: "inherit",
                    }}
                />
            </Box>
        </Box>
    );
}

export default MessagesSearch;