import { Box, Modal, Typography } from "@mui/material";
import ModalSlider from "./slider";
import ProductModel from "@/models/Product";

const GalleryModal = ({
  open,
  onClose,
  gallery,
  initialItemIndex,
  productName
}: {
  open: boolean;
  onClose: Function;
  gallery: ProductModel["gallery"];
  initialItemIndex: number;
  productName:string
}) => {
  return (
    <Modal
      open={open}
      onClose={() => onClose()}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { sm: "70vh", xs: "100%" },
          maxWidth: "450px",
          bgcolor: "background.main",
          borderRadius: { sm: "12px", xs: "0px" },
          outline: 0,
          "&:focus": {
            outline: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              color: "text.main",
              p: "18px 21px",
            }}
          >
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => onClose()}
              style={{ cursor: "pointer" }}
            >
              <path
                d="M21.75 7.25L7.25 21.75M7.25 7.25L21.75 21.75"
                stroke="currentColor"
                strokeOpacity="0.6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Box>
            <ModalSlider gallery={gallery} initialItemIndex={initialItemIndex} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pb: 4.5,
            }}
          >
            <Typography
              sx={{
                color: "text.main",
                fontSize: "12px",
                fontWeight: "400",
                userSelect: "none",
              }}
            >
              {productName}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default GalleryModal;
