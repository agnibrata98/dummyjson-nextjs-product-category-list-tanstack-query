import { productsByCategoryProps } from "@/typeScript/cms.interface";
import axiosInstance from "../axios/axios";
import { endpoints } from "../endPoints/endPoints";


export const productsByCategoryAPICall = async (id : string) => {
    const res = await axiosInstance.get<productsByCategoryProps>(`${endpoints.product.productByCategory}/${id}`)
    // console.log('blogDetailsApiCall res', res);
    return res.data;
}