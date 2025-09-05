"use client";
import Search from "@/components/categories/filterDrawer/search";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {
  fetchBrands,
  fetchCategories,
  fetchSellerOrders,
  fetchUserOrders,
} from "@/api/data";
import { useRouter, useSearchParams } from "next/navigation";
import OrderModel from "@/models/Order";
import { BeatLoader } from "react-spinners";

const Dates = ({
  value,
  openCalendar,
}: {
  value: string;
  openCalendar: () => void;
}) => {
  const spaceRemovedValue = value?.replaceAll(" ", "");
  const dates = spaceRemovedValue?.split("~");
  const length = dates?.length;

  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        mt: "10px",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        onClick={openCalendar}
        sx={{
          fontSize: "14px",
          color: "text.content",
          width: "100%",
          border: "0.5px solid",
          borderColor: "border.main",
          borderRadius: "5px",
          py: 1,
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        {length > 1 ? dates[0] : "-"}
      </Box>
      <Typography sx={{ fontSize: "14px", color: "text.content" }}>
        تا
      </Typography>
      <Box
        onClick={openCalendar}
        sx={{
          fontSize: "14px",
          color: "text.content",
          width: "100%",
          border: "0.5px solid",
          borderColor: "border.main",
          borderRadius: "5px",
          py: 1,
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        {dates[1] ?? "-"}
      </Box>
    </Box>
  );
};

const CustomArrow = ({
  direction,
  handleClick,
  disabled,
}: {
  direction?: "right" | "left";
  handleClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <Box
      onClick={handleClick}
      sx={{
        color: "text.main",
        rotate: direction === "right" ? "0deg" : "180deg",
        height: "24px",
        cursor: "pointer",
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 19L8 12L15 5" stroke="currentColor" stroke-width="2" />
      </svg>
    </Box>
  );
};

const OrderFilterMenuContent = ({ onClose }: { onClose: Function }) => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<
    OrderModel["status"] | ""
  >("");
  const [values, setValues] = useState([new DateObject({ calendar: persian })]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [productCount, setProductsCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const getCategories = () => {
    fetchCategories()
      ?.then((res) => setCategories(res))
      .catch((err) =>
        console.error("error on fetching categories at order filters", err)
      );
  };

  const getBrands = () => {
    fetchBrands({})
      ?.then((res) => setBrands(res?.results))
      .catch((err) =>
        console.error("error on fetching brands at order filters", err)
      );
  };

  useEffect(() => {
    getCategories();
    getBrands();
  }, []);

  useEffect(() => {
    setLoading(true);
    const allSearchParams = {
      category: selectedCategories?.join(",") || "",
      brand: selectedBrands?.join(",") || "",
      status: selectedStatus,
      min_date_created:
        values?.length > 1
          ? values?.[0]?.toString()?.replaceAll("/", "-") || ""
          : "",
      max_date_created: values?.[1]?.toString()?.replaceAll("/", "-") || "",
      type: searchParams?.get("type"),
    };
    const { type, ...filteredSearchParams } = allSearchParams;
    if (type === "sells") {
      fetchSellerOrders({ limit: "1", ...filteredSearchParams })
        ?.then((res) => setProductsCount(res?.count))
        .catch((err) => console.error("error fetching seller orders", err))
        .finally(() => setLoading(false));
    } else {
      fetchUserOrders({ limit: "1", ...filteredSearchParams })
        ?.then((res) => setProductsCount(res?.count))
        .catch((err) => console.error("error fetching customer orders", err))
        .finally(() => setLoading(false));
    }
  }, [selectedCategories, selectedBrands, selectedStatus, values]);

  // const sellerOrders = await fetchSellerOrders(searchParams);
  //   const customerOrders = await fetchUserOrders(searchParams);

  const filter = () => {
    if (productCount > 0) {
      const type = searchParams.get("type");
      const FilteredCategories = selectedCategories?.join(",");
      const FilteredBrands = selectedBrands?.join(",");
      const minDate = values?.length > 1 ? values?.[0]?.toString()?.replaceAll("/", "-") : "";
      const maxDate = values?.[1]?.toString()?.replaceAll("/", "-") || "";
      router.push(
        `/profile/orders?type=${
          type === "buys" ? "buys" : "sells"
        }&category=${FilteredCategories}&brand=${FilteredBrands}&status=${selectedStatus}&min_date_created=${minDate}&max_date_created=${maxDate}`
      );
      onClose();
    }
  };

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
          title="دسته بندی"
          data={categories}
          withoutIcons
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
              باز
            </Button>
            <Button
              onClick={() =>
                setSelectedStatus(
                  selectedStatus === "completed" ? "" : "completed"
                )
              }
              sx={{
                fontSize: "14px",
                color:
                  selectedStatus === "completed"
                    ? "background.main"
                    : "text.content",
                width: "100%",
                border: "0.5px solid",
                borderColor: "border.main",
                borderRadius: "5px",
                bgcolor:
                  selectedStatus === "completed" ? "icon.main" : "transparent",
                ":hover": {
                  bgcolor:
                    selectedStatus === "completed"
                      ? "icon.main"
                      : "transparent",
                },
              }}
            >
              تکمیل شده
            </Button>
            <Button
              onClick={() =>
                setSelectedStatus(
                  selectedStatus === "canceled" ? "" : "canceled"
                )
              }
              sx={{
                fontSize: "14px",
                color:
                  selectedStatus === "canceled"
                    ? "background.main"
                    : "text.content",
                width: "100%",
                border: "0.5px solid",
                borderColor: "border.main",
                borderRadius: "5px",
                bgcolor:
                  selectedStatus === "canceled" ? "icon.main" : "transparent",
                ":hover": {
                  bgcolor:
                    selectedStatus === "canceled" ? "icon.main" : "transparent",
                },
              }}
            >
              لغو شده
            </Button>
          </Box>
        </Box>
        <Box id="orederFilterDatepicker" sx={{ mt: 3 }}>
          <Typography sx={{ color: "text.main", fontsize: "14px" }}>
            تاریخ
          </Typography>
          <DatePicker
            value={values}
            onChange={setValues}
            render={(value, openCalendar) => (
              <Dates value={value} openCalendar={openCalendar} />
            )}
            arrow={false}
            digits={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]}
            renderButton={<CustomArrow />}
            range
            rangeHover
            calendar={persian}
            locale={persian_fa}
            style={{
              border: "none",
              boxShadow: "none",
              color: "inherit",
              fontSize: "16px",
              width: "100%",
            }}
          />
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
            <BeatLoader size={10} color="var(--mui-palette-text-main)" />
          ) : (
            `${productCount} نتیجه`
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderFilterMenuContent;
