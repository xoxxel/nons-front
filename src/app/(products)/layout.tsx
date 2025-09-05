import ShopLayout from "@/components/categories/shopLayout";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ShopLayout />
      {children}
    </div>
  );
}
