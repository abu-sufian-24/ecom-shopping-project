import { useState } from "react";
import Avatar from "react-avatar";
import Logo from "../../assets/images/Logo1_red_text.png";
import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [isShow, setIsShow] = useState(window.innerWidth > 980);

  const Greetings = () => {
    let myDate = new Date();
    let hours = myDate.getHours();
    let greet;

    if (hours < 12) greet = "morning";
    else if (hours >= 12 && hours <= 17) greet = "afternoon";
    else if (hours >= 17 && hours <= 24) greet = "evening";

    return <span>Good {greet},</span>;
  };

  const sidebarWidth = isShow ? "w-64" : "w-0 opacity-0 invisible";

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`${sidebarWidth} fixed top-0 left-0 bg-[#2E3A59] text-white h-full flex flex-col transition-all duration-200`}
      >
        {/* Sidebar Header */}
        <div className="p-6 text-2xl font-semibold border-b border-gray-700 flex items-center justify-between">
          <img src={Logo} alt="logo" className="w-40" />
          {window.innerWidth < 970 && (
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              onClick={() => setIsShow(!isShow)}
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
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
          )}
        </div>

        {/* Menu */}
        <nav className="flex-1 mt-4">
          <ul>
            <li className="p-3 hover:bg-[#475569] cursor-pointer">
              <NavLink className="block" to={"/dashboard"}>
                Dashboards
              </NavLink>
            </li>
            <li className="p-3 hover:bg-[#475569] cursor-pointer">
              <NavLink className="block" to={"/dashboard/category"}>
                Category
              </NavLink>
            </li>
            <li className="p-3 hover:bg-[#475569] cursor-pointer">
              <NavLink className="block" to={"/dashboard/product"}>
                Products
              </NavLink>
            </li>
            <li className="p-3 hover:bg-[#475569] cursor-pointer">
              <NavLink className="block" to={"/"}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-0 md:ml-64">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white px-6 py-4 shadow-md z-10 flex items-center justify-between">
          <button
            onClick={() => setIsShow(!isShow)}
            className="border h-10 w-10 mr-3 flex justify-center items-center cursor-pointer"
          >
            <svg
              className="w-6 h-6 text-gray-800"
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
                d="M6 6h8m-8 4h12M6 14h8m-8 4h12"
              />
            </svg>
          </button>

          <div className="mr-auto">
            <h1 className="text-lg font-semibold">
              {Greetings()} Abu Sufian
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <ul className="flex">
                <li>
                  <Avatar size="40" name={"sufian"} />
                </li>
                <li>
                  <button className="w-10 h-10 ml-2 bg-red-600 flex justify-center items-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="mt-16 p-6 bg-gray-100 h-full overflow-auto">
          <div className="px-4 py-6 bg-white rounded h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
