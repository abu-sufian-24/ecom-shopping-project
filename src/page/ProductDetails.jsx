import { useState } from "react";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { useLocation } from "react-router";
import img1 from "../assets/images/pro-d1.png"
import img2 from "../assets/images/pro-d2.png"
import img3 from "../assets/images/pro-d.png"
import img4 from "../assets/images/pro-d3.png"
import ProductDetailTable from "../component/productDetails/producDetailTaible";
import Features from "../component/productDetails/Features";
import { Product } from "../component/Product";
import FactsSection from "../component/FactsSection";




function ProductDetails() {


  const location = useLocation();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const prodImage = [
    {
      img: img1,

    },
    {
      img: img2,

    },
    {
      img: img3,

    },
    {
      img: img4,

    }
  ]

  return (
    <>
      <div className="container mx-auto p-6 md:flex md:gap-12 bg-gray-50">
        {/* Left Section */}
        <div className="md:w-1/2">
          <div className="border rounded-md p-4">
            <img
              src={product?.img}
              alt="Product"
              className="w-full"
            />
          </div>
          <div className="flex gap-4 mt-4">
            {/* Small Thumbnails */}
            {prodImage.map((item) => (
              <img
                key={item}
                src={item.img}
                alt={`Thumbnail ${item}`}
                className=" w-12 md:w-32  border rounded-md cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2">
          {/* Title and Reviews */}
          <div>
            <h2 className="text-3xl font-bold">{product.title}</h2>
            <p className="text-red-500 mt-2">{product.description}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="text-yellow-500 text-lg">★★★★★</div>
              <span className="text-sm text-gray-500">(62 Reviews)</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-3">From the Dictionary Collection</h2>
            <p className=" mt-2">This is our Dictionary collection. The clean and modern design fits perfectly with any occasion, making them ideal for those looking to express their personality with style and character.</p>

          </div>

          {/* Price */}
          <div className="mt-4">
            <p className="text-2xl font-semibold text-red-500">{product.price}</p>
            <p className="text-gray-400 line-through">70,00 €</p>
            <p className="text-sm text-gray-500 mt-1">
              You can also pay in 3 convenient installments of 20 € with <span className="font-bold">Klarna</span> or <span className="font-bold">PayPal</span>.
            </p>
          </div>

          {/* Wearability */}
          <div className="mt-4">
            <h3 className="font-semibold">Wearability</h3>
            <div className="flex gap-4 mt-2">
              <button className="py-2 px-4 border rounded-md hover:bg-gray-100">Oversize</button>
              <button className="py-2 px-4 border rounded-md hover:bg-gray-100">Regular</button>
            </div>
          </div>

          {/* Color */}
          <div className="mt-4">
            <h3 className="font-semibold">Color:</h3>
            <div className="flex gap-4 mt-2">
              <button
                className={`w-8 h-8 rounded-full ${selectedColor === "white" ? "ring-2 ring-black" : ""
                  } bg-white border`}
                onClick={() => setSelectedColor("white")}
              ></button>
              <button
                className={`w-8 h-8 rounded-full ${selectedColor === "ecru" ? "ring-2 ring-black" : ""
                  } bg-gray-300 border`}
                onClick={() => setSelectedColor("ecru")}
              ></button>
            </div>
          </div>

          {/* Size */}
          <div className="mt-4">
            <h3 className="font-semibold">Size:</h3>
            <div className="flex gap-4 mt-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`py-2 px-4 border rounded-md ${selectedSize === size ? "bg-black text-white" : "hover:bg-gray-100"
                    }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-4">
            <h3 className="font-semibold">Quantity:</h3>
            <div className="flex items-center gap-4 mt-2">
              <button
                className="p-2 bg-gray-200 rounded-md"
                onClick={handleDecrement}
              >
                <FaMinus />
              </button>
              <span className="text-lg font-bold">{quantity}</span>
              <button
                className="p-2 bg-gray-200 rounded-md"
                onClick={handleIncrement}
              >
                <FaPlus />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-6">
            <button className="w-full py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 flex items-center justify-center gap-2">
              <span>ADD TO CART</span>
            </button>
            <button className="w-full py-3 mt-4 border rounded-md flex items-center justify-center gap-2 hover:bg-gray-100">
              <FaHeart className="text-red-500" />
              <span>Wishlist</span>
            </button>
          </div>

          {/* Delivery Note */}
          <div className="mt-4 text-sm text-gray-500">
            <p>All our T-shirts are <span className="text-red-500 font-bold">"made to order"</span>.</p>
            <p>It takes about 14 days to make your T-shirt. Buying it now you can <span className="font-bold">receive it by 30/11/2024.</span></p>
          </div>
        </div>
      </div>
      <ProductDetailTable />
      <Features />
      <FactsSection />
      <Product />

    </>

  );
};





export default ProductDetails