import { allProductsProps } from "@/typeScript/cms.interface";
import { QueryFunction } from "@tanstack/react-query";
import axiosInstance from "../axios/axios";
import { endpoints } from "../endPoints/endPoints";


export const getSearchedDataAPICall:QueryFunction<allProductsProps> = async({queryKey})=>{
    const search = queryKey[1];
    const res = await axiosInstance.get<allProductsProps>(endpoints.product.searchProduct+`?q=${search}`);
    return res.data;
}