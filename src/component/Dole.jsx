import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

import img1 from "../assets/images/doul/img1.png"
import img2 from "../assets/images/doul/img2.png"
import img3 from "../assets/images/doul/img3.png"

function Dole() {


  const items = [
    {
      img: img1,
      title: "Double",
      bgColor: "bg-red-500",
    },
    {
      img: img2,
      title: "Double",
      bgColor: "bg-blue-500"
    },
    {
      img: img3,
      title: "Double",
      bgColor: "bg-black bg-opacity-70"

    },
    {
      img: img1,
      title: "Double",
      bgColor: "bg-red-500"
    },
    {
      img: img2,
      title: "Double",
      bgColor: "bg-black bg-opacity-70"
    },
    {
      img: img3,
      title: "Double",
      bgColor: "bg-red-500"
    },
    {
      img: img1,
      title: "Double",
      bgColor: "bg-blue-500"
    },
    {
      img: img2,
      title: "Double",
      bgColor: "bg-black bg-opacity-70"
    },
  ];

  return (
    <section className="bg-white py-4 md:py-12 px-4 md:px-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        Scopri le Collezioni
      </h2>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}

        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="swiper-container"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative group">
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg w-full h-auto"
              />
              {/* Overlay */}
              <div
                className={`absolute bottom-0 left-0 right-0 text-white text-center py-1 md:py-4 font-medium transition-transform transform translate-y-full group-hover:translate-y-0 md:translate-y-full md:group-hover:translate-y-0 text-lg md:text-2xl ${item.bgColor}`}
              >
                {item.title}
                <span className="ml-2 md:ml-10 text-lg md:text-2xl inline-block transform rotate-6">
                  ↗
                </span>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}




export default Dole