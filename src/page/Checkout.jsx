import { FaTag } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";



const Checkout = () => {
  return (

    <div className=" py-10">
      <h2 className="text-center text-4xl font-bold pb-10">Checkout</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Billing Details */}
        <div className="col-span-1 lg:col-span-8 bg-white py-6 px-10 rounded-lg shadow-md">
          <p className="mb-5">Are you already our customer? <a href="#" className="text-red-500">Click here to access</a></p>
          <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Document Type *
              </label>
              <select
                className="w-full border border-gray-300 rounded-md p-2"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose the type of document
                </option>
                <option value="passport">Passport</option>
                <option value="id-card">ID Card</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name *</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name *</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Company Name (Optional)
              </label>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Country/Region *
              </label>
              <select
                className="w-full border border-gray-300 rounded-md p-2"
                defaultValue="Bangladesh"
              >
                <option value="Bangladesh">Bangladesh</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Street and Number *
              </label>
              <input
                type="text"
                placeholder="Street/Square and House Number"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Apartment, suite, unit, etc. (optional)
              </label>
              <input
                type="text"
                placeholder="Apartment, suite, unit"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">City *</label>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">District *</label>
                <input
                  type="text"
                  placeholder="District"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Zip (Optional)</label>
              <input
                type="text"
                placeholder="Zip Code"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone *</label>
              <input
                type="text"
                placeholder="Phone"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <input
                  type="checkbox"
                  id="create-account"
                  className="mr-2"
                />
                <label htmlFor="create-account" className="text-sm">
                  Create an account?
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="different-address"
                  className="mr-2"
                />
                <label htmlFor="different-address" className="text-sm">
                  Ship to a different address?
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Order Notes (Optional)
              </label>
              <textarea
                placeholder="Order Notes"
                className="w-full border border-gray-300 rounded-md p-2"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Cart Totals */}
        <div className=" col-span-1 lg:col-span-4 bg-white py-6 px-10 rounded-lg shadow-md">
          <div className=" mb-4">
            <div className="border border-red-600 p-4 rounded-lg bg-[rgba(255,250,250,0.9)] flex items-center justify-between mb-8">
              <button className="flex items-center space-x-2 text-red-500 font-semibold text-sm sm:text-base">
                <FaTag />
                <span>I Have Promo Code</span>
              </button>
              <MdNavigateNext />
            </div>
            <h2 className="text-xl font-semibold">Cart Totals</h2>

          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>240,00 €</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>0,00 €</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>0,00 €</span>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span className="text-red-500">240,00 € EUR</span>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Select Payment Method</h3>
            <div className="flex items-center gap-4">
              <button className="border border-gray-300 rounded-md p-2 w-full">
                Credit/Debit Card
              </button>
              <button className="border border-gray-300 rounded-md p-2 w-full">
                Paypal
              </button>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Cardholder Name"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">Card Number</label>
              <input
                type="text"
                placeholder="Card Number"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium mb-1">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVV</label>
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm">
                I have read and agree to the website{" "}
                <span className="text-red-500 underline">terms and conditions</span> *
              </label>
            </div>
            <div>
              <input type="checkbox" id="newsletter" className="mr-2" />
              <label htmlFor="newsletter" className="text-sm">
                Subscribe to the newsletter to receive exclusive updates and promotions!
              </label>
            </div>
          </div>
          <button className="bg-red-500 text-white py-2 px-4 rounded-md mt-4 w-full">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>

  );
};

export default Checkout;


