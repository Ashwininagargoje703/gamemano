import ProductList from "@/components/ProductList";
import StoreProvider from "../StoreProvider";

async function getProductData(skip: string, limit: string) {
  const res = await fetch(
    `https://dummyjson.com/products?skip=${skip}&limit=${limit}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getProductCategories() {
  const res = await fetch(`https://dummyjson.com/products/categories`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getProductFromCategory(category: string) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  if (!res.ok) {
    return {
      products: [],
    };
  }

  return res.json();
}

async function searchProduct(query: string) {
  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  if (!res.ok) {
    return {
      products: [],
    };
  }

  return res.json();
}

export default async function Product({
  searchParams,
}: {
  [key: string]: string | string[];
}) {
  const page = searchParams["page"] || "1";
  const limit = searchParams["limit"] || "9";
  const category = searchParams["category"];
  const search = searchParams["search"];

  const skip = (page - 1) * limit;
  let data = {
    products: [],
  };

  if (category !== undefined && category !== "") {
    data = await getProductFromCategory(category);
  } else if (search !== undefined && search != "") {
    data = await searchProduct(search);
  } else {
    data = await getProductData(String(skip), limit);
  }

  const categories = await getProductCategories();

  return (
    <StoreProvider>
      <main className="flex flex-col items-center justify-between p-4 md:p-8 lg:p-24">
        <ProductList products={data} categories={categories} />
      </main>
    </StoreProvider>
  );
}
