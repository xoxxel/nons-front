import CopyCode from "@/components/profile/activities/transaction/copyCode";
import OrderBadge from "@/components/profile/activities/transaction/orderBadge";
import OrderModel from "@/models/Order";
import jalaliDate from "@/utils/jalaliDate";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const OrderCardMobile = ({ order }: { order: OrderModel }) => {
    const formattedDate = order?.date_created
        ? jalaliDate(order?.date_created, "YYYY/MM/DD")
        : "تاریخ نامشخص";

    return (
        <Box
            className="orders__cards"
            sx={{
                p: "10px 10px 25px 10px",
                borderBottom: "0.5px solid",
                borderBottomColor: "border.main",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                }}
            >
                <Box
                    sx={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        position: "relative",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {order?.product?.brand?.icon &&
                    <Image fill objectFit="cover" src={process.env.NEXT_PUBLIC_SERVER + "/" + order?.product?.brand?.icon} alt={order?.product?.title}/>}
                </Box>
                <Box
                    sx={{
                        mx: 1,
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 0.5,
                    }}
                >
                    <Typography
                        sx={{
                            color: "text.main",
                            fontSize: "13px",
                            fontWeight: "600",
                        }}
                    >

                    </Typography>
                    <Typography
                        sx={{
                            color: "text.secondary",
                            fontSize: "13px",
                            fontWeight: "400",
                        }}
                    >
                        گیفت کارت , آمریکا
                    </Typography>
                    <Typography
                        sx={{
                            color: "text.secondary",
                            fontSize: "13px",
                            fontWeight: "400",
                        }}
                    >
                        {`قیمت: ${ThousandSeparator(order?.final_price)}`}
                    </Typography>
                    <CopyCode code={order.tracking_code} />
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "text.main",
                                fontSize: "14px",
                                fontWeight: "500",
                            }}
                        >
                            {`فروشگاه ${order?.product?.shop?.title}`}
                        </Typography>
                        <Box
                            sx={{
                                mx: 0.75,
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                src={process.env.NEXT_PUBLIC_SERVER + "/" + order?.product?.shop?.image}
                                alt="avatar"
                                width={16}
                                height={16}
                                style={{
                                    borderRadius: "100%",
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    height: "unset !important",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                }}
            >
                {order?.status &&
                <OrderBadge status={order?.status} />}
                <Box>
                    <Typography
                        sx={{
                            color: "text.secondary",
                            fontSize: "13px",
                            fontWeight: "400",
                        }}
                    >
                        {formattedDate}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default OrderCardMobile;