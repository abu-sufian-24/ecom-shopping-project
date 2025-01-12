import { Link } from "react-router-dom";
import { ProductData1 } from "../../../data/productData";

function MainSection() {
  const products = ProductData1();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative p-4 rounded-lg shadow-md border bg-white hover:border-red-500 transition-colors"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-auto rounded-md"
            />
            <div className="absolute top-2 right-2 bg-black text-white text-sm px-2 py-1 rounded">
              {product.label}
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
            <div className="mt-6 flex justify-between items-center border px-4 py-2 rounded-md group hover:text-white hover:bg-red-600">
              <button className="text-[#212121] group-hover:text-white">
                ADD TO CART
              </button>
              <span className="text-lg font-bold group-hover:text-white">
                {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10 mb-12">
        <Link
          to="/"
          className="bg-[#A81A18] text-white px-8 py-3 rounded-lg hover:bg-red-600"
        >
          Vedi tutte →
        </Link>
      </div>
    </>
  );
}

export default MainSection;
