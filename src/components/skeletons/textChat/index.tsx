import Profile from "@/components/categories/card/profile";
import MessageModel from "@/models/Message";
import { Box, Skeleton, Typography } from "@mui/material";

const TextChatSkeleton = ({
    sender,
    isLast
}: {
    isLast: boolean,
    sender: "right" | "left"
}) => {
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: sender == "right" ? "start" : "end" }}>
            <Skeleton width="150px" height="62px" sx={{ px: 1, borderRadius: sender == "right" ? "14px 14px 2px 14px" : "14px 14px 14px 2px" }}></Skeleton>
        </Box>
    );
};

export default TextChatSkeleton;
