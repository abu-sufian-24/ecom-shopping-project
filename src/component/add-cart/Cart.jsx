import { FaTag } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import img1 from "../../assets/images/t-shirt/1.png";
import { MdNavigateNext } from "react-icons/md";

import { Link } from "react-router";

function Cart() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] py-6 px-4 sm:py-10 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 flex-wrap">
        {/* Cart Items */}
        <div className="col-span-1 md:col-span-8 space-y-4">
          {/* Image Section */}

          <div
            className="flex flex-col sm:flex-row items-center sm:justify-between border rounded-lg p-4 bg-white shadow-md space-y-4 sm:space-y-0"
          >
            <div className="flex items-center gap-4">
              <img
                src={img1}
                alt="Product"
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="text-sm sm:text-lg font-semibold text-gray-800">Heresiarch</h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Wearability: Over
                  <br />
                  Color: Optical White
                  <br />
                  Size: S
                </p>
              </div>
            </div>
            {/* Price and Quantity Section */}
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-red-500 text-sm sm:text-lg font-semibold">60,00 €</span>

              <div className="flex items-center border rounded-md">
                <button
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                  aria-label="Decrease Quantity"
                >
                  -
                </button>
                <span className="border-l border-r w-6 sm:w-8 text-center text-sm">1</span>
                <button
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                  aria-label="Increase Quantity"
                >
                  +
                </button>
              </div>
            </div>
            {/* Delete Button */}
            <button
              className="text-gray-500 hover:text-red-500"
              aria-label="Remove Item"
            >
              <FaTrashAlt size={18} />
            </button>
          </div>
          <div
            className="flex flex-col sm:flex-row items-center sm:justify-between border rounded-lg p-4 bg-white shadow-md space-y-4 sm:space-y-0"
          >
            <div className="flex items-center gap-4">
              <img
                src={img1}
                alt="Product"
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="text-sm sm:text-lg font-semibold text-gray-800">Heresiarch</h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Wearability: Over
                  <br />
                  Color: Optical White
                  <br />
                  Size: S
                </p>
              </div>
            </div>
            {/* Price and Quantity Section */}
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-red-500 text-sm sm:text-lg font-semibold">60,00 €</span>

              <div className="flex items-center border rounded-md">
                <button
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                  aria-label="Decrease Quantity"
                >
                  -
                </button>
                <span className="border-l border-r w-6 sm:w-8 text-center text-sm">1</span>
                <button
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                  aria-label="Increase Quantity"
                >
                  +
                </button>
              </div>
            </div>
            {/* Delete Button */}
            <button
              className="text-gray-500 hover:text-red-500"
              aria-label="Remove Item"
            >
              <FaTrashAlt size={18} />
            </button>
          </div>
        </div>

        {/* Summary Section */}
        <div className="col-span-1 md:col-span-4 space-y-6">
          {/* Promo Code */}
          <div className="border border-red-600 p-4 rounded-lg bg-[rgba(255,250,250,0.9)] flex items-center justify-between">
            <button className="flex items-center space-x-2 text-red-500 font-semibold text-sm sm:text-base">
              <FaTag />
              <span>I Have Promo Code</span>
            </button>
            <MdNavigateNext />
          </div>

          {/* Cart Totals */}
          <div className="border p-4 rounded-lg bg-[rgba(255,255,255,0.9)]">
            <h3 className="font-semibold text-base sm:text-lg mb-4">Cart Totals</h3>
            <div className="flex justify-between text-sm sm:text-base text-gray-600">
              <span>Subtotal</span>
              <span>60€</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base text-gray-600">
              <span>Shipping</span>
              <span>0.00 €</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base text-gray-600">
              <span>Tax</span>
              <span>0.00 €</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base text-gray-800 font-bold mt-4">
              <span>Total</span>
              <span> 50 € EUR</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              (Including 10.82 € VAT)
            </p>
            <Link to={"/checkout"}>
              <button className="w-full bg-red-500 text-white py-2 sm:py-3 mt-4 rounded-full hover:bg-red-600 text-sm sm:text-base">
                PROCEED TO CHECKOUT ➜
              </button>
            </Link>

            <Link to={"/view-product"}>
              <button className="w-full mt-2 text-gray-600 py-2 text-sm sm:text-base rounded hover:underline">
                BACK TO SHOPPING
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
