import { Grid } from "@mui/material";
import TopicCard from "./topicCard";
import TopicModel from "@/models/Topic";
import TopicSkeleton from "@/components/skeletons/topic";

const FaqTopics = ({ loading, setShowQuestions, topics,  }: { loading: boolean, topics: TopicModel[], setShowQuestions: React.Dispatch<React.SetStateAction<TopicModel | false>>, }) => {

    return (
        <Grid container spacing="10px" sx={{ mt: { md: 14, xs: 10 } }}>
            {loading ? (
                <>
                    {Array(6).fill(0).map((_, index) => (
                        <Grid key={index} item lg={4} xs={12}><TopicSkeleton /></Grid>
                    ))}
                </>
            ) : (
                topics?.map((topic, index) => (
                    <Grid item lg={4} xs={12} key={index}>
                        <TopicCard topic={topic} setShowQuestions={setShowQuestions} />
                    </Grid>
                ))
            )}
        </Grid>
    );
}

export default FaqTopics;
