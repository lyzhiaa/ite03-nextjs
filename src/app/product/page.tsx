// "use client";
// import { Suspense, useEffect, useState } from "react";
import { productType } from "@/lib/product";
import ProductCardComponent from "@/components/product/product-card";
import Button from "@/components/button/button";

type productData = productType[];
// base url
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export default async function ProductPage() {
  // const [products, setProduct] = useState<productData>();
  // useEffect
  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch(`${BASE_URL}/api/v1/products`);
  //     //
  //     // if (!response.ok) {
  //     //   redirect("/");
  //     // }
  //     const data = await response.json();
  //     setProduct(data);
  //   }
  //   getData();
  // }, []);
  // console.log("data : ", products);
  const res = await fetch(`${BASE_URL}/api/v1/products`);
  const products = await res.json();
  return (
    <div>
      <Button />
      <div className="grid grid-cols-5 gap-5">
        {products?.map((product: any) => (
          <ProductCardComponent
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            // images={product.images}
            slug={product.slug}
          />
        ))}
      </div>
    </div>
  );
}
