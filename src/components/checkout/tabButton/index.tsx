import { Button } from "@mui/material";

const TabButton = ({
  tabValue,
  setTabValue,
  value,
  content,
}: {
  setTabValue: any;
  tabValue: "1" | "2";
  value: "1" | "2";
  content: string;
}) => {
  return (
    <Button
      onClick={() => setTabValue(value)}
      sx={{
        width: "50%",
        minHeight: "45px",
        borderRadius: "7px",
        border: tabValue == value ? "1px solid" : "none",
        borderColor: tabValue == value ? "primary.main" : "none",
        color: tabValue == value ? "primary.main" : "text.main",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        fontSize: { md: "16px", xs: "13px" },
      }}
    >
      {content}
    </Button>
  );
};

export default TabButton;
