import { Skeleton } from "@mui/material";

const TopicSkeleton = () => {
    return (
      <Skeleton variant="rectangular" width="100%" height={152} sx={{ borderRadius: "12px", }}></Skeleton>
      );
}
 
export default TopicSkeleton;