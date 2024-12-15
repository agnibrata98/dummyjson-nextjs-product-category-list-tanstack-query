import { allCategoriesAPICall } from "@/api/functions/allCategory.api";
import { allProductsAPICall } from "@/api/functions/allProducts.api";
import { productsByCategoryAPICall } from "@/api/functions/productsByCategory.api";
import { getSearchedDataAPICall } from "@/api/functions/searchProducts.api";
import { productDetailsAPICall } from "@/api/functions/singleProductDetails.api";
import { allProductsProps, categoryProps, productsByCategoryProps, singleProductProps } from "@/typeScript/cms.interface";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

// for fetching all products 
export const allProductsQuery = (): UseQueryResult<allProductsProps, unknown> => {
    return useQuery({
      queryKey: ["PRODUCTS"],
      queryFn: allProductsAPICall
    });
};

//for single product details 
export const productDetailsQuery = (
    id: string
): UseQueryResult<singleProductProps, unknown> => {
    return useQuery({
        queryKey: ["PRODUCT-DETAILS", id],
        queryFn: () => productDetailsAPICall(id)
    });
};

// for showing all category
export const allCategoriesQuery = (): UseQueryResult<categoryProps, unknown> => {
    return useQuery({
      queryKey: ["ALL-CATEGORIES"],
      queryFn: allCategoriesAPICall
    });
};

// for showing products by category
export const categoryProductsQuery = (categoryId: string): UseQueryResult<productsByCategoryProps, unknown> => {
    return useQuery({
      queryKey: ["CATEGORY-PRODUCTS", categoryId],
      queryFn: () => productsByCategoryAPICall(categoryId),
      enabled: !!categoryId, // Only run the query if categoryId exists
    });
};

// for product searching
export const useSearchedProductQuery = (search:string):UseQueryResult<allProductsProps,unknown>=>{
    return useQuery({
        queryKey:["SEARCHED_DATA",search],
        queryFn:getSearchedDataAPICall,
        enabled:false
    })
}