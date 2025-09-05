import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({title,product_count,image,slug}:{title:string,product_count:number,image?:string,slug:number}) => {
    return ( 
        <Link href={`/products/?brand=${slug}`}>
        <Box sx={{
            width: "100%",
            display: "flex",
            padding: {md:"15px 22px",xs:"10px"},
            borderRadius: {md:"12px",xs:"5px"},
            bgcolor: "background.element",
            gap:3,
            alignItems: {md:"start",xs:"center"}
        }}>
            <Box sx={{
                border: "3px solid",
                borderColor:"grey.600",
                borderRadius: {md:"10px",xs:"7px"},
                position: "relative",
                width: {md:"80px",xs:"55px"},
                height: {md:"80px",xs:"55px"},
                overflow:"hidden",
            }}>
                <Image src={`${process.env.NEXT_PUBLIC_SERVER}/${image}`} fill alt="product" objectFit="cover" />
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap:1,
                pt:{md:0.5,xs:0}
            }}>
                <Typography sx={{color:"text.main", fontSize:{md:"16px",xs:"14px"}}}>{title}</Typography>
                <Typography sx={{fontSize: {md:"14px",xs:"12px"}, color:"text.secondary"}}>{`${product_count} پیشنهاد`}</Typography>
            </Box>
        </Box>
        </Link>
     );
}
 
export default ProductCard;