import ProductDetails from "@/components/ProductDetails";

async function getProductData(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 * 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function SingleProduct({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const data = await getProductData(id);

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 xl:p-24">
      <ProductDetails key={data.id} product={data} />
    </main>
  );
}
