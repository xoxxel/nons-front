"use client";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SupportMenu from "../supportMenu";
import DropDown from "./dropDown";
import axios from "axios";
import Cookies from "@/utils/cookie";
import QuickAccess from "../quickAccess";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";

interface FormDataType {
  order_code: string;
  email: string;
  subject: number;
  subject_plus: number;
  status_user: number;
  file: File | null;
  text: string;
}

interface SubjectType {
  id: number;
  title: string;
  subjects: {
    id: number;
    title: string;
    subject_type: "none" | "buyer" | "seller";
  }[];
}

const CreateTicket = ({ subjects }: { subjects: SubjectType[] }) => {
  const [formData, setFormData] = useState<FormDataType>({
    order_code: "",
    email: "",
    subject: -1,
    subject_plus: -1,
    status_user: -1,
    file: null,
    text: "", // Initialize this field
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isUserRoleImportant, setIsUserRoleImportant] = useState(false);
  const [subjectItems, setSubjectItems] = useState<SubjectType["subjects"]>([]);
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );

  const userRoles = [
    { title: "خریدار", id: 1 },
    { title: "فروشنده", id: 2 },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prevData) => ({
      ...prevData,
      file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e?.preventDefault();
    if (handleErrors()) {
      setLoading(true);
      e.preventDefault();
      const d = {
        ...formData,
        status_user: formData?.status_user === 1 ? "buyer" : "seller",
      };
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/user/ticket/`, d, {
          headers: { Authorization: `Bearer ${Cookies.get("access")}` },
        })
        .then((res) => handleSendMessage(res?.data?.id))
        .catch((err) => {
          toast.error("مشکلی وجود دارد");
          setLoading(false);
        });
    }
  };

  const handleSendMessage = (id: number) => {
    const data = new FormData();
    data.append("text", formData?.text);
    data.append("ticket", id?.toString());

    if (formData?.file) {
      data.append("file", formData?.file);
    }

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/user/ticket/create-message/`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        toast.success(
          "درخواست شما با موفقیت ارسال شد منتظر پاسخ پشتیبان باشید"
        );
        router.push(`/profile/support/${res?.data?.ticket}`);
      })
      .catch((err) => console.error("error sending ticket message:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (formData.subject > 0) {
      setFormData({ ...formData, subject_plus: -1, status_user: -1 });
      const selectedSubject = subjects?.find(
        (s) => formData?.subject === s?.id
      );
      if (selectedSubject) {
        const subjectItemsStatus = selectedSubject?.subjects?.map(
          (subject) => subject?.subject_type
        );
        if (
          subjectItemsStatus?.includes("buyer") &&
          subjectItemsStatus?.includes("seller")
        ) {
          setIsUserRoleImportant(true);
        } else {
          setIsUserRoleImportant(false);
        }
      }
    }
  }, [formData.subject]);

  useEffect(() => {
    if (formData.subject > 0) {
      const items =
        subjects?.find((s) => formData?.subject === s?.id)?.subjects || [];
      if (isUserRoleImportant) {
        if (formData?.status_user > 0) {
          const itemsByRole = items?.filter((item) =>
            formData?.status_user === 1
              ? item?.subject_type === "buyer" || item?.subject_type === "none"
              : item?.subject_type === "seller" || item?.subject_type === "none"
          );
          setSubjectItems(itemsByRole);
        } else {
          setSubjectItems([]);
        }
      } else {
        setSubjectItems(items);
      }
    }
  }, [formData.subject, isUserRoleImportant, formData.status_user]);

  const handleErrors = () => {
    if (formData?.subject < 1) {
      toast.error("یک موضوع انتخاب کنید");
      return 0;
    } else if (formData?.subject === 1 && formData?.order_code === "") {
      toast.error("کد سفارش مورد نظر را وارد کنید");
      return 0;
    } else if (isUserRoleImportant && formData?.status_user < 1) {
      toast.error("نقش کاربری خود را انتخاب کنید");
      return 0;
    } else if (subjectItems?.length > 0 && formData?.subject_plus < 1) {
      toast.error("یک زیر موضوع انتخاب کنید");
      return 0;
    } else if (!formData?.text) {
      toast.error("پیام خود را بنویسید");
      return 0;
    } else if (!formData?.email) {
      toast.error("ایمیل خود را وارد کنید");
      return 0;
    } else if (!emailRegex.test(formData?.email)) {
      toast.error("ایمیل صحیح وارد کنید");
      return 0;
    } else {
      return 1;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ width: "100%" }}>
        <QuickAccess />
        <Box
          sx={{
            mt: { xs: 0, md: 5 },
          }}
        >
          <Typography
            sx={{
              color: "text.main",
              fontSize: "29px",
              fontWeight: "600",
              mt: 5,
              display: { xs: "none", md: "flex" },
            }}
          >
            پشتیبانی
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              mt: 1,
              mb: 5,
            }}
          >
            <Link href="/profile">
              <Typography sx={{ color: "button.main", fontWeight: "600" }}>
                profile
              </Typography>
            </Link>
            <Typography sx={{ color: "text.main" }}>/</Typography>
            <Link href="/support">
              <Typography sx={{ color: "text.secondary", fontWeight: "500" }}>
                support
              </Typography>
            </Link>
            <Typography sx={{ color: "text.main" }}>/</Typography>
            <Typography sx={{ color: "text.secondary", fontWeight: "500" }}>
              create-ticket
            </Typography>
          </Box>
          <Grid
            container
            spacing={{ lg: 3, md: 1.5 }}
            sx={{ maxWidth: "100%" }}
          >
            <Grid
              item
              lg={4}
              md={4.5}
              xs={12}
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              <SupportMenu />
            </Grid>
            <Grid item lg={8} md={7.5} xs={12}>
              <Box>
                <Box
                  sx={{
                    width: "100%",
                    py: 3,
                    px: 2,
                    bgcolor: { xs: "transparent", md: "background.element" },
                    border: "0.5px solid",
                    borderColor: { xs: "transparent", md: "border.secondary" },
                    borderRadius: { xs: "0px", md: "12px" },
                    mb: { xs: "150px", md: "0px" },
                  }}
                >
                  <Stack direction="column" sx={{ gap: "20px" }}>
                    <DropDown
                      title="موضوع تیکت"
                      placeholder="انتخاب موضوع تیکت"
                      data={subjects}
                      value={formData.subject}
                      onChange={(subject) =>
                        setFormData((prev) => ({ ...prev, subject }))
                      }
                    />
                    {/* order code */}
                    {formData?.subject === 1 && (
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "start",
                          flexDirection: { xs: "column", md: "row" },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mt: "12.5px",
                            pl: 1,
                          }}
                        >
                          <label htmlFor="number_order">
                            <Typography
                              sx={{
                                color: "text.main",
                                fontSize: {
                                  xs: "13px",
                                  md: "14px",
                                  lg: "16px",
                                },
                                fontWeight: "400",
                                cursor: "pointer",
                                mb: { xs: "10px", md: "0px" },
                              }}
                            >
                              شماره سفارش
                            </Typography>
                          </label>
                        </Box>
                        <Box
                          sx={{ width: { lg: "60%", md: "45%", xs: "100%" } }}
                        >
                          <Box
                            sx={{
                              width: "100%",
                              border: "0.5px solid",
                              borderColor: "border.main",
                              borderRadius: "5px",
                              overflow: "hidden",
                              display: "flex",
                              alignItems: "center",
                              color: "text.secondary",
                              fontSize: "13px",
                              fontWeight: "400",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                paddingInlineStart: 1.5,
                                color: "icon.main",
                              }}
                            >
                              <svg
                                width="18"
                                height="20"
                                viewBox="0 0 20 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 1.4996V10.9996M10 10.9996L18.5 6.27731M10 10.9996L1.5 6.27731M10 10.9996V20.4996M18.5 15.7218L10.777 11.4313C10.4934 11.2737 10.3516 11.1949 10.2015 11.1641C10.0685 11.1367 9.93146 11.1367 9.79855 11.1641C9.64838 11.1949 9.50658 11.2737 9.22297 11.4313L1.5 15.7218M19 15.0582V6.94104C19 6.5984 19 6.42708 18.9495 6.27428C18.9049 6.1391 18.8318 6.01502 18.7354 5.91033C18.6263 5.79199 18.4766 5.70879 18.177 5.54239L10.777 1.43128C10.4934 1.27372 10.3516 1.19494 10.2015 1.16406C10.0685 1.13672 9.93146 1.13672 9.79855 1.16406C9.64838 1.19494 9.50658 1.27372 9.22297 1.43128L1.82297 5.54239C1.52345 5.70879 1.37369 5.792 1.26463 5.91033C1.16816 6.01502 1.09515 6.1391 1.05048 6.27428C1 6.42708 1 6.5984 1 6.94104V15.0582C1 15.4008 1 15.5721 1.05048 15.7249C1.09515 15.8601 1.16816 15.9842 1.26463 16.0889C1.37369 16.2072 1.52345 16.2904 1.82297 16.4568L9.22297 20.5679C9.50658 20.7255 9.64838 20.8042 9.79855 20.8351C9.93146 20.8625 10.0685 20.8625 10.2015 20.8351C10.3516 20.8042 10.4934 20.7255 10.777 20.5679L18.177 16.4568C18.4766 16.2904 18.6263 16.2072 18.7354 16.0889C18.8318 15.9842 18.9049 15.8601 18.9495 15.7249C19 15.5721 19 15.4008 19 15.0582Z"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Box>
                            <input
                              type="number"
                              id="number_order"
                              name="order_code"
                              value={formData.order_code}
                              onChange={handleChange}
                              placeholder="شماره سفارش را وارد کنید"
                              style={{
                                width: "100%",
                                height: "100%",
                                padding: "15px 10px",
                                border: "0",
                                outline: "0",
                                borderRadius: "5px",
                                background: "transparent",
                                fontSize: "inherit",
                                fontWeight: "inherit",
                                color: "inherit",
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    )}
                    {/* seller or customer */}
                    {isUserRoleImportant && (
                      <DropDown
                        title={"فروشنده هستید یا خریدار ؟"}
                        placeholder="انتخاب نقش کاربری"
                        data={userRoles}
                        value={formData.status_user}
                        onChange={(status_user) =>
                          setFormData((prev) => ({ ...prev, status_user }))
                        }
                      />
                    )}
                    {/* select subject items */}
                    {subjectItems?.length > 0 && (
                      <DropDown
                        title="موضوع"
                        placeholder="انتخاب موضوع"
                        data={subjectItems}
                        value={formData?.subject_plus}
                        onChange={(subject) =>
                          setFormData((prev) => ({
                            ...prev,
                            subject_plus: subject,
                          }))
                        }
                      />
                    )}
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "start",
                        flexDirection: { xs: "column", md: "row" },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mt: "12.5px",
                          pl: 1,
                        }}
                      >
                        <label htmlFor="text">
                          <Typography
                            sx={{
                              color: "text.main",
                              fontSize: { xs: "13px", md: "14px", lg: "16px" },
                              fontWeight: "400",
                              cursor: "pointer",
                              mb: { xs: "10px", md: "0px" },
                            }}
                          >
                            چه اتفاقی افتاده است ؟
                          </Typography>
                        </label>
                      </Box>
                      <Box sx={{ width: { lg: "60%", md: "45%", xs: "100%" } }}>
                        <Box
                          sx={{
                            border: "0.5px solid",
                            borderColor: "border.main",
                            borderRadius: "5px",
                            overflow: "hidden",
                            color: "text.secondary",
                            fontSize: "13px",
                            fontWeight: "400",
                          }}
                        >
                          <textarea
                            id="text"
                            className="scrollbarHidden"
                            name="text"
                            value={formData.text} // Bind the state
                            onChange={handleChange}
                            placeholder="توضیحات خود را اینجا بنویسید ..."
                            style={{
                              width: "100%",
                              height: "150px",
                              minHeight: "150px",
                              padding: "15px 10px",
                              outline: "0",
                              border: "0",
                              borderRadius: "5px",
                              display: "flex",
                              alignItems: "center",
                              resize: "vertical",
                              background: "transparent",
                              fontSize: "inherit",
                              fontWeight: "inherit",
                              color: "inherit",
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "start",
                        flexDirection: { xs: "column", md: "row" },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mt: "12.5px",
                          pl: 1,
                        }}
                      >
                        <label htmlFor="user_email">
                          <Typography
                            sx={{
                              color: "text.main",
                              fontSize: { xs: "13px", md: "14px", lg: "16px" },
                              fontWeight: "400",
                              cursor: "pointer",
                              mb: { xs: "10px", md: "0px" },
                            }}
                          >
                            ایمیل
                          </Typography>
                        </label>
                      </Box>
                      <Box sx={{ width: { lg: "60%", md: "45%", xs: "100%" } }}>
                        <Box
                          sx={{
                            width: "100%",
                            border: "0.5px solid",
                            borderColor: "border.main",
                            borderRadius: "5px",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            color: "text.secondary",
                            fontSize: "13px",
                            fontWeight: "400",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              paddingInlineStart: 2,
                              color: "icon.main",
                            }}
                          >
                            <svg
                              width="20"
                              height="16"
                              viewBox="0 0 22 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4L9.16492 9.71544C9.82609 10.1783 10.1567 10.4097 10.5163 10.4993C10.8339 10.5785 11.1661 10.5785 11.4837 10.4993C11.8433 10.4097 12.1739 10.1783 12.8351 9.71544L21 4M5.8 17H16.2C17.8802 17 18.7202 17 19.362 16.673C19.9265 16.3854 20.3854 15.9265 20.673 15.362C21 14.7202 21 13.8802 21 12.2V5.8C21 4.11984 21 3.27976 20.673 2.63803C20.3854 2.07354 19.9265 1.6146 19.362 1.32698C18.7202 1 17.8802 1 16.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V12.2C1 13.8802 1 14.7202 1.32698 15.362C1.6146 15.9265 2.07354 16.3854 2.63803 16.673C3.27976 17 4.11984 17 5.8 17Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Box>
                          <input
                            type="email"
                            id="user_email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="ایمیل را وارد کنید"
                            style={{
                              width: "100%",
                              height: "100%",
                              padding: "15px 10px",
                              border: "0",
                              outline: "0",
                              borderRadius: "5px",
                              background: "transparent",
                              fontSize: "inherit",
                              fontWeight: "inherit",
                              color: "inherit",
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                        px: { xs: 3, md: 4 },
                      }}
                    >
                      <label htmlFor="attachment">
                        <Box
                          sx={{
                            display: "flex",
                            gap: 1,
                            flexDirection: { md: "row", xs: "column" },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              cursor: "pointer",
                              width: "fit-content",
                            }}
                          >
                            <svg
                              width="20"
                              height="22"
                              viewBox="0 0 20 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.1518 9.89994L10.1361 18.9156C8.08589 20.9658 4.76177 20.9658 2.71152 18.9156C0.661265 16.8653 0.661265 13.5412 2.71152 11.4909L11.7271 2.47532C13.094 1.10849 15.31 1.10849 16.6769 2.47532C18.0437 3.84216 18.0437 6.05823 16.6769 7.42507L8.01482 16.0871C7.3314 16.7705 6.22336 16.7705 5.53994 16.0871C4.85653 15.4037 4.85653 14.2957 5.53994 13.6123L13.1413 6.01086"
                                stroke="#0961DC"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <Typography
                              sx={{
                                fontWeight: "600",
                                color: "button.main",
                                mx: 1,
                                fontSize: {
                                  xs: "13px",
                                  md: "14px",
                                  lg: "16px",
                                },
                              }}
                            >
                              پیوست فایل
                            </Typography>
                          </Box>
                          <Typography
                            sx={{ color: "text.secondary", direction: "rtl" }}
                          >
                            {formData?.file?.name}
                          </Typography>
                        </Box>
                      </label>
                      <input
                        type="file"
                        id="attachment"
                        name="file"
                        onChange={handleFileChange}
                        accept=".png, .jpg, .jpeg, .svg"
                        style={{
                          position: "absolute",
                          top: "0",
                          opacity: "0",
                          cursor: "pointer",
                          width: "150px",
                        }}
                      />
                    </Box>
                  </Stack>
                  <Box
                    sx={{
                      mt: { xs: "36px", md: 10 },
                      mb: { xs: "10px", md: "0px" },
                    }}
                  >
                    <Button
                      type="submit"
                      sx={{
                        color: "white",
                        bgcolor: "button.main",
                        width: { xs: "100%", md: "180px", lg: "210px" },
                        height: { xs: "36px", md: "46px", lg: "56px" },
                        borderRadius: "5px",
                        fontWeight: "600",
                        fontSize: { xs: "14px", md: "16px" },
                        ":hover": {
                          bgcolor: "button.main",
                        },
                      }}
                    >
                      {loading ? (
                        <BeatLoader color="white" size={10} />
                      ) : (
                        "ارسال تیکت"
                      )}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </form>
  );
};

export default CreateTicket;
