import ProductModel from "./Product";

interface ProductsModel {
  next: null | number;
  previous: null | number;
  limit: number;
  page_count: number;
  count: number;
  results: ProductModel[];
}

export default ProductsModel;
