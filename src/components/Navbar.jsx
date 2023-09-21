import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const nav = document.querySelector("#nav");
      if (window.scrollY > 0) {
        nav.classList.add("shadow-lg");
      } else {
        nav.classList.remove("shadow-lg");
      }
    });
  }, []);
  return (
    <div className="fixed w-full p-4 bg-white z-20" id="nav">
      <div className="flex justify-between items-center text-gray-500 font-semibold md:mx-6">
        <Link to="/" className="flex justify-center items-center">
          <img src={logo} alt="logo" className="w-14" />
          ExcoCylce
        </Link>
        <div>
          <ul className="hidden md:flex items-center gap-10">
            <li className="hover:text-primary">
              <Link to="/">News</Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/">Science Policy</Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/">Activity</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex gap-3">
          <button className="">Login</button>
          <button className="border">Sign up</button>
        </div>
        <div
          className="flex md:hidden cursor-pointer transition duration-1000"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {showSidebar ? (
            <LiaTimesSolid
              className="text-gray-500 fixed right-4 top-7"
              size={30}
            />
          ) : (
            <HiOutlineBars3
              className="text-gray-500 fixed right-4 top-7"
              size={30}
            />
          )}
        </div>
        {/* Mobile sidebar */}

        <div
          className={`fixed transition-all duration-500 ease-out md:hidden block bg-white top-0 h-full w-[300px] ${
            showSidebar ? "left-0" : "-left-[300px]"
          }`}
        >
          <Link to="/" className="flex items-center mx-10 mt-5">
            <img src={logo} alt="logo" className="w-14" />
            ExcoCylce
          </Link>

          <ul
            className="flex flex-col gap-10 text-primary m-10 mt-20"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <li>
              <Link to="/">News</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Science Policy</Link>
            </li>
            <li>
              <Link to="/">Activity</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
