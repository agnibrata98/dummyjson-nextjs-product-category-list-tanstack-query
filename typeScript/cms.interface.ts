interface Dimensions {
    width: number;
    height: number;
    depth: number;
  }
  
  interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }
  
  interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  }
  // for all products interface
export interface IallProductProps {
  products: any;
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail: string;
  }
  
  export interface allProductsProps extends IallProductProps {
    products: IallProductProps;
  }
  // for product details 
  export interface singleProductProps extends IallProductProps{
    data: IallProductProps;
  }

  // for product category 
  export interface IallCategoryProps {
    slug: string;
    name: string;
    url: string;
  }

  export interface categoryProps extends IallCategoryProps{
    data: IallCategoryProps;
  }

  // for products by category
  export interface productsByCategoryProps extends IallProductProps{
    data: IallProductProps;
  }