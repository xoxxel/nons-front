import { Skeleton } from "@mui/material";

const MessageCardSkeleton = () => {
    return (
        <Skeleton variant="rectangular" width="100%" height={80} sx={{ borderRadius: "12px", }}></Skeleton>

      );
}
 
export default MessageCardSkeleton;