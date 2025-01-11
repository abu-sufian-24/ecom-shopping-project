import { useNavigate } from "react-router"

import { ProductData } from "../data/productData"




function Product() {
  const products = ProductData()

  const navigate = useNavigate()


  const handleClick = (product) => {
    navigate("/product-details", { state: { product } });
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-custom-gradient">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">In Evidenza</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleClick(product)}
            className="relative p-4 rounded-lg shadow-md border bg-gray-100 hover:border-red-500 transition-colors "
          >
            {/* Product Image */}
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-auto rounded-md"
            />

            {/* Product Label */}
            <div className="absolute top-2 right-2 bg-black text-white text-sm px-2 py-1 rounded">
              {product.label}
            </div>

            {/* Product Info */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>

            {/* Price & Add to Cart */}
            <div className="mt-6 flex justify-between items-center border px-4 py-2 rounded-md hover:text-white hover:bg-red-600">
              <button className=" text-[#212121] hover:text-white ">
                ADD TO CART
              </button>
              <span className="text-lg font-bold">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="bg-[#A81A18] text-white px-8 py-3 mt-6 rounded-lg hover:bg-red-600">
          Vedi  tutte →
        </button>
      </div>
    </section>
  );
};




export { Product }