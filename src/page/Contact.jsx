import img1 from "../assets/images/contact/1.png"
import img2 from "../assets/images/contact/2.png"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Contact() {
  return (
    <div className="py-5 md:py-20">
      <h2 className="text-2xl md:text-4xl text-center font-bold text-black pb-7">Write to Us to
        Say Hello or For Information!</h2>

      <div className="bg-[rgba(255,255,255,0.9)] py-16 px-8 sm:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Form and Contact Details Section */}
          <h2 className="text-2xl font-semibold mb-6">Your Message</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <form className="space-y-4">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-1/2 p-3 border border-gray-300 rounded-md"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-1/2 p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-md"
                ></textarea>
                <button
                  type="submit"
                  className="bg-red-500 text-white py-3 px-8 rounded-xl shadow-xl hover:bg-red-600"
                >
                  SUBMIT ➜
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-[rgba(250,250,250,1)]  rounded-md px-8 flex flex-wrap justify-between items-center">
              <div className=" space-y-3">
                <div>
                  <p className="text-gray-500">Toll Free Call</p>
                  <h3 className="text-3xl font-bold text-red-500">+321 4567 456</h3>
                </div>
                <div className="pt-5">
                  <p className="text-gray-500">Mail Us</p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    hello@wortess.com
                  </h3>
                </div>
                <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-300">
                  ➜ Start Shopping
                </button>
              </div>
              <div className="mt-6 md:mt-0">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-16 border-dashed border-t-2 pt-6 flex flex-col sm:flex-row justify-between items-center">
            {/* Live Chat */}
            <div className="flex justify-center items-center ">
              <div className="rounded-full pt-3 ">
                <img className="w-20 " src={img2} alt="" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Live Chat</h4>
                <p className="text-gray-500 text-sm">Text us now ➜</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-8 mt-6 sm:mt-0">
              <a href="#" className="text-blue-600 text-4xl">

                <FaFacebookSquare />
              </a>
              <a href="#" className="text-blue-400 text-4xl">
                <FaTwitterSquare />
              </a>
              <a href="#" className="text-blue-700 text-4xl">
                <FaLinkedin />

              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact