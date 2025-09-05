import { Box, Skeleton } from "@mui/material";

const ProductSliderSkeleton = () => {
  return (
    <Box>
      {/* categories */}
      <Box sx={{ display: "flex", gap: "10px",pt:3,overflow:"hidden" }}>
        {Array(5)
          .fill(0)
          .map(() => (
            <Skeleton
              variant="rectangular"
              animation="wave"
              height={40}
              sx={{ borderRadius: "5px", minWidth:"100px" }}
            />
          ))}
      </Box>
      {/* text and link */}
      <Box sx={{display:"flex",width:"100%",justifyContent:"space-between",py:{md:4,xs:2.5}}}>
        <Skeleton variant="text" animation="wave" sx={{height:{md:"50px",xs:"30px"},width:{md:"150px",xs:"100px"}}} />
        <Skeleton variant="text" animation="wave" sx={{height:{md:"50px",xs:"30px"},width:{md:"150px",xs:"20px"}}} />
      </Box>
      {/* products by brands */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {Array(5)
          .fill(0)
          .map(() => (
            <Box
              sx={{
                display: "flex",
                gap: { md: "20px", sm: "16px", xs: "11px" },
                overflow: "hidden",
              }}
            >
              <Skeleton
                variant="rectangular"
                animation="wave"
                sx={{
                  minWidth: {
                    md: "calc(100% /1.85)",
                    sm: "calc(100% /1.5)",
                    xs: "calc(100% /1.063)",
                  },
                  borderRadius: { md: "12px", xs: "5px" },
                  height: { md: "110px", xs: "75px" },
                  display: "flex",
                  alignItems: { md: "start", xs: "center" },
                  padding: { md: "15px 22px", xs: "10px" },
                }}
              ></Skeleton>
              <Skeleton
                variant="rectangular"
                animation="wave"
                sx={{
                  minWidth: {
                    md: "calc(100% /1.85)",
                    sm: "calc(100% /1.5)",
                    xs: "calc(100% /1.063)",
                  },
                  borderRadius: { md: "12px", xs: "5px" },
                  height: { md: "110px", xs: "75px" },
                }}
              />
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default ProductSliderSkeleton;
