import { Skeleton } from "@mui/material";

const FaqSkeleton = () => {
    return (
      <Skeleton variant="rectangular" width="100%" height={62} sx={{
        borderRadius: "5px !important", mb: "5px",
 }}></Skeleton>

      );
} 
 
export default FaqSkeleton;