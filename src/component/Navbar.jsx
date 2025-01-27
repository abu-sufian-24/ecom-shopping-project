import { Link } from "react-router-dom"; // Correct import for React Router
import logo from "../assets/images/logo1.png";
import flag from "../assets/images/italyflag.png";
import { FaRegHeart } from "react-icons/fa";
import { AiTwotoneShopping, AiOutlineMenuFold } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { AuthContext } from "../context";
import Avatar from "react-avatar";
import { toast } from "react-toastify";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut().then((result) => {
      console.log(result)
      toast.success("LogOut success")
    })
      .catch((error) => {
        toast.error(error.message)
      });
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-4 py-3 md:justify-between md:px-10">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center">
          <button
            className="text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <AiOutlineMenuFold />
          </button>
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="h-8 ml-4 md:ml-0 md:h-10" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to={"/"} className="text-lg hover:text-gray-600">
            Manifesto
          </Link>
          <Link to={"/best-collection"} className="text-lg hover:text-gray-600">
            Collezione
          </Link>
          <Link to={"/contact"} className="text-lg hover:text-gray-600">
            Contatti
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          <div className="flex items-center">
            <img className="hidden md:block w-10 mt-2" src={flag} alt="Flag" />
            <span className="hidden md:block ml-2">IT</span>
            <div className="hidden md:block relative">
              <button className="text-lg flex items-center">
                <RiArrowDropDownLine className="text-xl" />
              </button>
              <ul className="absolute bg-white border rounded shadow-lg hidden group-hover:block">
                <li className="px-4 py-2 hover:bg-gray-100">Item 1</li>
                <li className="px-4 py-2 hover:bg-gray-100">Item 2</li>
              </ul>
            </div>
          </div>
          <FaRegHeart className="ml-4 text-xl hidden md:block" />
          <span className="ml-4 text-lg hidden md:inline">|</span>
          <div className="flex items-center relative">
            <Link to={"/cart"}>
              <AiTwotoneShopping className="ml-4 text-2xl" />
              <span className="text-sm w-5 h-5 bg-red-600 text-white rounded-full text-center absolute top-[-5px] left-8">
                1
              </span>
            </Link>
          </div>
          {
            user && (<>
              <span className="ml-4"><Avatar size="40" name={user?.email} /></span>
              <button
                onClick={handleLogOut}
                className="ml-2 bg-red-500 text-white"
              >
                <svg
                  className="logout-bnt-logo "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                  />
                </svg>
              </button>
            </>)

          }
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
