import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Filter from "./Filter";

function ProductList({
  products,
  categories,
}: {
  products: {
    products: [];
    total: number;
  };
  categories: [string];
}) {
  return (
    <>
      <div className="container mx-auto xl:max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:gap-5">
          <Filter categories={categories} />
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {products.products?.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
        <div className="mt-8 flex w-full justify-center">
          <Pagination totalItems={products.total} />
        </div>
      </div>
    </>
  );
}

export default ProductList;
