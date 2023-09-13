import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";
import logo from "../assets/logo.png"

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center text-gray-500 font-semibold">
        <Link to='/' className="flex justify-center items-center">
          <img src={logo} alt="logo" className="w-14" />
          ExcoCylce</Link>
        <div>
          <ul className="hidden md:flex items-center gap-10">
            <li className="hover:text-[#367E02]">
              <Link to="/">News</Link>
            </li>
            <li className="hover:text-[#367E02]">
              <Link to="/">About</Link>
            </li>
            <li className="hover:text-[#367E02]">
              <Link to="/">Science Policy</Link>
            </li>
            <li className="hover:text-[#367E02]">
              <Link to="/">Activity</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex gap-3">
          <button className="">Login</button>
          <button className="border">Sign up</button>
        </div>
        <div
          className="flex md:hidden cursor-pointer transition duration-500"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {showSidebar ? (
            <LiaTimesSolid className="text-gray-500" size={30} />
          ) : (
            <HiOutlineBars3 className="text-gray-500" size={30} />
          )}
        </div>
        {/* Mobile sidebar */}
        {showSidebar && (
          <div className="absolute transition duration-1000 ease-out md:hidden block bg-[#367E02] top-0 left-0 h-full w-3/4">
            <ul
              className="flex flex-col gap-10 text-white m-10 hover:text-lime-100 mt-20"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <li>
                <Link to="/">News</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Science Policy</Link>
              </li>
              <li>
                <Link to="/">Activity</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
