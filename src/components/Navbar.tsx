import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {useState} from "react"

const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <nav className="bg-blue-900 text-white  py-4 px-7">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-[Poppins,sans-serif]">
          SandBox
        </h1>
        <div className="font-semibold  gap-x-5 text-xl hidden md:flex">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/services">Services</Link>
        </div>
        <GiHamburgerMenu className="text-white text-3xl md:hidden" onClick={()=>setIsOpen(!isOpen)}/>
      </div>
      {
        isOpen &&
          <div className="flex flex-col items-center justify-center text-xl">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/services">Services</Link>
        </div>
      }


    </nav>
  );
};

export default Navbar;
