"use client";
import { UserContext } from "@/context/UserProvider";
import differenceBetweenDates from "@/utils/timeDiffrence";
import { Box, CircularProgress, Skeleton, Typography } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const UserProfile = ({
  seller,
  lengthOfMembership,
  onChange,
  loading,
}: {
  seller?: boolean;
  lengthOfMembership?: boolean;
  onChange: (file: File) => void;
  loading: boolean;
}) => {
  const { user } = useContext(UserContext);
  const [skeletonLoading, setSkeletonLoading] = useState(true);
  const computeShopSteps = () => {
    let steps = 0;
    if (user?.number) steps += 1;
    if (user?.email) steps += 1;
    if (user?.national_id) steps += 1;
    if (user?.has_shop) steps += 1;
    return steps;
  };
  const shopSteps = computeShopSteps();

  const handleEdit = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      onChange(file);
    }
  };

  const shopMembershipLength = differenceBetweenDates(
    new Date(),
    new Date(user?.shop?.date_created)
  );

  const userMembershipLength = differenceBetweenDates(
    new Date(),
    new Date(user?.date_joined)
  );

  const shownDate = (lengthObject: {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
  }) => {
    if (lengthObject?.years > 0)
      return `${lengthObject?.years} سال ${
        lengthObject?.months > 0 ? ` و ${lengthObject?.months} ماه` : ""
      }`;
    if (lengthObject?.months > 0) return `${lengthObject?.months} ماه`;
    if (lengthObject?.days > 0) return `${lengthObject?.days} روز`;
    if (lengthObject?.hours > 0) return `${lengthObject?.hours} ساعت`;
    if (lengthObject?.minutes > 0) return `${lengthObject?.minutes} دقیقه`;
  };

  useEffect(() => {
    if (user?.id) setSkeletonLoading(false);
  }, [user]);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: lengthOfMembership ? "300px" : "270px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "fit-content",
            border: { lg: "0.25px solid", md: "none", xs: "0.25px solid" },
            borderColor: { lg: "#dee0e3", md: "none", xs: "#dee0e3" },
            borderRadius: "50%",
            p: { lg: 1.9, md: 0, xs: 1.9 },
          }}
        >
          <Box
            sx={{
              width: "fit-content",
              border: "0.25px solid",
              borderColor: "#c8cacc",
              borderRadius: "50%",
              p: 1.8,
            }}
          >
            <Box
              sx={{
                width: "fit-content",
                border: "0.25px solid",
                borderColor: "#bdbfc0",
                borderRadius: "50%",
                p: 1.7,
              }}
            >
              <Box
                sx={{
                  width: "fit-content",
                  border: "0.25px solid",
                  borderColor: "#a2a5a7",
                  borderRadius: "50%",
                  p: 1.6,
                }}
              >
                <Box
                  sx={{
                    width: "fit-content",
                    border: "0.25px solid",
                    borderColor: "border.main",
                    borderRadius: "50%",
                    p: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: "81px",
                      height: "81px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      border: "0.5px dotted #848686",
                      // borderTop: seller
                      //   ? "0.5px dotted"
                      //   : shopSteps >= 1
                      //   ? "3px solid"
                      //   : "0.5px dotted",
                      // borderLeft: seller
                      //   ? "0.5px dotted"
                      //   : shopSteps >= 2
                      //   ? "3px solid"
                      //   : "0.5px dotted",
                      // borderBottom: seller
                      //   ? "0.5px dotted"
                      //   : shopSteps >= 3
                      //   ? "3px solid"
                      //   : "0.5px dotted",
                      // borderRight: seller
                      //   ? "0.5px dotted"
                      //   : shopSteps === 4
                      //   ? "3px solid"
                      //   : "0.5px dotted",
                      // borderTopColor: seller
                      //   ? "#848686"
                      //   : shopSteps >= 1
                      //   ? "primary.main"
                      //   : "#848686",
                      // borderLeftColor: seller
                      //   ? "#848686"
                      //   : shopSteps >= 2
                      //   ? "primary.main"
                      //   : "#848686",
                      // borderBottomColor: seller
                      //   ? "#848686"
                      //   : shopSteps >= 3
                      //   ? "primary.main"
                      //   : "#848686",
                      // borderRightColor: seller
                      //   ? "#848686"
                      //   : shopSteps >= 4
                      //   ? "primary.main"
                      //   : "#848686",
                      position: "relative",
                    }}
                  >
                    {skeletonLoading ? (
                      <Skeleton
                        variant="circular"
                        sx={{
                          width: "72px",
                          height: "72px",
                          borderRadius: "50px",
                        }}
                      />
                    ) : (
                      <Image
                        src={
                          seller
                            ? user?.shop?.image ? `${process.env.NEXT_PUBLIC_SERVER}/${user?.shop?.image}` : "/images/boredape.png"
                            : user?.image ? `${process.env.NEXT_PUBLIC_SERVER}/${user?.image}` : "/images/boredape.png"
                        }
                        width={72}
                        height={72}
                        alt="profile"
                        style={{
                          objectFit: "cover",
                          borderRadius: "50%",
                          boxShadow: "0px 4px 4px 0px #00000026 inset",
                          userSelect: "none",
                          pointerEvents: "none",
                        }}
                      />
                    )}
                    {!((seller && user?.shop?.image) || (!seller && user?.image)) && <Box
                      onClick={handleEdit}
                      sx={{
                        width: "23px",
                        height: "23px",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "black.main",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        cursor: loading ? "default" : "pointer",
                        // zIndex: 11,
                      }}
                    >
                      {loading ? (
                        <CircularProgress size={15} sx={{ color: "white" }} />
                      ) : (
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2205_8985)">
                            <path
                              d="M9.74985 5.41667L7.58319 3.25M1.354 11.6458L3.1872 11.4421C3.41118 11.4173 3.52316 11.4048 3.62784 11.3709C3.7207 11.3409 3.80908 11.2984 3.89057 11.2447C3.98242 11.1841 4.06209 11.1044 4.22144 10.9451L11.3749 3.79167C11.9732 3.19336 11.9732 2.22331 11.3749 1.625C10.7765 1.02669 9.80649 1.02669 9.20819 1.625L2.05477 8.7784C1.89542 8.93775 1.81575 9.01742 1.75518 9.10927C1.70145 9.19076 1.65897 9.27914 1.62891 9.372C1.59502 9.47668 1.58258 9.58866 1.55769 9.81264L1.354 11.6458Z"
                              stroke="white"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2205_8985">
                              <rect width="13" height="13" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </Box>}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <input
          id="fileInput"
          type="file"
          onChange={handleFileChange}
          accept=".png, .jpg , .jpeg"
          style={{ visibility: "hidden" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mt: -2,
            position: "absolute",
            top: "210px",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
            <Typography
              sx={{ color: "text.main", fontSize: "16", fontWeight: "600" }}
            >
              {skeletonLoading ? <Skeleton variant="text" sx={{width:"90px"}} /> : seller ? user?.shop?.title : user?.name}
            </Typography>
            {user?.shop?.is_authenticated && (
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3755 3.30169C14.5456 3.70703 14.8721 4.02923 15.2833 4.19744L16.725 4.78581C17.1364 4.95372 17.4633 5.27579 17.6337 5.68117C17.8041 6.08654 17.8041 6.54202 17.6337 6.94739L17.037 8.36683C16.8665 8.77238 16.8662 9.22832 17.0375 9.63367L17.6332 11.0527C17.7177 11.2535 17.7612 11.4687 17.7612 11.686C17.7613 11.9034 17.7178 12.1186 17.6334 12.3194C17.549 12.5202 17.4252 12.7027 17.2692 12.8563C17.1132 13.01 16.928 13.1318 16.7242 13.215L15.2835 13.8029C14.8721 13.9705 14.5451 14.2922 14.3744 14.6973L13.7772 16.1178C13.6068 16.5231 13.2799 16.8452 12.8684 17.0131C12.457 17.181 11.9947 17.181 11.5833 17.0131L10.1426 16.4252C9.73117 16.2577 9.26905 16.258 8.85786 16.4261L7.41616 17.0137C7.00495 17.1812 6.54306 17.181 6.13196 17.0133C5.72086 16.8455 5.39416 16.5238 5.22361 16.1189L4.62627 14.698C4.45616 14.2926 4.12963 13.9704 3.71848 13.8022L2.27678 13.2139C1.86553 13.046 1.53874 12.7242 1.36825 12.319C1.19777 11.9139 1.19753 11.4586 1.36761 11.0533L1.96435 9.63386C2.13436 9.22848 2.13401 8.77316 1.96339 8.36803L1.3675 6.94656C1.28302 6.74578 1.23951 6.53057 1.23948 6.31322C1.23944 6.09587 1.28287 5.88065 1.36729 5.67984C1.45171 5.47904 1.57547 5.29659 1.73148 5.14293C1.88749 4.98927 2.0727 4.8674 2.27654 4.78429L3.7172 4.19634C4.12825 4.02888 4.45507 3.70758 4.62592 3.30295L5.22309 1.8825C5.39352 1.47712 5.7204 1.15505 6.13184 0.987142C6.54328 0.81923 7.00556 0.81923 7.417 0.987142L8.85767 1.57509C9.26912 1.74259 9.73124 1.74225 10.1424 1.57414L11.5847 0.988053C11.9961 0.820236 12.4583 0.82027 12.8697 0.988149C13.281 1.15603 13.6079 1.478 13.7783 1.88327L14.3757 3.30415L14.3755 3.30169Z"
                  fill="#0788F5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.0076 6.68692C13.1272 6.50176 13.1673 6.27735 13.119 6.06306C13.0707 5.84878 12.938 5.66216 12.7501 5.54428C12.5622 5.4264 12.3344 5.3869 12.1169 5.43447C11.8994 5.48204 11.71 5.61279 11.5904 5.79796L8.30261 10.888L6.7981 9.03507C6.659 8.86365 6.45649 8.7537 6.23512 8.72939C6.01374 8.70509 5.79164 8.76843 5.61766 8.90547C5.44368 9.04252 5.33208 9.24204 5.30741 9.46015C5.28275 9.67827 5.34703 9.8971 5.48613 10.0685L7.72498 12.8258C7.80842 12.9287 7.91559 13.0105 8.03757 13.0644C8.15955 13.1182 8.29282 13.1426 8.42629 13.1355C8.55976 13.1284 8.68958 13.09 8.80495 13.0234C8.92032 12.9569 9.01789 12.8642 9.08957 12.7531L13.0076 6.68692Z"
                  fill="white"
                />
              </svg>
            )}
            {seller && (
              <Box
                sx={{
                  bgcolor: "button.main",
                  borderRadius: "5px 5px 0 5px",
                  fontSize: "10px",
                  fontWeight: "500",
                  color: "white",
                  px: 0.5,
                  py: 0.25,
                }}
              >
                Seller
              </Box>
            )}
          </Box>
          {skeletonLoading ? <Skeleton variant="rectangular" sx={{width:"120px",height:"25px",borderRadius:"5px"}} /> : <Box
            sx={{
              py: "2px",
              px: "10px",
              bgcolor: "background.main",
              borderRadius: "10px",
            }}
          >
            <Typography sx={{ color: "#344054" }}>
              {seller ? user?.shop?.tags?.title : user?.tag?.title}
            </Typography>
          </Box>}
          {lengthOfMembership && (
            skeletonLoading ? <Skeleton variant="text" width={"110px"} /> : <Typography
              sx={{
                color: "text.secondary",
                fontWeight: "400",
                fontSize: "14px",
              }}
            >
              {`${shownDate(
                seller ? shopMembershipLength ?? "0 دقیقه" : userMembershipLength ?? "0 دقیقه"
              )} عضویت در نونز`}
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};

export default UserProfile;
