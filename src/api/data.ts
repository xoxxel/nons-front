"use server";
import { apiGet, apiGetByToken } from "@/utils/datafetcher";
import { cookies } from "next/headers";

export const fetChSocials = async () => {
  return await apiGet("/settings/socials/");
};

export const fetchMainPageBanners = async () => {
  return await apiGet("/settings/banner/");
};

export const fetchRecomendedSearchs = async () => {
  return await apiGet("/products/recomended-search/");
};

export const fetchBrandTags = async () => {
  return await apiGet("/products/tags/");
};

export const fetchProductsBySearch = async (search: string, limit?: number) => {
  return await apiGet(
    `/products/?search=${search}${limit ? `&limit=${limit}` : ""}`
  );
};

export const fetchProductsByCategory = async (
  category: string,
  brand?: string,
  page?: string | number
) => {
  return await apiGet(
    `/products/?category=${category}${brand ? `&brand_slug=${brand}` : ""}${
      page ? `&page=${page}` : ""
    }`
  );
};

export const fetchCategories = async () => {
  return await apiGet("/products/categories/");
};

export const fetchProductTitles = async () => {
  return await apiGet("/products/product-title/");
};

export const fetchCategoryBySlug = async (category: string) => {
  return await apiGet(`/products/categories/${category}`);
};

export const fetchBrandDetailsBySlug = async (slug: string) => {
  return await apiGet(`/products/brands/${slug}`);
};

export const fetchPlatforms = async () => {
  return await apiGet("/products/platforms/");
};

export const fetchGamerComments = async () => {
  return await apiGet("/settings/gamer-comments/");
};

export const fetchProductBySlug = async (slug: string) => {
  const cookieStore = cookies();
  const token = cookieStore.get("access")?.value;

  return  token ? await apiGetByToken(`/products/${slug}`) : await apiGet(`/products/${slug}`);
};

export const fetchBrands = async (filters?: {limit?:number,title?:string}) => {
  return apiGet(`/products/brands/`,filters)
};

export const fetchBrandsByCategorySlug = async ({
  categorySlug,
  search,
  page,
  limit,
}: {
  categorySlug: string;
  search?: string;
  page?: number;
  limit?: number;
}) => {
  return apiGet(
    `/products/brands/?category=${categorySlug}${search ? `&title=${search}` : ""}${page ? `&page=${page}` : ""}${
      limit ? `&limit=${limit}` : ""
    }`
  );
};

export const fetchReagons = async (filters?:{title?:string}) => {
  console.log(filters)
  return await apiGet(`/products/regions/?title=${filters?.title || ""}`);
};

export const fetchBrandsByCategory = async () => {
  return await apiGet(`/products/category-brand/`);
};

export const fetchProductWittAllFilters = async (filters: {
  search: string;
  categories: string;
  brands: string;
  platforms: string;
  lowestPrice: number;
  highestPrice: number;
  regions: string;
  hasGuarantee?: boolean;
  discounted?: boolean;
  autoSending?: boolean;
  page?: number | string;
  online_shops: boolean;
}) => {
  return await apiGet(
    `/products/?category=${filters?.categories}&brand=${
      filters?.brands
    }&search=${filters?.search}&platform=${filters?.platforms}&region=${
      filters?.regions
    }&min_price=${filters?.lowestPrice}&max_price=${
      filters?.highestPrice
    }&page=${filters?.page ?? 1}${
      filters?.hasGuarantee ? `&has_guarantee=true` : ""
    }${filters?.discounted ? `&has_discount=true` : ""}
      ${filters?.autoSending ? `&auto_send=true` : ""}
    `
  );
};

export const fetchShopProducts = async (
  shopID: number,
  search: string,
  inStock?: boolean
) => {
  return await apiGet(
    `/products/?shop=${shopID}${search ? `&search=${search}` : ""}${
      inStock ? `&in_stock=true` : ""
    }`
  );
};

export const fetchProductPriceFilter = async () => {
  return await apiGet(`/products/product-count/`);
};

export const fetchUserData = async () => {
  return await apiGetByToken(`/user/user/`);
};

export const fetchUserOrders = async (filters: {
  limit?: string;
  category?: string;
  brand?: string;
  status?: string;
  min_date_created?: string;
  max_date_created?: string;
}) => {
  return await apiGetByToken(`/cart/orders/`, filters);
};

export const fetchUserProducts = async (
  category?: string,
  brand?: string,
  status?: string,
  is_active?: string
) => {
  return await apiGetByToken(`/products/dashboard/get-shop-products/`, {
    category,
    brand,
    status,
    is_active,
  });
};

export const fetchUserProductBookmarks = async (limit?: number) => {
  return await apiGetByToken(
    `/products/user-product-bookmarks/${limit ? `?limit=${limit}` : ""}`
  );
};

export const fetchSettings = async () => {
  return await apiGet(`/settings/settings/`);
};

export const fetchWallet = async () => {
  return await apiGetByToken(`/wallet/`);
};

export const fetchSellerOrders = async (filters: {
  limit?: string;
  category?: string;
  brand?: string;
  status?: string;
  min_date_created?: string;
  max_date_created?: string;
}) => {
  return await apiGetByToken(`/cart/shop-orders/`, filters);
};

export const fetchSuggestedLinks = async () => {
  return await apiGet(`/settings/suggestions/`);
};

export const fetcCheckoutData = async () => {
  return await apiGetByToken(`/cart/orders/`);
};

export const fetchLastOrder = async () => {
  return await apiGetByToken(`/orders/last-order/`);
};

export const fetchWalletActivities = async () => {
  return await apiGetByToken(`/wallet/user-transactions/`);
};

export const fetchTickets = async (limit?: number) => {
  return await apiGetByToken(`/user/ticket/${limit ? `?limit=${limit}` : ""}`);
};

export const fetchNotifications = async () => {
  return await apiGetByToken(`/user/notifications/`);
};

export const fetchAccountTypes = async () => {
  return await apiGet(`/wallet/account-types/`);
};

export const fetchMessages = async ({ limit }: { limit?: number }) => {
  return await apiGetByToken(
    `/chat/user-rooms/${limit ? `?limit=${limit}` : ""}`
  );
};

export const fetchArbitrationMessages = async () => {
  return await apiGetByToken(`/chat/arbitration-chat-list`);
};

export const fetchTicketSubjects = async () => {
  return await apiGet(`/user/ticket/subjects/`);
};

export const fetchMessagesByRoomName = async ({
  roomName,
}: {
  roomName: string;
}) => {
  return await apiGetByToken(`/chat/user-rooms/${roomName}/`);
};

export const fetchUserAccount = async () => {
  return await apiGetByToken(`/wallet/account/detail/`);
};

export const fetchUserBoosts = async () => {
  return await apiGetByToken(`/products/dashboard/user-boost-products/`);
};

export const fetchTicketDetails = async (id: number) => {
  return await apiGetByToken(`/user/ticket/${id}`);
};

export const fetchRecentActivities = async ({
  limit,
  is_input,
  type,
}: {
  limit?: number;
  is_input?: string;
  type?: "transaction" | "order" | "";
}) => {
  return await apiGetByToken(
    `/user/recent-activities/${limit ? `?limit=${limit}` : ""}${
      is_input ? `&is_input=${is_input}` : ""
    }${type ? `&activity_type=${type}` : ""}`
  );
};

export const fetchShopDetailsByTitleEn = async (title: string) => {
  return await apiGet(`/user/get-shop/${title}`);
};

export const fetchShopProductsByTitleEn = async (title: string) => {
  return await apiGet(`/products/shop-products/${title}`);
};

export const fetchFaqTopics = async () => {
  return await apiGet(`/settings/faq/`);
};

export const fetchFaqsByTopicSlug = async ({ slug }: { slug: string }) => {
  return await apiGet(`/settings/faq/${slug}`);
};

export const fetchProductCodes = async (slug: string) => {
  return await apiGetByToken(`/products/dashboard/get-activation-code/${slug}`);
};
