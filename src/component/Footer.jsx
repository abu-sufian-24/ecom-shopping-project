import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import logo from "../assets/images/footerLogo.png";
import { Link } from "react-router";
import vector1 from "../assets/images/footer/Vector1.png";
import vector2 from "../assets/images/footer/Vector2.png";
import vector3 from "../assets/images/footer/Vector3.png";
import vector4 from "../assets/images/footer/Vector4.png";
import vector5 from "../assets/images/footer/Vector5.png";
import vector6 from "../assets/images/footer/Vector6.png";
import vector7 from "../assets/images/footer/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Promise Section */}
      <div className="bg-gray-900 text-white text-center py-12 px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">La Nostra Promessa</h2>
        <p className="text-sm md:text-lg max-w-3xl mx-auto mb-6 font-gilroy">
          Creiamo capi che parlano di te. Ogni capo è un manifesto etico e sostenibile,
          pensato per celebrare il linguaggio, rispettare il pianeta e durare nel tempo.
          Perché vestirsi è esprimere chi sei, senza compromessi.
        </p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">
          LEGGI DI PIÙ →
        </button>
      </div>

      {/* Quote Section */}
      <div className="text-center py-10 px-4">
        <p className="text-lg md:text-xl italic text-gray-600 max-w-xl mx-auto font-gilroy">
          "Non conosco nulla al mondo che abbia tanto potere quanto la parola.
          A volte ne scrivo una, e la guardo, fino a quando non comincia a splendere"
        </p>
        <p className="mt-4 font-semibold">Emily Dickinson</p>
      </div>

      {/* Logo and Newsletter Section */}
      <div className="text-center py-10 px-4 relative">
        <img
          className="absolute top-0 left-1/4 transform -translate-x-1/2 w-32 md:w-64 opacity-10"
          src={vector7}
          alt="Background Logo"
        />
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Footer Logo" className="w-40 md:w-52" />
        </div>
        <p className="text-gray-600 mt-3 text-base md:text-lg font-gilroy">
          Since 2018 proudly made with ❤️ in Italy
        </p>

        <div className="flex justify-center mt-6">
          <input
            type="email"
            placeholder="Your email address"
            className=" border rounded-s-md w-60 md:w-96  border-gray-300 py-1 px-2 md:py-2 md:px-4 focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-100 shadow-lg"
          />
          <button className="bg-red-600 text-white text-lg py-1 px-2  md:py-2 md:px-4 rounded-r-md hover:bg-red-700">
            SUBSCRIBE
          </button>
        </div>

      </div>

      {/* Social Media and Links */}
      <div className="bg-gray-200 ">
        <div className="flex flex-wrap justify-around items-center space-y-6 md:space-y-0 px-4 md:px-12 border-y border-gray-300 py-6">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <FaFacebookF className="text-gray-600 text-xl hover:text-red-600 cursor-pointer" />
            <BsFillThreadsFill className="text-red-600 text-xl" />
            <FaInstagram className="text-gray-600 text-xl hover:text-red-600 cursor-pointer" />
            <FaTwitter className="text-gray-600 text-xl hover:text-red-600 cursor-pointer" />
          </div>

          {/* Terms and Policies */}
          <p className="text-center text-sm md:text-base">
            Terms & Conditions | Privacy Policy | Cookie Policy | Shipping and Returns
          </p>

          {/* App Store Links */}
          <div className="flex space-x-4">
            <Link to="https://play.google.com/store/games?hl=en_US&gl=US" target="_blank">
              <img className="w-8 md:w-10" src={vector1} alt="App Store" />
            </Link>
            <Link to="https://play.google.com/store/games?hl=en_US&gl=US" target="_blank">
              <img className="w-8 md:w-10" src={vector2} alt="App Store" />
            </Link>
            <Link to="https://play.google.com/store/games?hl=en_US&gl=US" target="_blank">
              <img className="w-8 md:w-10" src={vector3} alt="App Store" />
            </Link>
            <Link to="https://play.google.com/store/games?hl=en_US&gl=US" target="_blank">
              <img className="w-8 md:w-10" src={vector4} alt="App Store" />
            </Link>
            <Link to="https://play.google.com/store/games?hl=en_US&gl=US" target="_blank">
              <img className="w-8 md:w-10" src={vector5} alt="App Store" />
            </Link>
            <Link to="https://play.google.com/store/games?hl=en_US&gl=US" target="_blank">
              <img className="w-8 md:w-10" src={vector6} alt="App Store" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-600 text-sm py-6">
        <p>
          Wortees s.r.l © 2024 - VAT IT1340090963 - REA MI 2704821 - Via Tortona 33, 20144 Milano
        </p>
      </div>
    </footer>
  );
}

export default Footer;
