"use client";

import { fetchPlatforms } from "@/api/data";
import { Box, Skeleton, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const Platforms = ({
  filterOptions,
  setFilterOptions,
}: {
  filterOptions: CategoRyFiltersModel;
  setFilterOptions: React.Dispatch<React.SetStateAction<CategoRyFiltersModel>>;
}) => {
  const [platforms, setPlatforms] = useState<platformModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlatforms()
      .then((res) => setPlatforms(res))
      .catch((err) =>
        console.error("error on fetching platforms in category filters", err)
      ).finally(()=> setLoading(false));
  }, []);

  const handleClick = (value: number) => {
    if (!filterOptions.platforms.includes(value)) {
      setFilterOptions({
        ...filterOptions,
        platforms: [...filterOptions.platforms, value],
      });
    } else {
      const platforms = [...filterOptions.platforms];
      const categoryIndex = platforms.indexOf(value);
      platforms.splice(categoryIndex, 1);
      setFilterOptions({
        ...filterOptions,
        platforms: platforms,
      });
    }
  };

  return platforms?.length > 0 && (
    !loading ? <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        sx={{ fontWeight: "600", fontSize: "13px", color: "text.main" }}
      >
        پلتفرم ها
      </Typography>
      <Typography
        sx={{ fontWeight: "400", fontSize: "13px", color: "text.main" }}
      >
        بازی ها و نرم افزارهای مرتبط با پلتفرم اندروید
      </Typography>
      <Box
        sx={{
          border: "1px solid",
          borderColor: "border.main",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            borderColor: "border.main",
          }}
        >
          {platforms?.map((platform, index) => (
            <Box
              key={platform?.id}
              onClick={() => handleClick(platform?.id)}
              sx={{
                display: "flex",
                flex: "1 0 25%",
                flexDirection: "column",
                pt: "10px",
                pb: 2,
                alignItems: "center",
                borderLeft:
                  (index + 1) % 4 === 0 || index === platforms?.length - 1
                    ? "none"
                    : "0.5px dotted",
                borderTop: index > 3 ? "0.5px solid" : "none",
                borderColor: "border.main",
                width: "25%",
                gap: 2,
                bgcolor: filterOptions.platforms.includes(platform?.id)
                  ? "button.main"
                  : "transparent",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_SERVER}/${platform?.icon}`}
                width={30}
                height={30}
                alt={platform?.title}
              />
              <Typography
                sx={{
                  color: filterOptions.platforms.includes(platform?.id)
                    ? "white"
                    : "text.main",
                  fontSize: "10px",
                }}
              >
                {platform?.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box> : <Skeleton variant="rectangular" height={177} sx={{width:"100%",borderRadius:"12px"}} />
  );
};

export default Platforms;
