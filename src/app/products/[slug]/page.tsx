import { fetchProductBySlug } from "@/api/data";
import ProductDetail from "@/components/products/productDetail";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const product = await fetchProductBySlug(params.slug);

  unstable_noStore();
  return {
    title: product?.meta_title || product?.title,
    keywords: product?.meta_keywords,
    description: product?.meta_description,
  };
}

const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
  const product = await fetchProductBySlug(params?.slug);
  if (!product) notFound()
  return <ProductDetail product={product} />;

};

export default ProductDetailPage;
