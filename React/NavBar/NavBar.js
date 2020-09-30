import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const NavBar = (props) => {

  const [drop, setDrop] = useState(false)
  const [show, setShow] = useState(false)
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {    
    if (!showScroll && window.pageYOffset > 50){
        setShowScroll(true)    
    } else if (showScroll && window.pageYOffset <= 50){
        setShowScroll(false)    
    }  
  };
  window.addEventListener('scroll', checkScrollTop)

  useEffect(() => {
    const clickHandler = () => {
      if (drop === true) {
        setDrop(!drop);
      } return
    };
    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  });

  return (
    <>
      <div className={`fixed w-full bg-transparent  ${showScroll === true ? 'bg-whitel' : ''}`}>
        <div className="max-w-screen-xl flex flex-row py-8 px-4 justify-between w-full mx-auto relative ">
          <img src={props.logo} className="cursor-pointer" alt="logo" />
          <div className="block md:hidden">
            <HiOutlineMenuAlt4 className={`text-3xl mt-2 ${show === true ? 'text-grey' : ''}`} onClick={() => setShow(!show)}></HiOutlineMenuAlt4>
          </div>
          <div className={`absolute z-10 mt-16 rounded-md right-0 mr-4 bg-whitel p-4 space-y-8 flex-col md:hidden ${show? " " : "hidden"}`}>
            <div className={`mx-3 font-thin self-center cursor-pointer relative ${props.menuItem} ${drop === true ? 'text-grey' : ''}`} onClick={() => setDrop(!drop)}> <span className="flex flex-row items-center space-x-2"> <span>Our Sectors</span><FiChevronDown className="text-lg"></FiChevronDown></span>
              <div className={`absolute z-10 mt-4 space-y-3 rounded-md bg-whitel py-2 px-8 ${drop ? "block" : "hidden"}`}>
                <p className={`text-center ${props.menuItemSub}`}>Hydro</p>
                <p className={`text-center ${props.menuItemSub}`}>Wind</p>
                <p className={`text-center ${props.menuItemSub}`}>Solar</p>
              </div>
            </div>
            <div className={`mx-3 font-thin self-center cursor-pointer ${props.menuItem}`}>Our Services</div>
            <div className={`mx-3 font-thin self-center cursor-pointer ${props.menuItem}`}>Get a Quotation</div>
            <div className={`mx-3 font-thin self-center cursor-pointer ${props.menuItem}`}>Contact Us</div>
          </div>

          <div className="flex flex-row hidden md:flex">
            <div className={`mx-3 z-10 font-thin self-center cursor-pointer relative ${props.menuItem} ${drop === true ? 'text-grey' : ''}`} onClick={() => setDrop(!drop)}> <span className="flex flex-row items-center space-x-2"> <span>Our Sectors</span><FiChevronDown className="text-lg"></FiChevronDown></span>
              <div className={`absolute z-10 mt-4 space-y-3 ${drop ? "block" : "hidden"}`}>
                <p className={`${props.menuItemSub}`}>Hydro</p>
                <p className={`${props.menuItemSub}`}>Wind</p>
                <p className={`${props.menuItemSub}`}>Solar</p>
              </div>
            </div>
            <div className={`mx-3 font-thin self-center cursor-pointer ${props.menuItem}`}>Our Services</div>
            <div className={`mx-3 font-thin self-center cursor-pointer ${props.menuItem}`}>Get a Quotation</div>
            <div className={`mx-3 font-thin self-center cursor-pointer ${props.menuItem}`}>Contact Us</div>
          </div>
        </div>
      </div>

    </>
  );
}

export default NavBar;
