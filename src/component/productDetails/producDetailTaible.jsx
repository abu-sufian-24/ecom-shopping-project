import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

import { useState } from "react";
import img1 from "../../assets/images/image57.png";
import img2 from "../../assets/images/t-shirt/1.png";
import img3 from "../../assets/images/t-shirt/2.png";
import img4 from "../../assets/images/t-shirt/3.png";
import img5 from "../../assets/images/t-shirt/4.png";
import img6 from "../../assets/images/t-shirt/5.png";
import img7 from "../../assets/images/t-shirt/6.png";
import img8 from "../../assets/images/t-shirt/7.png";
import img9 from "../../assets/images/t-shirt/8.png";
import img10 from "../../assets/images/t-shirt/pro-d.png";

function ProductDetailTable() {
  const [activeTab, setActiveTab] = useState("Our Philosophy");

  const tabs = ["Our Philosophy", "Our T-Shirt", "Washing and Care", "Shipping"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const items = [
    {
      img: img2,
      title: "Double",
      bgColor: "bg-red-500",
    },
    {
      img: img3,
      title: "Double",
      bgColor: "bg-blue-500",
    },
    {
      img: img4,
      title: "Double",
      bgColor: "bg-black bg-opacity-70",
    },
    {
      img: img5,
      title: "Double",
      bgColor: "bg-red-500",
    },
    {
      img: img6,
      title: "Double",
      bgColor: "bg-black bg-opacity-70",
    },
    {
      img: img7,
      title: "Double",
      bgColor: "bg-red-500",
    },
    {
      img: img8,
      title: "Double",
      bgColor: "bg-blue-500",
    },
    {
      img: img9,
      title: "Double",
      bgColor: "bg-black bg-opacity-70",
    },
    {
      img: img10,
      title: "Double",
      bgColor: "bg-black bg-opacity-70",
    },
    {
      img: img2,
      title: "Double",
      bgColor: "bg-black bg-opacity-70",
    },
    {
      img: img3,
      title: "Double",
      bgColor: "bg-black bg-opacity-70",
    },
    {
      img: img4,
      title: "Double",
      bgColor: "bg-black bg-opacity-70",
    },
    {
      img: img5,
      title: "Double",
      bgColor: "bg-black bg-opacity-70",
    },
    {
      img: img6,
      title: "Double",
      bgColor: "bg-black bg-opacity-70",
    },
  ];

  return (
    <div className="bg-gray-50 p-6 md:p-10">
      <div className="border-2 p-4 md:p-6 rounded">
        {/* Tabs */}
        <div className="flex flex-wrap justify-around border-b mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-2 md:px-6 py-3 text-sm md:text-lg font-semibold hover:text-red-600 ${activeTab === tab
                ? "border-b-4 border-black text-black"
                : "text-gray-500"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white p-4 md:p-6 rounded-md  md:shadow-md">
          {activeTab === "Our Philosophy" && (
            <div className="text-center">
              <p className="mb-4 text-gray-700">
                We only make what is sold. We do not produce large stocks of
                ready-made t-shirts, but each garment is created for the customer
                who ordered it.
              </p>
              <p className="text-gray-700">
                We have chosen to follow a more sustainable path, avoiding excess
                clothing production and collaborating with local producers who
                operate entirely in Italy.
              </p>
            </div>
          )}

          {activeTab === "Our T-Shirt" && (
            <div className="text-center max-w-[1000px] mx-auto mb-4 ">
              <p className="text-gray-700 hidden md:block">
                Our T-shirts are made with premium, eco-friendly fabrics that
                ensure durability and comfort. Designed with a minimalist aesthetic,
                each piece reflects timeless elegance and is handcrafted in
                collaboration with skilled local artisans.
              </p>
              <p className="text-gray-700 block md:hidden">Our T-shirts are made with premium</p>
            </div>
          )}

          {activeTab === "Washing and Care" && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Washing and Care Instructions</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Wash at a maximum temperature of 30°C (86°F).</li>
                <li>Avoid using bleach or harsh detergents.</li>
                <li>Do not tumble dry; air dry for best results.</li>
                <li>Iron on low heat if needed, avoiding printed areas.</li>
              </ul>
            </div>
          )}

          {activeTab === "Shipping" && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Shipping Details</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Orders are processed within 1-2 business days.</li>
                <li>Standard shipping takes 5-7 business days.</li>
                <li>Express shipping options are available at checkout.</li>
                <li>Free shipping on orders over $50.</li>
                <li>You will receive a tracking link once your order ships.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Size Guide */}
        {activeTab === "Our Philosophy" && (
          <div className="mt-8 bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Size Guide</h3>
            <div className="flex flex-wrap">
              <table className=" md:w-2/3 text-left border-collapse  ">
                <thead>
                  <tr>
                    <th className="border-b py-2">Size</th>
                    <th className="border-b py-2">Shoulders (A)</th>
                    <th className="border-b py-2">Chest (B)</th>
                    <th className="border-b py-2">Length (C)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 border-b">55.3 cm</td>
                    <td className="py-2 border-b">S</td>
                    <td className="py-2 border-b">59.5 cm</td>
                    <td className="py-2 border-b">65.5 cm</td>
                  </tr>
                  <tr>
                    <td className="py-2 border-b">56.5 cm</td>
                    <td className="py-2 border-b">M</td>
                    <td className="py-2 border-b">61.5 cm</td>
                    <td className="py-2 border-b">66.5 cm</td>
                  </tr>
                  <tr>
                    <td className="py-2 border-b">L</td>
                    <td className="py-2 border-b">57.7 cm</td>
                    <td className="py-2 border-b">63.5 cm</td>
                    <td className="py-2 border-b">67.5 cm</td>
                  </tr>
                </tbody>
              </table>

              <div className=" md:w-1/3 mt-4 md:mt-0 pl-0 md:pl-10">
                <img src={img1} alt="Size Guide Diagram" className="w-96 rounded-lg" />
              </div>
            </div>
          </div>
        )}

        {activeTab === "Our T-Shirt" && (
          <div className="mt-8">
            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={5}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 5 },
              }}
              className="swiper-container"
            >
              {items.map((item, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <img src={item.img} alt={item.title} className="rounded-lg w-full" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetailTable;
