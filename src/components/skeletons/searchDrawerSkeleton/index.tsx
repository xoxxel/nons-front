import { Box, Skeleton } from "@mui/material";

const SearcDrawerSkeleton = () => {
  return (
    <Box sx={{ p: "24px 20px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Skeleton variant="text" animation="wave" sx={{ width: "50px" }} />
        <Skeleton
          variant="circular"
          animation="wave"
          sx={{ width: "35px", height: "35px" }}
        />
      </Box>
      <Box sx={{ mt: 7 ,display:"flex", flexDirection:"column",gap:1.5,}}>
        <Skeleton variant="text" animation="wave" sx={{ width: "100px" }} />
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{ width: "100%", height: "47px", borderRadius: "8px" }}
        />
        <Box sx={{display:"flex",overflow:"hidden",whiteSpace:"nowrap",gap:2}}>
            <Skeleton variant="rectangular" animation="wave" sx={{width:"97px",height:"35px",borderRadius:"8px"}} />
            <Skeleton variant="rectangular" animation="wave" sx={{width:"97px",height:"35px",borderRadius:"8px"}} />
            <Skeleton variant="rectangular" animation="wave" sx={{width:"97px",height:"35px",borderRadius:"8px"}} />
            <Skeleton variant="rectangular" animation="wave" sx={{width:"97px",height:"35px",borderRadius:"8px"}} />
        </Box>
      </Box>
      <Skeleton variant="text" animation="wave" sx={{width:"80px",mt:3}} />
      <Box sx={{display:"flex",flexDirection:"column",gap:1,mt:3}}>
      <Skeleton variant="rectangular" animation="wave" sx={{width:"100%",height:"28px",borderRadius:"8px"}} />
      <Skeleton variant="rectangular" animation="wave" sx={{width:"100%",height:"28px",borderRadius:"8px"}} />
      <Skeleton variant="rectangular" animation="wave" sx={{width:"100%",height:"28px",borderRadius:"8px"}} />
      <Skeleton variant="rectangular" animation="wave" sx={{width:"100%",height:"28px",borderRadius:"8px"}} />
      </Box>
    </Box>
  );
};

export default SearcDrawerSkeleton;
