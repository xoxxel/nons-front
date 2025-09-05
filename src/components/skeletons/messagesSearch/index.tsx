import { Box, Skeleton } from "@mui/material";

const MessagesSearchSkeleton = () => {
    return (
        <Box sx={{ px: 1, mt: 1, mb: 3, }}>
            <Skeleton variant="rectangular" width="100%" height={44} sx={{ borderRadius: "5px", }}></Skeleton>
        </Box>
    );
}

export default MessagesSearchSkeleton;