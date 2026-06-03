import { productType } from "@/lib/product";
import Link from "next/link";

export default function ProductCardComponent({
  id,
  title,
  description,
  slug,
  // images,
}: productType) {
  return (
    <Link href={`/product/${slug}`}>
      <div className="m-5 cursor-pointer rounded-lg bg-amber-100 p-5 transition hover:scale-[1.02] hover:bg-amber-200">
        {/* <img src={images[0]} alt={title} /> */}
        <h2 className="text-lg">{id}</h2>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="line-clamp-3 text-lg">{description}</p>
      </div>
    </Link>
  );
}
