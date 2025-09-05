"use client";
import { fetchUserBoosts } from "@/api/data";
import Boosts from "@/components/profile/products/boosts";
import BoostMenu from "@/components/profile/products/boosts/boostMenu";
import MobileBoosts from "@/components/profile/products/boosts/mobile";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const BoostPage = () => {
  const [boosts, setBoosts] = useState<BoostModel[]>([]);
  const [loading, setLoading] = useState(true);

  const getBoosts = () => {
    fetchUserBoosts()
      .then((res) => setBoosts(res))
      .catch((err) => console.error("Error fetching user boosts", err)).finally(()=> setLoading(false));
  };

  useEffect(()=>{
    getBoosts()
  },[])

  return (
    <>
      <Box sx={{ width: "100%", display: { md: "block", xs: "none" } }}>
        <Box sx={{ mt: 5 }}>
          {/* big title at the top */}
          <Typography
            sx={{
              color: "text.main",
              fontSize: "29px",
              fontWeight: "600",
              mt: 5,
            }}
          >
            محصولات
          </Typography>
          {/* braedcrumb is here */}
          <Box sx={{ display: "flex", gap: 1, mt: 1, mb: 5 }}>
            <Typography sx={{ color: "button.main" }}>dashboard</Typography>
            <Typography sx={{ color: "text.main" }}>/</Typography>
            <Typography sx={{ color: "text.secondary" }}>product</Typography>
          </Box>
          <Grid
            container
            spacing={{ lg: 3, md: 1.5 }}
            sx={{ maxWidth: "100%" }}
          >
            <Grid item xs={4}>
              <BoostMenu updateBoosts={getBoosts} />
            </Grid>
            <Grid item xs={8}>
              <Boosts boosts={boosts} loading={loading} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <MobileBoosts boosts={boosts} loading={loading} updateBoosts={getBoosts} />
    </>
  );
};

export default BoostPage;
