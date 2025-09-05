"use client";
import { fetchBrands, fetchCategories, fetchUserProducts } from "@/api/data";
import Search from "@/components/categories/filterDrawer/search";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const FilterMenuContent = ({ onClose }: { onClose: Function }) => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<
    "active" | "deactive" | "processing" | ""
  >("");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const getCategories = () => {
    fetchCategories()
      ?.then((res) => setCategories(res))
      .catch((err) =>
        console.error("error on fetching categories at order filters", err)
      );
  };

  const getBrands = () => {
    fetchBrands()
      ?.then((res) => setBrands(res?.results))
      .catch((err) =>
        console.error("error on fetching brands at order filters", err)
      );
  };

  useEffect(() => {
    getCategories();
    getBrands();
  }, []);

  const filter = () => {
    if (productCount) {
      const filteredCategories = selectedCategories?.join(",");
      const filteredBrands = selectedBrands?.join(",");
      // const filteredStatus = sta?.join(",");
      router.push(
        `/profile/products?category=${filteredCategories}&brand=${filteredBrands} ${
          selectedStatus === "processing"
            ? "&status=processing"
            : `&is_active=${
                selectedStatus === "active"
                  ? "true"
                  : selectedStatus === "deactive"
                  ? "false"
                  : ""
              }`
        }`
      );
      onClose();
    }
  };

  useEffect(() => {
    setLoading(true);
    const filteredCategories = selectedCategories?.join(",");
    const filteredBrands = selectedBrands?.join(",");
    const filteredStatus = selectedStatus === "processing" ? "processing" : "";
    const isActive =
      selectedStatus === "active"
        ? "true"
        : selectedStatus === "deactive"
        ? "false"
        : "";
    fetchUserProducts(
      filteredCategories,
      filteredBrands,
      filteredStatus,
      isActive
    )
      .then((res) => setProductCount(res?.count))
      .catch((err) => console.error("error fetching products", err))
      .finally(() => setLoading(false));
  }, [selectedCategories, selectedBrands, selectedStatus]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        gap: "10px",
      }}
    >
      {/* head of menu */}
      <Box>
        <Box
          sx={{
            width: "170px",
            height: "5px",
            bgcolor: "background.secondary",
            mx: "auto",
            mb: "10px",
            borderRadius: "8px",
            display: { md: "none", xs: "block" },
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: "20px",
            borderBottom: "0.5px solid",
            borderColor: "background.secondary",
          }}
        >
          <Typography sx={{ fontWeight: "900", color: "text.content" }}>
            فیلتر
          </Typography>
          <Box sx={{ color: "text.content" }}>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
              onClick={() => onClose()}
            >
              <path
                d="M15 5.5L5 15.5M5 5.5L15 15.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>
      </Box>
      {/* body of the menu */}
      <Box
        className="scrollbarHidden"
        sx={{
          width: "100%",
          height: "100%",
          overflowY: "scroll",
          pt: 4,
        }}
      >
        <Search
          withoutIcons
          title="دسته بندی"
          data={categories}
          selectedItems={selectedCategories}
          setSelectedItems={setSelectedCategories}
        />
        <Box sx={{ my: 3 }}>
          <Search
            title="برند"
            data={brands}
            selectedItems={selectedBrands}
            setSelectedItems={setSelectedBrands}
          />
        </Box>
        <Box>
          <Typography sx={{ color: "text.main", fontsize: "14px" }}>
            وضعیت
          </Typography>
          <Box sx={{ display: "flex", gap: "10px", mt: "10px" }}>
            <Button
              onClick={() =>
                setSelectedStatus(selectedStatus === "active" ? "" : "active")
              }
              sx={{
                fontSize: "14px",
                color:
                  selectedStatus === "active"
                    ? "background.main"
                    : "text.content",
                width: "100%",
                border: "0.5px solid",
                borderColor: "border.main",
                borderRadius: "5px",
                bgcolor:
                  selectedStatus === "active" ? "icon.main" : "transparent",
                ":hover": {
                  bgcolor:
                    selectedStatus === "active" ? "icon.main" : "transparent",
                },
              }}
            >
              فعال
            </Button>
            <Button
              onClick={() =>
                setSelectedStatus(
                  selectedStatus === "deactive" ? "" : "deactive"
                )
              }
              sx={{
                fontSize: "14px",
                color:
                  selectedStatus === "deactive"
                    ? "background.main"
                    : "text.content",
                width: "100%",
                border: "0.5px solid",
                borderColor: "border.main",
                borderRadius: "5px",
                bgcolor:
                  selectedStatus === "deactive" ? "icon.main" : "transparent",
                ":hover": {
                  bgcolor:
                    selectedStatus === "deactive" ? "icon.main" : "transparent",
                },
              }}
            >
              غیر فعال
            </Button>
            <Button
              onClick={() =>
                setSelectedStatus(
                  selectedStatus === "processing" ? "" : "processing"
                )
              }
              sx={{
                fontSize: "14px",
                color:
                  selectedStatus === "processing"
                    ? "background.main"
                    : "text.content",
                width: "100%",
                border: "0.5px solid",
                borderColor: "border.main",
                borderRadius: "5px",
                bgcolor:
                  selectedStatus === "processing" ? "icon.main" : "transparent",
                ":hover": {
                  bgcolor:
                    selectedStatus === "processing"
                      ? "icon.main"
                      : "transparent",
                },
              }}
            >
              در انتظار تایید
            </Button>
          </Box>
        </Box>
      </Box>
      {/* fixed box at bottom contains confirm button and number of results */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <Button
          onClick={filter}
          disabled={productCount === 0}
          sx={{
            fontsize: "14px",
            color: "white",
            bgcolor: "button.main",
            borderRadius: "5px",
            width: "50%",
            py: 1.5,
            ":hover": {
              bgcolor: "button.main",
            },
          }}
        >
          تایید
        </Button>
        <Typography sx={{ color: "text.content", fontSize: "14px", ml: 2 }}>
          {loading ? (
            <BeatLoader size={10} color="var(--mui-palette-text-content)" />
          ) : (
            `${productCount} نتیجه`
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default FilterMenuContent;
