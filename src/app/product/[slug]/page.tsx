import { notFound, redirect } from "next/navigation";

export default async function DetailProduct({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  const singleProduct = await fetch(`${BASE_URL}/api/v1/products/slug/${slug}`);

  if (!singleProduct.ok) {
    notFound();
  }
  const product = await singleProduct.json();

  return (
    <div className="m-5 cursor-pointer rounded-lg bg-amber-100 p-5 transition hover:scale-[1.02] hover:bg-amber-200 w-100">
      <img src={product.images[0]} />
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <p className="line-clamp-3 text-lg">{product.description}</p>
    </div>
  );
}
