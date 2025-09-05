"use client";
import { Box, Button, Container } from "@mui/material";
import AccordionInput from "../customerInfoMobile/AccordionInput";
import DropDown from "./dropDown";
import { useContext, useEffect, useState } from "react";
import TagsSelect from "../customerInfo/tagsSelect";
import { UserContext } from "@/context/UserProvider";
import axios from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";

interface StatusType {
  title: string;
  id: number;
}

type AccordionStatus = {
  title: boolean;
  welcome_message: boolean;
  is_active: boolean;
  tags: boolean;
};

const SellerInfoMobile = ({ tags }: { tags: BrandModel["tags"] }) => {
  const sellerStatus: StatusType[] = [
    { title: "فعال", id: 0 },
    { title: "تعطیل", id: 1 },
  ];
  const { user, getUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    title: "",
    title_en: "",
    welcome_message: "",
    is_active: -1,
    tags: -1,
  });

  const [accordionStatus, setAccordionStatus] = useState({
    title: false,
    welcome_message: false,
    is_active: false,
    tags: false,
  });

  const [loading, setLoading] = useState<
    "" | "title" | "status" | "welcome_message" | "tag"
  >("");

  useEffect(() => {
    setFormData({
      title: user?.shop?.title || "",
      title_en: user?.shop?.title_en || "",
      welcome_message: user?.shop?.welcome_message || "",
      is_active: user?.shop?.is_active ? 0 : 1 || -1,
      tags: user?.shop?.tags?.id || -1,
    });
  }, [user]);

  const updateTitles = () => {
    let data = {
      title: formData?.title || null,
      title_en: formData?.title_en || null,
    };
    // if (!user?.shop?.title) {
    //   data = { title_en: formData?.title_en };
    // } else if (!user?.shop?.title_en) {
    //   data = { title: formData?.title };
    // } else {
    //   data = { title: formData?.title, title_en: formData?.title_en };
    // }

    if (!Boolean(user?.shop?.title && user?.shop?.title_en)) {
      setLoading("title")
      axios
        .patch(`${process.env.NEXT_PUBLIC_API}/user/update-shop/`, data, {
          headers: { Authorization: `Bearer ${Cookies?.get("access")}` },
        })
        .then(() => {
          toast.success("نام فروشگاه شما با موفقیت بروز شد");
          setAccordionStatus((prev) => ({ ...prev, title: false }));
          setLoading("");
          getUser();
        })
        .catch((err) => {
          toast.error("خطا");
          setLoading("")
        }).finally(()=> setLoading(""));
    } else {
      setAccordionStatus((prev) => ({ ...prev, title: false }));
    }
  };

  const updateShopStatus = () => {
    const data = { is_active: formData?.is_active > 0 ? false : true };
    setLoading("status");
    axios
      .patch(`${process.env.NEXT_PUBLIC_API}/user/update-shop/`, data, {
        headers: { Authorization: `Bearer ${Cookies?.get("access")}` },
      })
      .then(() => {
        toast.success("وضعیت فروشگاه شما با موفقیت بروز شد");
        setAccordionStatus((prev) => ({ ...prev, is_active: false }));
        getUser();
        setLoading("");
      })
      .catch((err) => {
        toast.error("خطا");
        console.log(err);
      }).finally(()=> setLoading(""));
  };

  const updateWelcomeMessage = () => {
    const data = { welcome_message: formData?.welcome_message };
    setLoading("welcome_message")
    axios
      .patch(`${process.env.NEXT_PUBLIC_API}/user/update-shop/`, data, {
        headers: { Authorization: `Bearer ${Cookies?.get("access")}` },
      })
      .then(() => {
        toast.success("پیام خوش آمدگویی فروشگاه شما با موفقیت بروز شد");
        setAccordionStatus((prev) => ({ ...prev, welcome_message: false }));
        setLoading("");
        getUser();
      })
      .catch((err) => {
        toast.error("خطا");
        setLoading("")
      });
  };

  const updateTag = () => {
    const data = { tags: formData?.tags };
    setLoading("tag")
    axios
      .patch(`${process.env.NEXT_PUBLIC_API}/user/update-shop/`, data, {
        headers: { Authorization: `Bearer ${Cookies?.get("access")}` },
      })
      .then(() => {
        toast.success("مهارت کلیدی فروشگاه شما با موفقیت بروز شد");
        setAccordionStatus((prev) => ({ ...prev, tags: false }));
        setLoading("");
        getUser();
      })
      .catch((err) => {
        toast.error("خطا");
        setLoading("")
      });
  };

  const toggleAccordion = (key: keyof AccordionStatus) => {
    setAccordionStatus((prevState) => {
      // Reset all values to false
      const newState = Object.keys(prevState).reduce((acc, curr) => {
        acc[curr as keyof AccordionStatus] = false;
        return acc;
      }, {} as AccordionStatus);
      // Set the specified key to true
      newState[key] = true;
      return newState;
    });
  };

  return (
    <Container sx={{ mt: 4, display: { md: "none", xs: "block" } }}>
      <AccordionInput
        props={{
          title: "نام فروشگاه",
          disabled: Boolean(user?.shop?.title && user?.shop?.title_en),
          open: accordionStatus?.title,
          onOpen: () => toggleAccordion("title"),
          value: user?.shop?.title,
          onSubmit: () => updateTitles(),
          loading: loading ==="title",
          description:
            "یک نام برای فروشگاه خود تعیین کنید و توجه داشته باشید در آینده نمیتوانید آنرا تغییر دهید",
          // error: "این نام قبلا توسط فرد دیگری استفاده شده",
        }}
      >
        <Box
          sx={{
            width: "100%",
            border: "0.5px solid",
            borderColor: "button.main",
            borderRadius: "5px",
            overflow: "hidden",
            mt: "10px",
            color: "text.main",
          }}
        >
          <input
            type="text"
            value={formData?.title}
            disabled={Boolean(user?.shop?.title)}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="نام فارسی فروشگاه خود را بنویسید "
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "transparent",
              color: "inherit",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            border: "0.5px solid",
            borderColor: "button.main",
            borderRadius: "5px",
            overflow: "hidden",
            mt: "10px",
            color: "text.main",
          }}
        >
          <input
            type="text"
            placeholder="نام انگلیسی فروشگاه خود را بنویسید "
            disabled={Boolean(user?.shop?.title_en)}
            value={formData?.title_en}
            onChange={(e) =>
              setFormData({ ...formData, title_en: e.target.value })
            }
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "transparent",
              color: "inherit",
            }}
          />
        </Box>
      </AccordionInput>
      <AccordionInput
        props={{
          title: "وضعیت فروشگاه",
          disabled: false,
          open: accordionStatus?.is_active,
          onOpen: () => toggleAccordion("is_active"),
          value: user?.shop ? (user?.shop?.is_active ? "فعال" : "تعطیل") : "",
          onSubmit: () => updateShopStatus(),
          loading: loading ==="status",
          description:
            "فروشگاه باز است و آماده ارائه خدمات هستید و یا فروشگاه را تعطیل میکنید ؟",
        }}
      >
        <Box sx={{ mt: 1 }}>
          <DropDown
            data={sellerStatus}
            value={formData?.is_active}
            title="وضعیت فروشگاه"
            onChange={(statusId) =>
              setFormData({ ...formData, is_active: statusId })
            }
          />
        </Box>
      </AccordionInput>
      <AccordionInput
        props={{
          title: "پیام خوش آمد گویی",
          disabled: false,
          open: accordionStatus?.welcome_message,
          onOpen: () => toggleAccordion("welcome_message"),
          value: user?.shop?.welcome_message,
          onChange: (message) =>
            setFormData({ ...formData, welcome_message: message }),
          onSubmit: () => updateWelcomeMessage(),
          loading: loading ==="welcome_message",
          description:
            "این پیام اولین تاثیر را بر مشتریان میگذارد، با یک پیام دوستانه اعتماد مشتری را جلب کنید نرخ تعامل را افزایش دهید و فروش خود را بهبود بخشید",
        }}
      />
      <AccordionInput
        props={{
          title: "مهارت های کلیدی",
          disabled: false,
          open: accordionStatus?.tags,
          onOpen: () => toggleAccordion("tags"),
          value: user?.shop?.tags?.title,
          onSubmit: () => updateTag(),
          loading: loading ==="tag",
        }}
      >
        <Box sx={{ mt: 1 }}>
          <TagsSelect
            data={tags}
            value={formData?.tags}
            onChange={(tagId) => setFormData({ ...formData, tags: tagId })}
          />
        </Box>
      </AccordionInput>
    </Container>
  );
};

export default SellerInfoMobile;
