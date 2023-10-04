import qs from "qs";
import { getStrapiURL } from "./api-helper";

export const fetchApi = async(
    path: string,
    urlParamsObject = {},
    options = {},
) => {
    try {
        const mergedOptions = {
            // next: {revalidate: 60},
            headers: {
                "Content-Type": "application/json",
            },
            ...options,
        }        
        const queryString = qs.stringify(urlParamsObject, {encodeValuesOnly: true});
        const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}`: ""}`)}`
        const res = await fetch(requestUrl, {cache: "no-cache", ...mergedOptions});
        const data = await res.json()
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching API");
    }
}