import TopicModel from "@/models/Topic";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";



const TopicCard = ({ topic, setShowQuestions }: { topic: TopicModel, setShowQuestions: React.Dispatch<React.SetStateAction<TopicModel | false>> }) => {
    return (
        <Box
            onClick={() => setShowQuestions(topic)}
            sx={{
                width: "100%",
                height: "152px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "background.element",
                borderRadius: "12px",
                p: "21px",
                cursor:"pointer"
            }}
        >
            <Box
                sx={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "5px",
                    backgroundColor: "background.secondary",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position:"relative", overflow:"hidden"
                }}
            >
               <Image fill src={topic?.icon} alt="faq-icon" />
            </Box>
            <Box>
                <Typography sx={{ color: "text.main", fontSize: "20px", fontWeight: "600" }}>
                    {topic.department_title}
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: "16px", mt: 0.5 }}>
                    {topic.description}
                </Typography>
            </Box>
        </Box>
    );
};

export default TopicCard;
