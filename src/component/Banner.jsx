import img1 from "../assets/images/Hero1.png"
import img2 from "../assets/images/Hero2.png"
import img3 from "../assets/images/Hero3.png"
import img4 from "../assets/images/Hero4.png"
import img5 from "../assets/images/Hero5.png"
import img6 from "../assets/images/Hero6.png"
import img7 from "../assets/images/Hero7.png"
import logo from "../assets/images/Logo.png"
import img8 from "../assets/images/mobil1.png"
import img9 from "../assets/images/mobile2.png"

function Banner() {
  return (
    <section className="relative  py-12 px-4 md:px-12 md:mt-16">
      {/* Heading and Text */}
      <div className="text-center relative">
        <img
          className="absolute hidden md:block top-3 right-6 opacity-10 md:opacity-95 md:top-3 md:left-3/4 animate-spin-slow"
          src={logo}
          alt="Logo"
        />

        <p className="text-xl md:text-2xl font-gilroy uppercase tracking-wide text-[#0F0F0F]">
          It's Not Just A T-Shirt
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2 font-gilroy leading-tight">
          It's a Manifesto <br /> to be Worn!
        </h1>
        <p className="text-gray-600 text-sm md:text-lg mt-4 max-w-2xl mx-auto px-2 md:px-0">
          WORTEES è una dichiarazione da indossare, è inchiostro; è un atto di
          responsabilità verbale; è polisemìa indelebile del carattere che
          abbiamo impresso e che ci portiamo addosso.
        </p>
        <button className="bg-[#A81A18] text-white px-6 md:px-8 py-2 md:py-3 mt-6 rounded-full hover:bg-red-600">
          Leggi Di Più →
        </button>
        <div className="absolute bottom-[-100px] right-36 z-0 hidden md:block">
          <img
            src={img4}
            alt="Bottom Right"
            className="rounded-lg shadow-lg w-40"
          />
        </div>
        <div className="absolute bottom-[-100px] left-36 z-0 hidden md:block">
          <img
            src={img7}
            alt="Bottom Right"
            className="rounded-lg shadow-lg w-40"
          />
        </div>
      </div>

      {/* Floating Image Section */}
      <div className="relative mt-12 pb-[400px] hidden md:block">
        {/* Center Large Image */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
          <img
            src={img5}
            alt="Center Model"
            className="rounded-lg shadow-lg w-60"
          />
        </div>

        {/* Top Left */}
        <div className="absolute top-0 right-1/4 z-0 ">
          <img
            src={img2}
            alt="Top Right"
            className="rounded-lg shadow-lg w-40"
          />
        </div>

        {/* Top Right */}
        <div className="absolute top-0 left-1/4 z-0">
          <img
            src={img3}
            alt="Top Right"
            className="rounded-lg shadow-lg w-40"
          />
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-8 left-28 z-0">
          <img
            src={img6}
            alt="Bottom Left"
            className="rounded-lg shadow-lg w-32"
          />
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-8 right-28 z-0">
          <img
            src={img1}
            alt="Bottom Right"
            className="rounded-lg shadow-lg w-32"
          />
        </div>
      </div>

      {/* mobile design */}
      <div className=" relative md:hidden pb-[300px]">
        <div className="absolute top-8 right-32 z-0 ">
          <img
            className="animate-spin-slow"
            src={logo}
            alt="Bottom Right"

          />
        </div>
        <div className="absolute top-[128px] right-24 z-0">
          <img
            src={img9}
            alt="Bottom Right"
            className="rounded-lg  w-32"
          />
        </div>
        <div className="absolute top-[30px] right-56 z-0">
          <img
            src={img4}
            alt="Bottom Right"
            className="rounded-lg  w-28"
          />
        </div>
        <div className="absolute top-[30px] right-0 z-0">
          <img
            src={img2}
            alt="Bottom Right"
            className="rounded-lg  w-28"
          />
        </div>
        <div className="absolute bottom-[5px] right-60 z-0">
          <img
            src={img8}
            alt="Bottom Right"
            className="rounded-lg  w-16"
          />
        </div>
        <div className="absolute bottom-[5px] right-0 z-0">
          <img
            src={img1}
            alt="Bottom Right"
            className="rounded-lg  w-16"
          />
        </div>
      </div>

    </section>
  )
}

export default Banner


