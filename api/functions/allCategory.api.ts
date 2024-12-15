import { categoryProps } from "@/typeScript/cms.interface";
import axiosInstance from "../axios/axios";
import { endpoints } from "../endPoints/endPoints";


export const allCategoriesAPICall = async () => {
    const res = await axiosInstance.get<categoryProps>(endpoints.product.productCategories)
    // console.log('allBlogsAPICall res', res);
    return res.data;
}