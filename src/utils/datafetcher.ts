"use server"
import axios from "axios";
import { cookies } from "next/headers";

const apiGet = async (url: string, params?: Record<string, any>) => {
  const apiUrl = process.env.API;
  try {
    const response = await axios.get(apiUrl + url, { params });

    return response?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const apiGetByToken = async (url: string, params?: Record<string, any>) => {
  const cookieStore = cookies();
  const token = cookieStore.get("access")?.value;

  const apiUrl = process.env.API;

  if (token)
    try {
      const config = {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
        params: params,
      };
      const response = await axios.get(apiUrl + url, config);
      return response?.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
};


export { apiGet, apiGetByToken };
