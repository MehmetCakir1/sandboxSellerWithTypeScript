import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {useState} from "react"

const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <nav className="bg-blue-900 text-white  py-4 px-7">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold font-[Poppins,sans-serif]">
          SandBox
        </Link>
        <div className="font-semibold  gap-x-5 text-xl hidden md:flex">
          <p><NavLink to="/" end className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>Home</NavLink></p> 
          <p><NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>About</NavLink></p> 
          <p><NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>Contact Us</NavLink></p>
          <p><NavLink to="/services" className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>Services</NavLink></p>
        </div>
        <GiHamburgerMenu className="text-white text-3xl md:hidden" onClick={()=>setIsOpen(!isOpen)}/>
      </div>
      {
        isOpen &&
          <div className="flex flex-col items-center justify-center text-xl md:hidden">
          <NavLink to="/" end className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>Contact Us</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>Services</NavLink>
        </div>
      }


    </nav>
  );
};

export default Navbar;
