import { Link } from "react-router";
import logo from "../assets/images/logo1.png";
import flag from "../assets/images/italyflag.png";
import { FaRegHeart } from "react-icons/fa";
import { AiTwotoneShopping } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" border-dashed border-b-2">
      <div className="flex justify-between items-center px-4 py-3 md:justify-around">
        {/* Logo */}
        <div className="flex items-center">
          <button
            className="text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <AiOutlineMenuFold />
          </button>
          <Link to={"/"}>
            <img
              src={logo}
              alt="Logo"
              className="h-8 ml-4 md:ml-0 md:h-10"
            />
          </Link>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to={"/"} className="text-lg">
            Manifesto
          </Link>
          <Link to={"/best-collection"} className="text-lg">
            Collezione
          </Link>
          <Link to={"/contact"} className="text-lg">
            Contatti
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          <div className="flex items-center ">
            <img className=" hidden md:block w-10 mt-2" src={flag} alt="Flag" />
            <span className=" hidden md:block ">IT</span>
            < div className=" hidden md:block dropdown <RiArrowDropDownLine />" >
              <div tabIndex={0} role="button" className=" mt-[-5px] text-lg"><RiArrowDropDownLine className="text-xl" />
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-20 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div >
          </div>
          <FaRegHeart className="ml-4 text-xl hidden md:block" />
          <span className="ml-4 text-lg hidden md:inline">|</span>
          <div className="flex items-center relative">
            <AiTwotoneShopping className="ml-4 text-2xl" />
            <span className=" text-sm w-5 h-5 bg-red-600 text-white rounded-full text-center absolute top-[-5px] left-8">1</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FFF7E5] p-4">
          <Link
            to={"/"}
            className="block py-2 text-lg border-b border-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Manifesto
          </Link>
          <Link
            to={"/best-collection"}
            className="block py-2 text-lg border-b border-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Collezione
          </Link>
          <Link
            to={"/contact"}
            className="block py-2 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Contatti
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;






