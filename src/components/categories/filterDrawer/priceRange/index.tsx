"use client";

import { fetchProductPriceFilter } from "@/api/data";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const PriceRange = ({
  setFilterOptions,
  filterOptions,
}: {
  setFilterOptions: React.Dispatch<React.SetStateAction<CategoRyFiltersModel>>;
  filterOptions: CategoRyFiltersModel;
}) => {
  const [orderCounts, setOrderCounts] = useState<
    { range: { min: number; max: number }; count: number }[]
  >([]);
  const [selectedIndexes, setSelectedIndexes] = useState<Set<number>>(
    new Set()
  );
  const [isDragging, setIsDragging] = useState(false);
  const [toolTip, setTooltip] = useState(-1);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [direction, setDirection] = useState<"none" | "rtl" | "ltr">("none");
  const [selectedPrices, setSelectedPrices] = useState({
    lowest: 0,
    highest: 3000000,
  });

  const highestCount = orderCounts ? Math.max(...orderCounts?.map((item) => item.count), 1) : 0;

  useEffect(() => {
    fetchProductPriceFilter()
      .then((res) => setOrderCounts(res))
      .catch((err) =>
        console.error(
          "error fetchin products count filtered by price bars",
          err
        )
      );
  }, []);

  // clearing
  useEffect(() => {
    if (
      filterOptions.lowestPrice === 0 &&
      filterOptions.highestPrice > 100000000
    ) {
      setSelectedIndexes(new Set());
      setSelectedPrices({
        lowest: 0,
        highest: 3000000,
      });
    }
  }, [filterOptions.lowestPrice, filterOptions.highestPrice]);

  useEffect(() => {
    const sortedArray = Array.from(selectedIndexes);
    if (selectedIndexes.size > 2) {
      if (sortedArray[0] < sortedArray[1]) {
        setDirection("rtl");
      } else {
        setDirection("ltr");
      }
    } else if (selectedIndexes.size === 0) {
      setDirection("none");
    }
    if (direction !== "none" && selectedIndexes.size > 1) {
      const slicedArray = sortedArray.slice(
        0,
        sortedArray?.indexOf(activeIndex) + 1
      );
      if (slicedArray.length !== sortedArray.length) {
        setSelectedIndexes(new Set(slicedArray));
      }
    }
    // set selected prices
    if (selectedIndexes.size > 1) {
      const lowest = Math.min(...sortedArray);
      const highest = Math.max(...sortedArray);
      setSelectedPrices({
        lowest: orderCounts[lowest]?.range?.min,
        highest: orderCounts[highest]?.range?.max,
      });
    } else if (selectedIndexes.size === 1) {
      setSelectedPrices({
        lowest: orderCounts[sortedArray[0]]?.range?.min,
        highest: orderCounts[sortedArray[0]]?.range?.max,
      });
    }
  }, [selectedIndexes]);

  const handleMouseDown = (index: number) => {
    setIsDragging(true);
    setSelectedIndexes(new Set([index]));
    setActiveIndex(index);
  };

  const handleMouseMove = (index: number) => {
    if (isDragging) {
      setActiveIndex(index);
      setSelectedIndexes((prev) => {
        const newSet = new Set(prev);
        newSet.add(index);

        // Add all indexes between the lowest and highest
        const lowest = Math.min(...Array.from(newSet));
        const highest = Math.max(...Array.from(newSet));
        for (let i = lowest; i <= highest; i++) {
          newSet.add(i);
        }

        // Convert to array and sort
        const sortedArray = Array.from(newSet).sort((a, b) => {
          const firstTwo = Array.from(newSet).slice(0, 2);
          firstTwo[0] < firstTwo[1] ? setDirection("rtl") : setDirection("ltr");
          return firstTwo[0] < firstTwo[1] ? a - b : b - a;
        });

        return new Set(sortedArray);
      });
    }
  };

  useEffect(() => {
    const setArray = Array.from(selectedIndexes);
    if (!isDragging && selectedIndexes.size > 0) {
      const lowest = Math.min(...setArray);
      const highest = Math.max(...setArray);
      if (selectedIndexes.size <= 1) {
        setFilterOptions((prev) => ({
          ...prev,
          lowestPrice: orderCounts[setArray[0]]?.range?.min,
          highestPrice: orderCounts[setArray[0]]?.range?.max,
        }));
      } else {
        setFilterOptions((prev) => ({
          ...prev,
          lowestPrice: orderCounts[lowest]?.range?.min,
          highestPrice: orderCounts[highest]?.range?.max,
        }));
      }
    }
  }, [isDragging]);

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleStart = (index: number) => {
    setIsDragging(true);
    setSelectedIndexes(new Set([index]));
  };

  const handleMove = (index: number) => {
    if (isDragging) {
      setSelectedIndexes((prev) => {
        const newSet = new Set(prev);
        newSet.add(index);
        setActiveIndex(index);

        // Add all indexes between the lowest and highest
        const lowest = Math.min(...Array.from(newSet));
        const highest = Math.max(...Array.from(newSet));
        for (let i = lowest; i <= highest; i++) {
          newSet.add(i);
        }

        // Convert to array and sort
        const sortedArray = Array.from(newSet).sort((a, b) => {
          const firstTwo = Array.from(newSet).slice(0, 2);
          return firstTwo[0] < firstTwo[1] ? a - b : b - a;
        });

        return new Set(sortedArray);
      });
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    setTooltip(-1);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    const boxes = document.querySelectorAll(".price-box");
    boxes.forEach((box, index) => {
      const rect = box.getBoundingClientRect();
      if (touch.clientX >= rect.left && touch.clientX <= rect.right) {
        handleMove(index);
        setTooltip(index);
      }
    });
  };

  const handleTouchStart = (index: number, event: React.TouchEvent) => {
    // event.preventDefault();
    handleStart(index);
    handleTouchMove(event);
  };

  return (
    orderCounts ? <Box>
      <Typography
        sx={{
          color: "text.main",
          fontSize: "16px",
          fontWeight: "600",
          mt: 3.5,
        }}
      >
        رنج قیمتی
      </Typography>
      <Box sx={{color:"text.main",display:"flex",justifyContent:"space-between",alignItems:"end"}}>
        <Typography
          sx={{
            color: "text.main",
            fontSize: "13px",
            fontWeight: "400",
            mt: 2,
          }}
        >
          میانگین قیمتی مورد نظر خود را انتخاب کنید
        </Typography>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{cursor:"pointer"}}
          onClick={()=> (filterOptions.highestPrice !== 10000000001) && setFilterOptions((prev) => ({
            ...prev,
            lowestPrice: 0,
            highestPrice: 10000000001,
          }))}
        >
          <path
            d="M21 10C21 10 18.995 7.26822 17.3662 5.63824C15.7373 4.00827 13.4864 3 11 3C6.02944 3 2 7.02944 2 12C2 16.9706 6.02944 21 11 21C15.1031 21 18.5649 18.2543 19.6482 14.5M21 10V4M21 10H15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          mt: 3.5,
          height: "75px",
          gap: 0.45,
          alignItems: "center",
          overflowX: "clip",
        }}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleEnd}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDragging(false)}
      >
        {orderCounts?.map((item, index) => {
          // Calculate the height based on the highest count
          const height = Math.max((item.count / highestCount) * 72, 15); // Ensure minimum height of 15px

          return (
            <Box
              key={index}
              className="price-box"
              onMouseDown={() => handleMouseDown(index)}
              onMouseMove={() => handleMouseMove(index)}
              onMouseUp={handleMouseUp}
              onTouchStart={(event) => handleTouchStart(index, event)}
              sx={{
                height: "100%",
                width: "10px",
                display: "grid",
                alignItems: "center",
                userSelect: "none",
              }}
            >
              <Box
                onMouseOver={() => setTooltip(index)}
                onMouseOut={() => setTooltip(-1)}
                sx={{
                  height: `${height}px`, // Set calculated height
                  bgcolor: selectedIndexes.has(index)
                    ? "button.main"
                    : "text.main",
                  borderRadius: "50px",
                  cursor: "pointer",
                  position: "relative",
                  userSelect: "none",
                }}
              >
                {toolTip === index && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-27px",
                      left: index < 2 ? "-20px" : index > 26 ? "26px" : "50%",
                      transform: "translateX(-50%)",
                      bgcolor: "background.element",
                      borderRadius: "4px",
                      px: 1,
                      whiteSpace: "nowrap",
                      zIndex: 22222,
                      color: "text.main",
                      fontSize: "13px",
                      userSelect: "none",
                    }}
                  >
                    {`${item.count} گزینه`}
                  </Box>
                )}
                {toolTip === index && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-9px",
                      right: "2px",
                      width: "5px",
                      height: "5px",
                      bgcolor: "background.element",
                      rotate: "45deg",
                      userSelect: "none",
                    }}
                  ></Box>
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 1.5,
          mt: 3,
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            p: 1,
            gap: 1.5,
            border: "1px solid",
            borderColor: "border.main",
            borderRadius: "9px",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: "10px", fontWeight: "400", color: "text.main" }}
          >
            ارزانترین
          </Typography>
          <Typography
            sx={{ fontSize: "13px", fontWeight: "600", color: "text.main" }}
          >
            {`IRT ${ThousandSeparator(selectedPrices?.lowest)}`}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "56px",
            height: "4px",
            bgcolor: "border.main",
            borderRadius: "50px",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            p: 1,
            gap: 1.5,
            border: "1px solid",
            borderColor: "border.main",
            borderRadius: "9px",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: "10px", fontWeight: "400", color: "text.main" }}
          >
            گرانترین
          </Typography>
          <Typography
            sx={{ fontSize: "13px", fontWeight: "600", color: "text.main" }}
          >
            {`IRT ${
              selectedPrices?.highest >= 3000000
                ? "+3,000,000"
                : ThousandSeparator(selectedPrices?.highest)
            }`}
          </Typography>
        </Box>
      </Box>
    </Box> : ""
  );
};

export default PriceRange;
