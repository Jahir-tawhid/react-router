import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const products = useLoaderData();

  return (
    <div>
      <div className="text-4xl font-bold text-center mt-4">Products List: </div>
      <div className="grid grid-cols-3 gap-2 m-4 ">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
