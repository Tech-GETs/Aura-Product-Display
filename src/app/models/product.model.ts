// src/app/models/product.model.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  stock: number;
  price: number;
  ratings: number;
  brand: string;
  productType: string;
  productSubtype: string;
  concern: string;
  wishlist: boolean;
  imagePath1: string;
  imagePath2: string;
  imagePath3: string;
  imagePath4: string;
}
