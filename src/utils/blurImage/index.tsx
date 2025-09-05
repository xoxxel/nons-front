"use server"
import { getPlaiceholder } from "plaiceholder";
import Image from "next/image";
import axios from "axios";

const BlurImage = async ({src}:{src:string}) => {
    const response = await axios.get(src, {
        responseType: 'arraybuffer'
    });

    const DynamicBuffer = Buffer.from(response.data);
    const { base64 } = await getPlaiceholder(DynamicBuffer);

    return ( 
        <div style={{ position: "relative", width: "300px", height: "200px" }}>
            <Image 
                src={src} 
                fill 
                alt="mee" 
                placeholder="blur" 
                blurDataURL={base64} 
            />
        </div>
    );
}

export default BlurImage;
