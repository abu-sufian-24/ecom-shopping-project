import { ProductData1 } from "../../data/productData"


function BestProduct() {

  const products = ProductData1()
  return (
    <div className=" py-4 md:py-24 px-10">
      <h2 className=" text-2xl md:text-4xl text-center font-bold mb-4 md:mb-14">Best Collection</h2>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative p-4 rounded-lg shadow-md border bg-white hover:border-red-500 transition-colors "
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
            <div className="mt-6 flex justify-between items-center border px-4 py-2 rounded-md group hover:text-white hover:bg-red-600">
              <button className="text-[#212121] group-hover:text-white">
                ADD TO CART
              </button>
              <span className="text-lg font-bold group-hover:text-white">{product.price}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default BestProduct