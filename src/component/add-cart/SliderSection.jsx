import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import img1 from "../../assets/images/t-shirt/1.png"
import img2 from "../../assets/images/t-shirt/2.png"
import img3 from "../../assets/images/t-shirt/3.png"
import img4 from "../../assets/images/t-shirt/4.png"

function SliderSection() {
  const items = [
    {
      id: 1,
      title: "Quaintrelle",
      description:
        "A stylish woman who lives in the name of passion and pursues life's pleasures.",
      price: "60,00 €",
      image: img1,
    },
    {
      id: 2,
      title: "Quaintrelle",
      description:
        "A stylish woman who lives in the name of passion and pursues life's pleasures.",
      price: "60,00 €",
      image: img4,
    },
    {
      id: 3,
      title: "Quaintrelle",
      description:
        "A stylish woman who lives in the name of passion and pursues life's pleasures.",
      price: "60,00 €",
      image: img2,
    },
    {
      id: 4,
      title: "Quaintrelle",
      description:
        "A stylish woman who lives in the name of passion and pursues life's pleasures.",
      price: "60,00 €",
      image: img3,
    },
    {
      id: 5,
      title: "Quaintrelle",
      description:
        "A stylish woman who lives in the name of passion and pursues life's pleasures.",
      price: "60,00 €",
      image: img3,
    },
    {
      id: 6,
      title: "Quaintrelle",
      description:
        "A stylish woman who lives in the name of passion and pursues life's pleasures.",
      price: "60,00 €",
      image: img3,
    },
    {
      id: 7,
      title: "Quaintrelle",
      description:
        "A stylish woman who lives in the name of passion and pursues life's pleasures.",
      price: "60,00 €",
      image: img3,
    },
    {
      id: 8,
      title: "Quaintrelle",
      description:
        "A stylish woman who lives in the name of passion and pursues life's pleasures.",
      price: "60,00 €",
      image: img3,
    },
    {
      id: 9,
      title: "Quaintrelle",
      description:
        "A stylish woman who lives in the name of passion and pursues life's pleasures.",
      price: "60,00 €",
      image: img3,
    },
    {
      id: 10,
      title: "Quaintrelle",
      description:
        "A stylish woman who lives in the name of passion and pursues life's pleasures.",
      price: "60,00 €",
      image: img3,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">

      <h2 className="text-4xl font-bold mb-8">Recently viewed</h2>

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
          1024: { slidesPerView: 4 },
        }}
        className="swiper-container"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="border rounded-lg shadow-md p-4 bg-white  flex gap-4 items-center">
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-52  object-cover rounded-md mb-4"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                <span className="text-red-500 text-lg font-bold">{item.price}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SliderSection