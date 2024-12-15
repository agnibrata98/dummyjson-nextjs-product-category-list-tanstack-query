import { singleProductProps } from "@/typeScript/cms.interface";
import axiosInstance from "../axios/axios";
import { endpoints } from "../endPoints/endPoints";


export const productDetailsAPICall = async (id : string) => {
    const res = await axiosInstance.get<singleProductProps>(`${endpoints.product.singleProduct}/${id}`)
    // console.log('blogDetailsApiCall res', res);
    return res.data;
}