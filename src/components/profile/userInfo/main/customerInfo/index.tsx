"use client";
import { Box, Button, Typography } from "@mui/material";
import InfoButton from "../infoButton";
import RefundMethod from "./refundMethod";
import { useContext, useEffect, useState } from "react";
import UserModel from "@/models/User";
import axios from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";
import { UserContext } from "@/context/UserProvider";
import { fetchBrandTags } from "@/api/data";
import TagsSelect from "./tagsSelect";
import UsernameInput from "./username/page";
import NameInput from "./name";
import BirthdayInput from "./birthday";
import MobileNumberInput from "./mobileNumber";
import EmailInput from "./email";
import NationalCodeInput from "./nationalCode";

type FormDataType = {
  username: string;
  name: string;
  mobile: string;
  national_id: string;
  birthdate: Date | string;
  email: string;
  tag: number;
  return_option: "Wallet" | "Bank" | "";
};

const UserInformation = ({ user }: { user: UserModel }) => {
  const [tags, setTags] = useState<BrandModel["tags"]>([]);
  const [formData, setFormData] = useState<FormDataType>({
    username: "",
    name: "",
    mobile: "",
    national_id: "",
    birthdate: "",
    email: "",
    tag: -1,
    return_option: "",
  });

  useEffect(() => {
    fetchBrandTags()
      .then((res) => setTags(res))
      .catch((err) =>
        console.error("error fetching tags on user setting", err)
      );
  }, []);

  const { getUser } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setFormData({
        username: user?.username ?? "",
        name: user?.name ?? "",
        mobile: user?.number ?? "",
        national_id: user?.national_id ?? "",
        birthdate: user?.birthdate ?? "",
        email: user?.email ?? "",
        tag: user?.tag?.id ?? -1,
        return_option: user?.return_option ?? "",
      });
    }
  }, [user]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .patch(`${process.env.NEXT_PUBLIC_API}/user/user/`, formData, {
        headers: { Authorization: `Bearer ${Cookies.get("access")}` },
      })
      .then((res) => handleSuccessfulSubmit())
      .catch((err) => toast.error("مشکلی وجود دارد"));
  };

  const handleSuccessfulSubmit = () => {
    toast.success("اطلاعات شما بروزرسانی شد");
    getUser();
  };

  return (
    <Box
      sx={{
        display: { md: "flex", xs: "none" },
        flexDirection: "column",
        gap: 5,
      }}
    >
      {/* Username Field */}
      <UsernameInput
        value={formData?.username}
        disable={Boolean(user?.username)}
        onChange={(username) => setFormData({ ...formData, username })}
        onSuccess={getUser}
      />
      {/* name Field */}
      <NameInput
        value={formData?.name}
        onChange={(name) => setFormData({ ...formData, name })}
        onSuccess={getUser}
      />
      {/* Mobile Number Field */}
      <MobileNumberInput currentNumber={user?.number} onChange={getUser} />

      {/* National Code Field */}
      <NationalCodeInput
        value={formData?.national_id}
        onChange={(code) => setFormData({ ...formData, national_id: code })}
        getUser={getUser}
        disabled={user?.national_id ? true : false}
      />
      {/* Birthday Field */}
      <BirthdayInput value={user?.birthdate} />
      {/* Email Field */}
      <EmailInput currentEmail={user?.email} />
      {/* Refund Method Field */}
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1.5 }}>
          <Typography
            sx={{
              fontSize: { lg: "16px", xs: "14px" },
              fontWeight: "400",
              color: "text.main",
            }}
          >
            روش استرداد
          </Typography>
          <InfoButton />
        </Box>
        <Box sx={{ width: "70%" }}>
          <RefundMethod
            method={formData.return_option}
            onChange={(method) =>
              setFormData({ ...formData, return_option: method })
            }
          />
        </Box>
      </Box>

      {/* Tags Field */}
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1.5 }}>
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
            width: "70%",
          }}
        >
          <TagsSelect
            data={tags}
            value={formData?.tag}
            onChange={(tagId) =>
              setFormData((prev) => ({ ...prev, tag: tagId }))
            }
            prevValue={user?.tag?.id}
          />
        </Box>
      </Box>

      {/* <Button
        type="submit"
        sx={{
          fontSize: "16px",
          fontWeight: "600",
          bgcolor: "button.main",
          color: "white",
          minWidth: "218px",
          width: "218px",
          height: "57px",
          borderRadius: "5px",
          mt: 8,
          ":hover": {
            bgcolor: "button.main",
          },
        }}
      >
        ذخیره تغییرات
      </Button> */}
    </Box>
  );
};

export default UserInformation;
