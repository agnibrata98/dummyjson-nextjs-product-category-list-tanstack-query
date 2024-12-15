import { allProductsProps } from "@/typeScript/cms.interface";
import axiosInstance from "../axios/axios";
import { endpoints } from "../endPoints/endPoints";



export const allProductsAPICall = async () => {
    const res = await axiosInstance.get<allProductsProps>(endpoints.product.allProducts)
    // console.log('allBlogsAPICall res', res);
    return res.data;
}
