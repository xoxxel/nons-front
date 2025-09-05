import {
  fetchCategoryBySlug,
  fetchProductsByCategory,
} from "@/api/data";
import Categories from "@/components/categories";
import { Box } from "@mui/material";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const category: MetaDataModel = await fetchCategoryBySlug(params?.category);
  return {
    title: category?.meta_title,
    description: category?.meta_description,
    keywords: category?.meta_keywords?.split(","),
  };
}

const CtaegoriesPage = async ({ params }: { params: { category: string } }) => {
  const products = await fetchProductsByCategory(params?.category);
  const category: MetaDataModel = await fetchCategoryBySlug(params?.category);
  if (!category) return notFound()
  return (
    <Box sx={{ mb: 2 }}>
      <Categories
        products={products}
        category={params?.category}
      />
    </Box>
  );
};

export default CtaegoriesPage;
