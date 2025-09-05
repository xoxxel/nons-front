import { Box, Modal } from "@mui/material";
import RiportComponent from "./riport";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
};

const RiportModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: Function;
}) => {
  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <RiportComponent handleClose={handleClose} />
      </Box>
    </Modal>
  );
};

export default RiportModal;
