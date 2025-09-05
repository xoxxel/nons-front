"use client";
import { Box, Typography } from "@mui/material";
import CupleInput from "./cupleInput";
import WelcomeMessage from "./welcomeMessage";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "@/context/UserProvider";
import { fetchBrandTags } from "@/api/data";
import axios from "axios";
import { toast } from "react-hot-toast";
import Cookies from "@/utils/cookie";
import TagsSelect from "../customerInfo/tagsSelect";
import ShopStatus from "./shopStatues";
import InfoButton from "../infoButton";

interface StatusType {
  title: string;
  id: number;
}

const SellerInformation = () => {
  const { user, getUser, setUser } = useContext(UserContext);
  const sellerStatus: StatusType[] = [
    { title: "فعال", id: 1 },
    { title: "تعطیل", id: 2 },
  ];

  const [tags, setTags] = useState<BrandModel["tags"]>([]);

  const [shopFaTitle, setShopFaTitle] = useState<string>(user?.shop?.title);
  const [shopEnTitle, setShopEnTitle] = useState<string>(user?.shop?.title_en);
  const [message, setMessage] = useState<string>(user?.shop?.welcome_message);
  const [tag, setTag] = useState<number>(-1);
  const [status, setStatus] = useState<number>(user?.shop?.is_active ? 1 : 2);

  const statusOnChange = (value: number) => {
    setStatus(value);
  };
  const messageOnChange = (value: string) => {
    setMessage(value);
  };
  const shopFaTitleOnChange = (value: string) => {
    setShopFaTitle(value);
  };
  const shopEnTitleOnChange = (value: string) => {
    setShopEnTitle(value);
  };

  useEffect(() => {
    fetchBrandTags()
      .then((res) => setTags(res))
      .catch((err) =>
        console.error("error on fetching platforms in add product", err)
      );
  }, []);

  useEffect(() => {
    setTag(user?.shop?.tags?.id || -1);
  }, [user]);

  const updateShopData = () => {
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_API}/user/update-shop/`,
        {
          title: shopFaTitle,
          title_en: shopEnTitle,
          welcome_message: message,
          is_active: status == 0 ? true : false,
          tags: tag,
        },
        { headers: { Authorization: `Bearer ${Cookies?.get("access")}` } }
      )
      .then(() => toast.success("اطلاعات فروشگاه شما با موفقیت بروز شد"))
      .catch((err) => {
        toast.error("خطا");
      });
  };

  return (
    <form className="desktopComponent">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {/* seller name field */}
        <CupleInput
          firstInputDisabled={Boolean(user?.shop?.title)}
          secondInputDisabled={Boolean(user?.shop?.title_en)}
          firstInput={{
            title: "نام فروشگاه",
            placeHolder: "نام فروشگاه فارسی",
            value: shopFaTitle,
            onChange: shopFaTitleOnChange,
          }}
          secondInput={{
            title: "",
            placeHolder: "نام فروشگاه انگلیسی",
            value: shopEnTitle,
            onChange: shopEnTitleOnChange,
          }}
          getUser={getUser}
        />
        {/* seller status field */}
        <ShopStatus
          onChange={statusOnChange}
          value={status}
          data={sellerStatus}
          title="وضعیت فروشگاه"
          user={user}
          onUpdate={() =>
            setUser((prev) => ({
              ...prev,
              shop: { ...prev?.shop, is_active: !prev?.shop?.is_active },
            }))
          }
        />
        {/* welcome message field */}
        <WelcomeMessage
          message={message}
          prevMessage={user?.shop?.welcome_message}
          onChange={messageOnChange}
        />
        {/* tags field */}
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignitems: "center", gap: 1, mt: 2 }}>
            <Typography
              sx={{
                fontSize: { lg: "16px", xs: "14px" },
                fontWeight: "400",
                color: "text.main",
              }}
            >
              تگ
            </Typography>
            <InfoButton />
          </Box>
          <Box
            sx={{
              width: { lg: "70%", md: "65%" },
            }}
          >
            <TagsSelect
              shop
              data={tags}
              value={tag}
              onChange={(tagId) => setTag(tagId)}
              prevValue={user?.tag?.id}
            />
          </Box>
        </Box>
      </Box>
      {/* <Button
        onClick={() => updateShopData()}
        sx={{
          minWidth: "218px",
          height: "56px",
          bgcolor: "button.main",
          color: "white",
          borderRadius: "8px",
          mt: 10,
          fontSize: "16px",
          fontWeight: "600",
          ":hover": {
            bgcolor: "button.main",
          },
        }}
      >
        ذخیره تغییرات
      </Button> */}
    </form>
  );
};

export default SellerInformation;
