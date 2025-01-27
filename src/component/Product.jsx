import { Link, useLocation, useNavigate } from "react-router"
import { useEffect, useState } from "react";




function Product() {
  const [products, setProducts] = useState()
  const location = useLocation();
  const navigate = useNavigate()


  useEffect(() => {
    fetch("http://localhost:5000/shops")
      .then((res) => res.json())
      .then((data) => {

        setProducts(data)
      })
  }, [])

  const handleClick = (product) => {
    navigate("/product-details", { state: { product } });
  };


  return (
    <section className="py-16 px-4 md:px-12">
      {/* Section Title */}
      <div className="text-center mb-8">
        {location.pathname === "/product-details" ? (
          <h1 className="text-3xl md:text-5xl font-bold mb-10">
            And Have You Already Seen These?
          </h1>
        ) : (
          <h1 className="text-3xl md:text-5xl font-bold mb-10">In Evidenza</h1>
        )}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {products?.map((product) => (
          <div
            key={product._id}
            onClick={() => handleClick(product)}
            className="relative p-4 rounded-lg shadow-md border bg-white hover:border-red-500 transition-colors cursor-pointer"
          >
            {/* Product Image */}
            <img
              src={product.photo}
              alt={product.name}
              className="w-full h-auto rounded-md"
            />

            {/* Product Label */}
            <div className="absolute top-2 right-2 bg-black text-white text-sm px-2 py-1 rounded">
              {product.label}
            </div>

            {/* Product Info */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>

            {/* Price & Add to Cart */}
            <div className="mt-6 flex justify-between items-center border px-4 py-2 rounded-md group">
              <button className="text-[#212121] ">
                View Details
              </button>
              <span className="text-lg font-bold ">${product.price}</span>
            </div>

          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to={"/view-product"} className="bg-[#A81A18] text-white px-8 py-3  rounded-lg hover:bg-red-600">
          Vedi  tutte →
        </Link>
      </div>
    </section>
  );
};


export { Product }