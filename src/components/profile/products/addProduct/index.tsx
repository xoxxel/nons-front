"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import CopyProductsContent from "./copyProductsContent";
import { useEffect, useState } from "react";
import ProfileDropDown from "../../userInfo/main/sellerInfo/profileDropDown";
import ProductTitle from "./productTitle";
import ProductPrice from "./productPrice";
import DeliveryMethod from "./deliveryMethod";
import ProductsBrand from "./productsBrand";
import { fetchProductBySlug } from "@/api/data";
import CategoryModel from "@/models/Category";
import ProductsPlatform from "./productsPlatform";
import ProductsRegion from "./productsRegion";
import Productgallery from "./productGallery";
import ProductDescribtion from "./productDiscribtion";
import ProductPublishment from "./productPublishment";
import axios from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";
import ProductModel from "@/models/Product";
import ProductDetailsModel from "@/models/productDetails";
import AdditionalInformation from "./additionalInformation";
import { BeatLoader } from "react-spinners";
import { useRouter } from "next/navigation";

type ProductAttributesType = {
  brand: number;
  category: number;
  title: string;
  price: string;
  auto_send: boolean;
  platform: number[];
  region: number[];
  image_list: number[];
  code_list: string[];
  activation_message: string;
  description: string;
  is_active: boolean;
};

type ActivatiionCodeType = {
  id: number;
  code: string;
  product: number;
};

type AdditionalInformationsType = {
  related_products: number[];
  instructions: string;
  guarantee_days: number;
  guarantee_description: string;
};

const AddProduct = ({
  categories,
  platforms,
  regions,
  defaultProduct,
  defaultProductCodes,
  productEditing
}: {
  categories: CategoryModel[];
  platforms: platformModel[];
  regions: RegionModel[];
  defaultProduct?: ProductDetailsModel;
  defaultProductCodes?: ActivatiionCodeType[];
  productEditing: boolean
}) => {
  const [wantToUseCopyContent, setWanttoUseCopyContent] = useState(false);
  const [productForCopy, setProductForCopy] = useState<ProductDetailsModel>(
    {} as ProductDetailsModel
  );
  const [selectedPlatforms, setSelectedPlatforms] = useState<number[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [alreadyUploadedFiles, setAlreadyUploadedFiles] = useState<
    ProductDetailsModel["gallery"] | null
  >(null);
  const [deActiveLoading, setDeActiveLoading] = useState(false);
  const [errors, seterrors] = useState<string[]>([]);
  const [productAttributes, setProductAttributes] =
    useState<ProductAttributesType>({
      brand: -1,
      category: -1,
      title: "",
      price: "",
      auto_send: false,
      platform: [],
      region: [],
      image_list: [],
      code_list: [],
      activation_message: "",
      description: "",
      is_active: true,
    });
  const [additionalInformations, setAdditionalInformations] =
    useState<AdditionalInformationsType>({} as AdditionalInformationsType);
  const router = useRouter()

  const handleCategoryChange = (category: number) => {
    setProductAttributes((prev) => ({ ...prev, category: category }));
  };

  const createProduct = () => {
    handleSubmitErrors();
    if (!handleSubmitErrors()) {
      setLoading(true);
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API}/products/dashboard/create-products/`,
          {
            ...productAttributes,
            price: parseInt(productAttributes?.price),
            platform: selectedPlatforms,
            region: selectedRegions,
            ...additionalInformations
          },
          { headers: { Authorization: `Bearer ${Cookies?.get("access")}` } }
        )
        .then((res) => {
          toast.success("محصول با موفقیت اضافه شد");
          router.push("/profile/products");
        })
        .catch((err) => toast.error("مشکلی وجود دارد"))
        .finally(() => setLoading(false));
    }
  };

  const handleUpdateProduct = () => {
    handleSubmitErrors();
    if (!handleSubmitErrors()) {
      setLoading(true);
      axios
        .put(
          `${process.env.NEXT_PUBLIC_API}/products/dashboard/updare-products/${defaultProduct?.slug}`,
          {
            ...productAttributes,
            price: parseInt(productAttributes?.price),
            platform: selectedPlatforms,
            region: selectedRegions,
            ...AdditionalInformation
          },
          { headers: { Authorization: `Bearer ${Cookies?.get("access")}` } }
        )
        .then((res) => {
          toast.success("محصول با موفقیت ویرایش شد");
          router.push("/profile/products");
        })
        .catch((err) => toast.error("مشکلی وجود دارد"))
        .finally(() => setLoading(false));
    }
  };

  const handleCopyFromAnotherProduct = (product: ProductModel) => {
    const productInfo = fetchProductBySlug(product?.slug)
      .then((res) => setProductForCopy(res))
      .catch((err) =>
        toast.error("مشکلی در دریافت اطلاعات محصول مورد نظر وجود دارد")
      );
  };

  useEffect(() => {
    const mediaIds: number[] | undefined =
      productForCopy?.gallery?.map((media: { id: number }) => media?.id) || [];
    const copiedData = {
      brand: productForCopy?.brand?.id ?? -1,
      category: productForCopy?.category?.id ?? -1,
      title: productForCopy?.title ?? "",
      price: `${productForCopy?.price}`,
      auto_send: productForCopy?.auto_send,
      platform: [],
      region: [],
      image_list: mediaIds ?? [],
      code_list: [],
      activation_message: productForCopy?.activation_message,
      description: "",
      is_active: true,
      instructions: productForCopy?.instructions ?? "",
    };
    const chosenProductPlatforms =
      productForCopy?.platform?.map((platform) => platform?.id) || [];
    const chosenProductRegions =
      productForCopy?.region?.map((region) => region?.id) || [];
    setProductAttributes(copiedData);
    setSelectedPlatforms(chosenProductPlatforms);
    setSelectedRegions(chosenProductRegions);
  }, [productForCopy]);

  useEffect(() => {
    if (defaultProduct) {
      const mediaIds: number[] | undefined =
        defaultProduct?.gallery?.map((media: { id: number }) => media?.id) ||
        [];
      const copiedData = {
        brand: defaultProduct?.brand?.id ?? -1,
        category: defaultProduct?.category?.id ?? -1,
        title: defaultProduct?.title ?? "",
        price: `${defaultProduct?.price}`,
        auto_send: defaultProduct?.auto_send,
        platform: [],
        region: [],
        image_list: mediaIds ?? [],
        code_list: [],
        activation_message: defaultProduct?.activation_message ?? "",
        description: "",
        is_active: true,
        instructions: defaultProduct?.instructions ?? "",
      };
      const chosenProductPlatforms =
        defaultProduct?.platform?.map((platform) => platform?.id) || [];
      const chosenProductRegions =
        defaultProduct?.region?.map((region) => region?.id) || [];
      setProductAttributes(copiedData);
      setSelectedPlatforms(chosenProductPlatforms);
      setSelectedRegions(chosenProductRegions);
    }
  }, [defaultProduct]);

  const handleClear = () => {
    setProductAttributes({
      brand: -1,
      category: -1,
      title: "",
      price: "",
      auto_send: false,
      platform: [],
      region: [],
      image_list: [],
      code_list: [],
      activation_message: "",
      description: "",
      is_active: true,
    });
    setSelectedPlatforms([]);
    setSelectedRegions([]);
    setProductForCopy({} as ProductDetailsModel);
    setAlreadyUploadedFiles([]);
  };

  const handleProductDeactive = () => {
    setDeActiveLoading(true);
    axios
      .put(
        `${process.env.NEXT_PUBLIC_API}/products/dashboard/updare-products/${defaultProduct?.slug}`,
        {
          ...productAttributes,
          price: parseInt(productAttributes?.price),
          platform: selectedPlatforms,
          region: selectedRegions,
          is_active: false,
        },
        { headers: { Authorization: `Bearer ${Cookies?.get("access")}` } }
      )
      .then((res) => { toast.success("محصول با موفقیت حذف شد"); router.push("/profile/products"); })
      .catch((err) => toast.error("مشکلی وجود دارد"))
      .finally(() => { setDeActiveLoading(false); });
  };

  useEffect(() => {
    if (productForCopy?.gallery?.length > 0) {
      setAlreadyUploadedFiles(productForCopy?.gallery);
    } else if (defaultProduct && defaultProduct?.gallery?.length > 0) {
      setAlreadyUploadedFiles(defaultProduct?.gallery);
    }
  }, [productForCopy, defaultProduct]);

  const handleSubmitErrors = () => {
    const errorsArray: string[] = [];
    if (productAttributes?.category <= 0) {
      errorsArray?.push("یک دسته‌بندی برای محصول انتخاب کنید.");
    }
    if (productAttributes?.brand <= 0) {
      errorsArray?.push("یک برند برای محصول انتخاب کنید.");
    }
    if (!productAttributes?.title) {
      errorsArray?.push("عنوان محصول ضروری است.");
    }
    if (!productAttributes?.price) {
      errorsArray?.push("قیمت محصول ضروری است.");
    }
    if (
      productAttributes?.auto_send &&
      productAttributes?.code_list?.length === 0
    ) {
      errorsArray?.push("حداقل یک کد فعالسازی وارد کنید.");
    }
    seterrors(errorsArray);
    return errorsArray.length > 0;
  };

  return (
    <Box sx={{ mb: { md: 0, xs: 15 } }}>
      <Typography
        sx={{
          color: "text.main",
          fontWeight: "600",
          my: 3,
          display: { md: "block", xs: "none" },
        }}
      >
        افزودن محصول
      </Typography>
      <Container
        sx={{
          width: "100%",
          p: { lg: "30px 25px", md: "15px 12px" },
          bgcolor: { xs: "transparent", md: "background.element" },
          borderRadius: { xs: "0px", md: "12px" },
          border: "0.5px solid",
          borderColor: { xs: "transparent", md: "border.secondary" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* copy product content and reset button at top */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignitems: "center",
              mt: { xs: 3, md: 0 },
            }}
          >
            <Typography
              sx={{
                fontSize: { md: "16px", xs: "13px" },
                fontWeight: "900",
                color: "text.main",
              }}
            >
              کپی محتوای محصول
            </Typography>
            <Box
              sx={{
                fontWeight: "400",
                fontSize: { md: "16px", xs: "13px" },
                color: "#06D6A0",
                border: "0.5px solid",
                borderColor: "#06D6A0",
                px: 0.5,
                borderRadius: "5px",
              }}
            >
              اختیاری
            </Box>
          </Box>
          {productForCopy?.id && (
            <Box onClick={handleClear} sx={{ cursor: "pointer" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C2 10 4.00498 7.26822 5.63384 5.63824C7.26269 4.00827 9.5136 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.89691 21 4.43511 18.2543 3.35177 14.5M2 10V4M2 10H8"
                  stroke="#848686"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          )}
        </Box>
        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "end", mt: 4 }}
        >
          <Box sx={{ width: { lg: "70%", md: "65%", xs: "100%" } }}>
            {wantToUseCopyContent ? (
              <CopyProductsContent
                onChange={(product: ProductModel) =>
                  handleCopyFromAnotherProduct(product)
                }
                product={productForCopy?.id}
              />
            ) : (
              <Box>
                <Typography
                  onClick={() => alert(productAttributes?.price)}
                  sx={{
                    fontSize: { md: "16px", xs: "13px" },
                    fontWeight: "400",
                    color: "text.secondary",
                  }}
                >
                  با استفاده از این گزینه میتوانید محتوای محصولاتی که قبلا اضافه
                  کرده اید را کپی کرده و برای محصول جدید خود استفاده کنید
                </Typography>
                <Button
                  onClick={() => setWanttoUseCopyContent(true)}
                  sx={{
                    color: "white",
                    bgcolor: "black.main",
                    borderRadius: "5px",
                    px: 3,
                    py: 1,
                    fontSize: { md: "14px", xs: "13px" },
                    fontWeight: "600",
                    mt: 3,
                    ":hover": {
                      bgcolor: "black.main",
                    },
                  }}
                >
                  انتخاب محصول
                </Button>
              </Box>
            )}
          </Box>
        </Box>
        {/* categories  */}
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "20px", mt: 4 }}
        >
          <ProfileDropDown
            data={categories}
            title="دسته بندی"
            value={productAttributes?.category}
            onChange={handleCategoryChange}
          />
          <ProductsBrand
            category={
              categories?.find(
                (item) => item?.id === productAttributes?.category
              )?.slug ?? ""
            }
            value={productAttributes?.brand}
            onChange={(brandID) => setProductAttributes((prev) => ({ ...prev, brand: brandID }))}
          />
          <ProductTitle
            value={productAttributes?.title}
            onChange={(title: string) =>
              setProductAttributes((prev) => ({ ...prev, title }))
            }
          />
          <ProductPrice
            value={productAttributes?.price}
            onChange={(price: string) =>
              setProductAttributes((prev) => ({ ...prev, price }))
            }
          />
          <ProductsPlatform
            platforms={platforms}
            values={selectedPlatforms}
            setValues={setSelectedPlatforms}
          />
          <ProductsRegion
            regions={regions}
            values={selectedRegions}
            setValues={setSelectedRegions}
          />
          <DeliveryMethod
            value={productAttributes?.auto_send}
            onChange={(method: boolean) =>
              setProductAttributes((prev) => ({
                ...prev,
                auto_send: method,
              }))
            }
            codes={productAttributes?.code_list}
            alreadyExistedCodes={defaultProductCodes}
            message={productAttributes?.activation_message}
            onMessageChange={(message) =>
              setProductAttributes((prev) => ({
                ...prev,
                activation_message: message,
              }))
            }
            onCodeAdd={(code) =>
              setProductAttributes((prev) => ({
                ...prev,
                code_list: [...prev?.code_list, code],
              }))
            }
            onCodeRemove={(code) =>
              setProductAttributes((prev) => ({
                ...prev,
                code_list: prev?.code_list?.filter((item) => item !== code),
              }))
            }
          />
          <Productgallery
            setProductAttributes={setProductAttributes}
            alreadyUploadedMedia={alreadyUploadedFiles}
            setAlreadyUploadedMedia={setAlreadyUploadedFiles}
          />
          <ProductDescribtion />
          <ProductPublishment
            value={
              defaultProduct
                ? defaultProduct?.is_active
                : productAttributes?.is_active
            }
            onChange={(state: boolean) =>
              setProductAttributes((prev) => ({
                ...prev,
                is_active: state,
              }))
            }
          />
        </Box>
        <AdditionalInformation
          data={additionalInformations}
          setData={setAdditionalInformations}
        />
        {errors?.length > 0 && (
          <Box
            sx={{
              border: "1px solid",
              width: "100%",
              borderColor: "badgeText.danger",
              bgcolor: "badge.danger",
              py: 2,
              px: 4,
              borderRadius: "8px",
              mt: 3,
            }}
          >
            <ul>
              {errors?.map((error) => (
                <li style={{ color: "var(--mui-palette-badgeText-danger)" }}>
                  <Typography sx={{ my: 1 }}>{error}</Typography>
                </li>
              ))}
            </ul>
          </Box>
        )}
        <Box sx={{ display: "flex", alignItems: "center", mt: 6 }}>
          <Button
            onClick={defaultProduct ? handleUpdateProduct : createProduct}
            sx={{
              color: "white",
              bgcolor: "button.main",
              width: { md: "211px", xs: "100%" },
              height: "56px",
              borderRadius: "5px",
              fontWeight: "600",
              ":hover": {
                bgcolor: "button.main",
              },
            }}
          >
            {loading ? <BeatLoader size={10} color="white" /> : (productEditing ? "ویرایش" : "ثبت")}
          </Button>
          {defaultProduct && (
            <Button
              onClick={handleProductDeactive}
              sx={{
                color: "text.main",
                fontWeight: "600",
                fontSize: "16px",
                width: { md: "211px", xs: "100%" },
                height: "56px",
                px: 8,
                mr: 1,
                display: { md: "block", xs: "none" },
              }}
            >
              {deActiveLoading ? <BeatLoader size={10} color="white" /> : "حذف"}
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default AddProduct;
