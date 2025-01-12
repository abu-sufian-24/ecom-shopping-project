import { FaTag } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import img1 from "../../assets/images/t-shirt/1.png"
import { MdNavigateNext } from "react-icons/md";

import { Link } from "react-router";

function Cart() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] py-10 px-8">

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
        {/* Cart Items */}
        <div className=" col-span-8 space-y-4">
          {/* Image Section */}
          <div className=" flex items-center justify-between border rounded-lg p-4 bg-white shadow-md">

            <div className="flex items-center gap-4">
              <img
                src={img1}
                alt="Product"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Heresiarch</h3>
                <p className="text-sm text-gray-500">
                  Wearability: Over
                  <br />
                  Color: Optical White
                  <br />
                  Size: S
                </p>
              </div>
            </div>

            {/* Price and Quantity Section */}
            <div className="flex items-center gap-6">
              <span className="text-red-500 text-lg font-semibold">60,00 €</span>

              <div className="flex items-center border rounded-md">
                <button
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                  aria-label="Decrease Quantity"
                >
                  -
                </button>
                <span className="border-l border-r w-8 text-center">1</span>

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
          <div className="flex items-center justify-between border rounded-lg p-4 bg-white shadow-md">
            <div className="flex items-center gap-4">
              <img
                src={img1}
                alt="Product"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Heresiarch</h3>
                <p className="text-sm text-gray-500">
                  Wearability: Over
                  <br />
                  Color: Optical White
                  <br />
                  Size: S
                </p>
              </div>
            </div>

            {/* Price and Quantity Section */}
            <div className="flex items-center gap-6">
              <span className="text-red-500 text-lg font-semibold">60,00 €</span>

              <div className="flex items-center border rounded-md">
                <button
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                  aria-label="Decrease Quantity"
                >
                  -
                </button>
                <span className="border-l border-r w-8 text-center">1</span>

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
        <div className=" col-span-4 space-y-8">
          {/* Promo Code */}
          <div className="border border-red-600 p-4 rounded-lg bg-[rgba(255,250,250,0.9)] flex items-center justify-between">
            <button className="flex items-center space-x-2 text-red-500 font-semibold">
              <FaTag />
              <span>I Have Promo Code</span>
            </button>
            <MdNavigateNext />
          </div>

          {/* Cart Totals */}
          <div className="border p-4 rounded-lg bg-[rgba(255,255,255,0.9)]">
            <h3 className="font-semibold text-lg mb-4">Cart Totals</h3>
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>60€</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>0.00 €</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax</span>
              <span>0.00 €</span>
            </div>
            <div className="flex justify-between text-gray-800 font-bold mt-4">
              <span>Total</span>
              <span> 50 € EUR</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              (Including 10.82 € VAT)
            </p>
            <button className="w-full bg-red-500 text-white py-3 mt-4 rounded-full hover:bg-red-600">
              PROCEED TO CHECKOUT ➜
            </button>
            <Link to={"/view-product"}>
              <button className="w-full mt-2 text-gray-600 py-2 rounded hover:underline">
                BACK TO SHOPPING
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart