"use client";
import { Box } from "@mui/material";
import Select from "./select";
import { useEffect, useState } from "react";
import CategoryModel from "@/models/Category";
import { useRouter } from "next/navigation";
import { fetchCategories } from "@/api/data";

const SearchBar = () => {
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [dropDownOpenValue, setDropDownOpenValue] =
    useState<string|undefined>(undefined);
    const [searchValue,setSearchValue] = useState("")
    const router = useRouter()

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadCategories();
  }, []);

  const handleSearch = () => {
    router.push(`/products/?${dropDownOpenValue ? `category=${dropDownOpenValue}&` : ""}q=${searchValue}`)
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: "28px",
        bgcolor: "transparent",
        borderRadius: "7px",
        height: "38px",
        width: "50%",
        border: "1px solid",
        borderColor: "border.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          width: { lg: "65%", md: "58%" },
          color: "text.main",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: "pointer" }}
          onClick={handleSearch}
        >
          <path
            d="M17.5 17.5L13.875 13.875M9.16667 5C11.4679 5 13.3333 6.86548 13.3333 9.16667M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          type="text"
          placeholder="دنبال چی میگردی ؟"
          className="whitePlaceHolder"
          value={searchValue}
          onChange={(e)=> setSearchValue(e.target.value)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            color: "inherit",
            width: "100%",
          }}
        />
      </Box>
      <Select
        categories={categories}
        dropDownOpenValueSlug={dropDownOpenValue}
        setDropDownOpenValueSlug={setDropDownOpenValue}
      />
    </Box>
  );
};

export default SearchBar;
