"use server"
import { cookies } from "next/headers";

type MockDataType = {
  [key: string]: any;
};

// Mock data
const mockData: MockDataType = {
  "/settings/socials/": [
    { name: "Instagram", url: "https://instagram.com/mock" },
    { name: "Twitter", url: "https://twitter.com/mock" }
  ],
  "/settings/banner/": [
    { id: 1, title: "Welcome", image: "/images/banner.png" },
    { id: 2, title: "Special Offer", image: "/images/shopBanners.png" }
  ],
  "/products/": {
    results: [
      {
        id: 1,
        title: "Sample Product",
        slug: "sample-product",
        price: 99.99,
        image: "/images/game.jpg",
        description: "A sample product description"
      }
    ],
    count: 1
  },
  "/products/categories/": [
    {
      id: 1,
      title: "Games",
      slug: "games",
      image: "/images/game.jpg"
    },
    {
      id: 2,
      title: "Consoles",
      slug: "consoles",
      image: "/images/xbox.png"
    }
  ],
  "/products/platforms/": [
    { id: 1, name: "Steam", icon: "/images/steam.svg" },
    { id: 2, name: "Xbox", icon: "/images/xbox.png" }
  ],
  "/user/user/": {
    id: 1,
    username: "demo_user",
    email: "demo@example.com",
    avatar: "/images/avatar.jpg"
  },
  "/wallet/": {
    balance: 1000,
    currency: "USD"
  },
  "/chat/user-rooms/": {
    messages: []
  },
  "/settings/settings/": {
    site_name: "NONS",
    logo: "/images/logo.png",
    description: "Gaming marketplace"
  }
};

const apiGet = async (url: string, params?: Record<string, any>) => {
  // Remove query parameters from url for matching
  const baseUrl = url.split('?')[0];
  
  // If the exact URL exists in mock data, return it
  if (mockData[url]) {
    return mockData[url];
  }
  
  // For URLs with dynamic segments (like /products/123), return generic mock data
  if (baseUrl.startsWith('/products/') && baseUrl !== '/products/') {
    return mockData['/products/'].results[0];
  }
  
  // Return mock data for the base URL if it exists
  if (mockData[baseUrl]) {
    return mockData[baseUrl];
  }
  
  // Default fallback
  return { message: "Mock data not found", success: true };
};

const apiGetByToken = async (url: string, params?: Record<string, any>) => {
  const cookieStore = cookies();
  const token = cookieStore.get("access")?.value;

  // Use the same mock data system for authenticated endpoints
  return await apiGet(url, params);
};


export { apiGet, apiGetByToken };
