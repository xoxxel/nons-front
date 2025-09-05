"use client";

import {
  fetchProductsBySearch,
  fetchProductTitles,
  fetchRecomendedSearchs,
} from "@/api/data";
import SearcDrawerSkeleton from "@/components/skeletons/searchDrawerSkeleton";
import ProductModel from "@/models/Product";
import DeleteFromSearchHistory from "@/utils/deleteFromSearchHistory";
import SaveInSearchHistory from "@/utils/saveInSearchHistory";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BeatLoader } from "react-spinners";
import SearchEmptyState from "./emptyState";

const SearchPage = ({
  setIsDraweOpen,
}: {
  setIsDraweOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [step, setStep] = useState<"search" | "searching" | "searched">(
    "search"
  );
  const [searchingInput, setSearchingInput] = useState<string>("");
  const searchingRef = useRef<HTMLInputElement | null>(null);
  const [recommended, setRecomended] =
    useState<{ id: number; text: string }[]>();
  const [loading, setLoading] = useState(true);
  const [searchedLoading, setSearchedLoading] = useState(true);
  const [products, setProducts] = useState<ProductModel[]>();
  const [searchHistory, setSearchHistory] = useState<string[]>();
  const [productTitles, setProductTitles] = useState<{ title: string }[]>();
  const [matchedTitles, setMatchedTitles] = useState<string[]>();
  const router = useRouter();

  useEffect(() => {
    setSearchHistory(SaveInSearchHistory());
  }, []);

  useEffect(() => {
    fetchRecomendedSearchs()
      .then((data) => setRecomended(data))
      .catch((error) =>
        console.error("Error fetching recomended searchs" + error)
      )
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchProductTitles()
      .then((data) => setProductTitles(data))
      .catch((error) => console.error("Error fetching product" + error));
  }, []);

  useEffect(() => {
    if (step === "searched") {
      setProducts([]);
      setSearchedLoading(true);
      fetchProductsBySearch(searchingInput)
        .then((data) => setProducts(data.results))
        .catch((error) =>
          console.error("Error fetching recomended searchs" + error)
        )
        .finally(() => setSearchedLoading(false));
      SaveInSearchHistory(searchingInput, 3);
      setSearchHistory(SaveInSearchHistory());
    }
  }, [step]);

  useEffect(()=>{
    if (searchingInput?.length > 1) {
      const matched = productTitles?.filter((item) =>
        item?.title?.includes(searchingInput)
      );
      const matchedObjectsTitles = matched?.map((item) => item?.title);
      setMatchedTitles(matchedObjectsTitles);
    } else {
      setMatchedTitles([]);
    }
  },[searchingInput])

  const handleInputChange = (text: string) => {
    setSearchingInput(text);
  };

  const HighlightMatchedWords = (matchedTitle: string) => {
    const first = matchedTitle?.indexOf(searchingInput);
    return (
      <div>
        <span>{matchedTitle.slice(0, first)}</span>
        <span style={{ color: "var(--mui-palette-button-main)" }}>
          {matchedTitle.slice(first, first + searchingInput?.length)}
        </span>
        <span>{matchedTitle.slice(first + searchingInput?.length)}</span>
      </div>
    );
  };

  // scrolling
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [exitButtonDisable, setExitButtonDisable] = useState<boolean>(true);

  useEffect(() => {
    if (step === "searched") {
      setTimeout(() => {
        setExitButtonDisable(false);
      }, 100);
    } else setExitButtonDisable(true);
  }, [step]);

  const handleMouseDown = (event: any) => {
    setIsDragging(true);
    setStartX(event.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: any) => {
    if (!isDragging) return;
    event.preventDefault();
    const x = event.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // Adjust the scroll speed
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleCleanInput = () => {
    setSearchingInput("");
    setMatchedTitles([]);
    if (searchingRef.current) {
      searchingRef.current.focus();
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("mousemove", handleMouseMove);
      scrollContainer.addEventListener("mouseleave", handleMouseLeave);
      scrollContainer.addEventListener("mouseup", handleMouseUp);
      scrollContainer.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("mousemove", handleMouseMove);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
        scrollContainer.removeEventListener("mouseup", handleMouseUp);
        scrollContainer.removeEventListener("mousedown", handleMouseDown);
      }
    };
  }, [isDragging]);

  return (
    <>
      {step === "search" &&
        (loading ? (
          <SearcDrawerSkeleton />
        ) : (
          <>
            {/* search and close button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 6,
                mt: { sm: 3, xs: 0 },
              }}
            >
              <Typography
                sx={{ color: "text.main", fontSize: "16px", fontWeight: "900" }}
              >
                جستجو
              </Typography>
              <Button
                onClick={() => setIsDraweOpen(false)}
                sx={{
                  borderRadius: "50px",
                  bgcolor: "background.element",
                  color: "text.main",
                  minWidth: "24px",
                  height: "35px",
                  boxShadow: "0px 1px 2px 0px #1018280D",
                  ":hover": {
                    bgcolor: "background.element",
                  },
                }}
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5.5L5 15.5M5 5.5L15 15.5"
                    stroke="currentColor"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </Box>
            {/* search input with text and scrolling boxes */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "17px",
              }}
            >
              <Typography
                sx={{ color: "text.main", fontSize: "13px", fontWeight: "600" }}
              >
                دنبال چی میگردی ؟
              </Typography>
              <Box
                onClick={() => setStep("searching")}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1px solid",
                  borderColor: "text.main",
                  p: "12px 14px",
                  borderRadius: "8px",
                  color: "text.main",
                }}
              >
                <input
                  type="text"
                  placeholder="جستجوی محصول"
                  className="whitePlaceHolder"
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    backgroundColor: "transparent",
                    color: "inherit",
                  }}
                />
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6666 10.5H3.33325M3.33325 10.5L8.33325 15.5M3.33325 10.5L8.33325 5.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
              <Box
                onMouseDown={(e) => handleMouseDown(e)}
                className="scrollbarHidden"
                ref={scrollRef}
                sx={{ display: "flex", gap: 1, overflow: "auto" }}
              >
                {recommended
                  ?.slice()
                  ?.reverse()
                  ?.map((item) => (
                    <Button
                      onClick={() => {
                        setSearchingInput(item?.text);
                        setStep("searched");
                      }}
                      key={item?.id}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "background.element",
                        borderRadius: "8px",
                        color: "text.main",
                        fontSize: "13px",
                        minWidth: "95px",
                        py: 1,
                        userSelect: "none",
                        cursor: "pointer",
                        ":hover": {
                          bgcolor: "background.element",
                        },
                      }}
                    >
                      {item?.text}
                    </Button>
                  ))}
              </Box>
            </Box>
            {/* already searched items */}
            <Box
              sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Typography sx={{ fontSize: "11px", color: "#989C9F", mb: 1 }}>
                جستجو های اخیر
              </Typography>
              {/* already searcheds */}
              {searchHistory?.map((search) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "text.main",
                    gap: 2,
                  }}
                >
                  <Box
                    onClick={() => {
                      setSearchingInput(search), setStep("searching");
                    }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "text.main",
                      width: "100%",
                      cursor: "pointer",
                    }}
                  >
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2501 5.50008V10.5001L13.5834 12.1667M18.5834 10.5001C18.5834 15.1025 14.8525 18.8334 10.2501 18.8334C5.64771 18.8334 1.91675 15.1025 1.91675 10.5001C1.91675 5.89771 5.64771 2.16675 10.2501 2.16675C14.8525 2.16675 18.5834 5.89771 18.5834 10.5001Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <Typography sx={{ color: "inherit" }}>{search}</Typography>
                  </Box>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setSearchHistory(DeleteFromSearchHistory(search))
                    }
                  >
                    <path
                      d="M15.25 5.5L5.25 15.5M5.25 5.5L15.25 15.5"
                      stroke="currentColor"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              ))}
            </Box>
          </>
        ))}
      {step === "searching" && (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid",
              borderColor: "text.main",
              p: "12px 14px",
              borderRadius: "8px",
              color: "text.main",
              mt: { sm: 3, xs: 0 },
              animation: {
                sm: "serchbarAnimation 0.3s ease",
                xs: "MobileSerchbarAnimation 0.1s ease",
              },
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "text.main",
                width: "100%",
              }}
            >
              {searchingInput && (
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ cursor: "pointer" }}
                  onClick={handleCleanInput}
                >
                  <path
                    d="M15 5.5L5 15.5M5 5.5L15 15.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <input
                onKeyUp={(e) =>
                  e.key === "Enter" && searchingInput && setStep("searched")
                }
                ref={searchingRef}
                type="text"
                autoFocus
                placeholder="جستجوی محصول"
                className="whitePlaceHolder"
                value={searchingInput}
                onChange={(e) => handleInputChange(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  width: "100%",
                  backgroundColor: "transparent",
                  color: "inherit",
                }}
              />
            </Box>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => searchingInput && setStep("searched")}
              style={{
                cursor: searchingInput ? "pointer" : "default",
                opacity: searchingInput ? 1 : 0.5,
              }}
            >
              <path
                d="M16.6666 10.5H3.33325M3.33325 10.5L8.33325 15.5M3.33325 10.5L8.33325 5.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            {/* already searcheds */}
            {searchHistory?.map((search) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "text.main",
                  gap: 2,
                }}
              >
                <Box
                  onClick={() => {
                    setSearchingInput(search);
                    if (searchingRef.current) {
                      searchingRef.current.focus();
                    }
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "text.main",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2501 5.50008V10.5001L13.5834 12.1667M18.5834 10.5001C18.5834 15.1025 14.8525 18.8334 10.2501 18.8334C5.64771 18.8334 1.91675 15.1025 1.91675 10.5001C1.91675 5.89771 5.64771 2.16675 10.2501 2.16675C14.8525 2.16675 18.5834 5.89771 18.5834 10.5001Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Typography sx={{ color: "inherit" }}>{search}</Typography>
                </Box>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    setSearchHistory(DeleteFromSearchHistory(search))
                  }
                >
                  <path
                    d="M15.25 5.5L5.25 15.5M5.25 5.5L15.25 15.5"
                    stroke="currentColor"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
            ))}
            {matchedTitles?.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "text.main",
                  gap:1.5
                }}
              >
                <Box
                onClick={()=>{setSearchingInput(item);setStep("searched")}}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "text.main",
                    width: "100%",
                    cursor:"pointer",
                  }}
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.75 18L14.125 14.375M16.0833 9.66667C16.0833 13.3486 13.0986 16.3333 9.41667 16.3333C5.73477 16.3333 2.75 13.3486 2.75 9.66667C2.75 5.98477 5.73477 3 9.41667 3C13.0986 3 16.0833 5.98477 16.0833 9.66667Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Typography sx={{ color: "inherit" }}>
                    {HighlightMatchedWords(item)}
                  </Typography>
                </Box>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    setMatchedTitles(
                      matchedTitles?.filter((title) => title !== item)
                    )
                  }
                >
                  <path
                    d="M15.25 5.5L5.25 15.5M5.25 5.5L15.25 15.5"
                    stroke="currentColor"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
            ))}
          </Box>
        </>
      )}
      {step === "searched" && (
        <>
          <Box
            className="scrollbarHidden"
            sx={{ height: products?.length! > 0  ? "calc(100% - 60px)" : "100%", overflow: "auto" }}
          >
            {/* search and close button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 6,
                mt: { sm: 3, xs: 0 },
              }}
            >
              <Typography
                sx={{
                  color: "text.main",
                  fontSize: "16px",
                  fontWeight: "900",
                }}
              >
                جستجو
              </Typography>
              <Button
                onClick={() => {
                  setIsDraweOpen(false);
                  setStep("search");
                }}
                disabled={exitButtonDisable}
                sx={{
                  borderRadius: "50px",
                  bgcolor: "background.element",
                  color: "text.main",
                  minWidth: "24px",
                  height: "35px",
                  boxShadow: "0px 1px 2px 0px #1018280D",
                  ":hover": {
                    bgcolor: "background.element",
                  },
                }}
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5.5L5 15.5M5 5.5L15 15.5"
                    stroke="currentColor"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </Box>
            <Typography
              sx={{
                color: "text.main",
                fontSize: "11px",
                fontWeight: "400",
                mb: products?.length! > 0 ? 3.5 : 0,
              }}
            >
              {`برای "${searchingInput}"`}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              {searchedLoading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <CircularProgress />
                </Box>
              ) : (
                (products?.length && products?.length > 0) ? products?.map((product, index) => (
                  <Link
                    href={`/shop/${product?.slug}`}
                    key={product?.id}
                    onClick={() => setIsDraweOpen(false)}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        p: "6px 8px",
                        color: "text.main",
                        bgcolor: "background.element",
                        borderRadius: "8px",
                        pb: 1,
                        width: "100%",
                        opacity: 0,
                        animation:
                          products?.length > 0
                            ? `searcResults 0.3s ease ${index * 0.2}s forwards`
                            : "none",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                        }}
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_SERVER}/${product?.brand?.icon}`}
                          width={22}
                          height={22}
                          alt={product?.title}
                          style={{ objectFit: "contain" }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                          }}
                        >
                          <Typography
                            sx={{
                              color: "text.main",
                              fontSize: "11px",
                              fontWeight: "400",
                            }}
                          >
                            {product?.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: "text.main",
                              fontSize: "10px",
                              fontWeight: "400",
                            }}
                          >
                            دسته بندی <span style={{color:"var(--mui-palette-primary-main)"}}>{product?.category?.title}</span>
                          </Typography>
                        </Box>
                      </Box>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 15L7.5 10L12.5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                  </Link>
                )) : <SearchEmptyState onTryAgain={()=> setStep("search")} />
              )}
            </Box>
          </Box>
          {products?.length! > 0 && <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "60px",
              pt: 2,
            }}
          >
            <Button
              onClick={() => {
                if (products?.length) {
                  setIsDraweOpen(false);
                  router.push(`/shop?q=${searchingInput}`);
                }
              }}
              sx={{
                borderRadius: "7px",
                bgcolor: "button.main",
                px: 3,
                py: 1.5,
                minWidth: "150px",
                height:"48.5px",
                color: "white",
                ":hover": {
                  bgcolor: "button.main",
                },
              }}
            >
              {searchedLoading ? (
                <BeatLoader color="white" size={10} />
              ) : (
                `مشاهده ${products?.length} نتیجه`
              )}
            </Button>
            <Typography
              onClick={() => {
                setStep("search");
                setSearchingInput("");
              }}
              sx={{
                color: "text.main",
                fontSize: "13px",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              جستجوی دوباره
            </Typography>
          </Box>}
        </>
      )}
    </>
  );
};

export default SearchPage;
