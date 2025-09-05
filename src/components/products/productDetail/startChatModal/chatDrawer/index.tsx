import Chat from "@/components/chat";
import { Box, Button, Drawer } from "@mui/material";

const ChatDrawer = ({
  open,
  handleClose,
  roomName,
}: {
  open: boolean;
  handleClose: Function;
  roomName: string;
}) => {
  return (
    <Box>
      <Drawer
        open={open}
        onClose={() => handleClose()}
        sx={{
          "& > .MuiPaper-root": {
            width: { xl: "40%", lg: "45%", md: "50%", sm: "70%", xs: "100%" },
          },
        }}
      >
        <Chat handleCloseChat={handleClose} room_name={roomName} />
      </Drawer>
    </Box>
  );
};

export default ChatDrawer;
