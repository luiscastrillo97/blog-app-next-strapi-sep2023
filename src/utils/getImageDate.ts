import { Image } from "@/interfaces/post";

export const getImageData = ({data}: Image) => {
    const imageData = data.attributes.formats?.medium;
    return {
        url: imageData?.url,
        width: imageData?.width,
        height: imageData?.height,
    }
}