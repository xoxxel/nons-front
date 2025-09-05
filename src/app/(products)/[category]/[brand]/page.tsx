import { fetchBrandDetailsBySlug, fetchProductsByCategory } from "@/api/data";
import Categories from "@/components/categories";
import { Box } from "@mui/material";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { brand: string };
}): Promise<Metadata> {
  const brand: MetaDataModel = await fetchBrandDetailsBySlug(params?.brand);
  return {
    title: brand?.meta_title,
    description: brand?.meta_description,
    keywords: brand?.meta_keywords?.split(","),
  };
}

const BrandPage = async ({
  params,
}: {
  params: { category: string; brand: string };
}) => {
  const products = await fetchProductsByCategory(
    params?.category,
    params?.brand
  );
  const brand = await fetchBrandDetailsBySlug(params?.brand);
  if (!brand) return notFound()
  return (
    <Box sx={{ mb: 2 }}>
      <Categories
        products={products}
        category={params?.category}
        brand={brand}
      />
    </Box>
  );
};

export default BrandPage;
