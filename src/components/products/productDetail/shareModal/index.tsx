import { Box, Modal } from "@mui/material";
import ShareComponent from "./share";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
};

const ShareModal = ({
  open,
  handleClose,
  link,
}: {
  open: boolean;
  handleClose: Function;
  link: string;
}) => {
  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ShareComponent handleClose={handleClose} link={link} />
      </Box>
    </Modal>
  );
};

export default ShareModal;
