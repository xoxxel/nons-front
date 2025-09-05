import InfoButton from "@/components/profile/userInfo/main/infoButton";
import { Box, Typography } from "@mui/material";
import DragAndDropBox from "./drag&DropBox";
import ProductModel from "@/models/Product";

const Productgallery = ({
  setProductAttributes,
  alreadyUploadedMedia,
  setAlreadyUploadedMedia,
}: {
  setProductAttributes: any;
  alreadyUploadedMedia: ProductModel["gallery"] | null,
  setAlreadyUploadedMedia: any,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        flexDirection: { md: "row", xs: "column" },
        gap: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1.75 }}>
        <Typography
          sx={{
            color: "text.main",
            fontWeight: "400",
            fontSize: { md: "16px", xs: "13px" },
          }}
        >
          تصاویر و ویدیو
        </Typography>
        <InfoButton />
      </Box>
      <Box sx={{ width: { lg: "70%", md: "65%", xs: "100%" } }}>
        <DragAndDropBox
        alreadyUploadedMedia={alreadyUploadedMedia}
        setAlreadyUploadedMedia={setAlreadyUploadedMedia}
          onChange={(idArray: number[]) =>
            setProductAttributes((prev: {}) => ({
              ...prev,
              image_list: idArray,
            }))
          }
        />
      </Box>
    </Box>
  );
};

export default Productgallery;
