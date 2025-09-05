"use client"

import { Box, Container, Skeleton, Typography } from "@mui/material";
import FaqNotFound from "./faqNotFound";
import FaqTopics from "./faqTopics";
import Breadcrumbs from "../breadcrumbs";
import { useEffect, useState } from "react";
import FaqAccordions from "./faqAccordions";
import FAQModel from "@/models/FAQ";
import { fetchFaqsByTopicSlug, fetchFaqTopics } from "@/api/data";
import TopicModel from "@/models/Topic";
import Image from "next/image";

const Faqs = () => {
    const [showQuestions, setShowQuestions] = useState<TopicModel | false>(false);
    const [faqs, setFaqs] = useState<FAQModel[]>([]);
    const [topics, setTopics] = useState<TopicModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [faqLoading, setFaqLoading] = useState<boolean>(false);

    const fetchFaqs = async ({ slug }: { slug: string }) => {
        setFaqLoading(true)
        try {
            const fetchedTopics = await fetchFaqsByTopicSlug({ slug: slug });
            setFaqs(fetchedTopics);
            setFaqLoading(false)
        } catch (error) {
            console.error('Error fetching topics:', error);
            setFaqLoading(false)
        }
    };

    useEffect(() => {
        if (showQuestions) {
            fetchFaqs({ slug: showQuestions?.slug })
        }
        window.scrollTo(0, 0);
    }, [showQuestions])

    useEffect(() => {
        setLoading(true)
        const loadTopics = async () => {
            try {
                const fetchedTopics = await fetchFaqTopics();
                setTopics(fetchedTopics);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching topics:', error);
                setLoading(false)
            }
        };

        loadTopics();
    }, []);

    return (
        <Container sx={{ mb: { md: "0px", xs: "94px" } }}>
            <Box sx={{ mt: 5 }}>
                <Breadcrumbs breadCrumbs={[
                    { title: "سوالات متداول", link: "/faq", active: true }
                ]} /></Box>
            {showQuestions ?
                <>
                    <Box sx={{ mt: 8, width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                        {faqLoading ?
                            <Skeleton variant="rounded" sx={{ borderRadius: "5px" }} width={42} height={42}>

                            </Skeleton>
                            :
                            <Box>
                                <Box
                                    sx={{
                                        width: "42px",
                                        height: "42px",
                                        borderRadius: "5px",
                                        backgroundColor: "background.secondary",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        position: "relative", overflow: "hidden"
                                    }}
                                >
                                    <Image src={showQuestions?.icon} fill alt="icon" />
                                </Box>


                            </Box>}
                        <Box onClick={() => setShowQuestions(false)} sx={{ cursor: "pointer" }}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6654 10H3.33203M3.33203 10L8.33203 15M3.33203 10L8.33203 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Box>
                    </Box>
                    <Box sx={{ mt: 2.5 }}>
                        {faqLoading ?
                            <Skeleton variant="text" width="120px" height="54px">
                                <Typography>
                                </Typography>
                            </Skeleton>
                            :
                            <Typography sx={{ color: "text.main", fontSize: "36px", fontWeight: "600", }}>
                                {showQuestions?.department_title}
                            </Typography>}
                    </Box>
                    <Box sx={{ mt: 8 }}>
                        <FaqAccordions loading={faqLoading} faqs={faqs} />
                    </Box>
                </> :
                <>
                    <Box sx={{ mt: 8 }}>
                        <Typography variant="h1" sx={{ color: "text.main", fontSize: { md: "36px", xs: "24px" }, fontWeight: "600" }}>سوالات متداول</Typography>
                        <Typography sx={{ color: "text.secondary", fontSize: { md: "17px", xs: "14px" }, lineHeight: 2, mt: 2 }}>هر انچه برای شناخت بهتر فعالیت های ما لازم است بدانید در اینجا قرار دارد</Typography>

                    </Box>
                    <FaqTopics setShowQuestions={setShowQuestions} loading={loading} topics={topics} />
                </>}
            <FaqNotFound />
        </Container>
    );
}

export default Faqs;