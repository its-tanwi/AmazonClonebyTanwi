import React from "react"
import logo from "../../images/logo.png"
import Image from "next/image"
import cartIcon from "../../images/cart.png";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";


const Header = () => {
  return (
    <div className="w-full h-20 bg-amazon_blue  text-lightText sticky top-0 z-50">
     <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
    {/*Logo*/}
       <Link href={"/"}className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%]">
        <Image className="w-28 object-cover" src={logo} alt="logoImg"/>
        </Link>
    {/*delivery*/}
      <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%]">
        <CiLocationOn/>
        <div className="text-xs">
          <p>Deliver to</p>
          <p className="text-white font-bold uppercase">India</p>
        </div>
      </div>
    {/*searchbar*/}
   <div className="flex-1 h-10 flex items-center justify-between relative">
      <input
        className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black bg-white border border-transparent outline-none focus-visible:border-amazon_yellow"
        type="text"
        placeholder="Search amazon products"
      />
      <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex
                items-center justify-center absolute right-0 rounded-md rounded-br-md">
        <HiOutlineSearch/>
      </span>
      </div>
      {/*signin*/}
      <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%]">
        <p>Hello signIn</p>
        <p className="text-white font-bold flex item-center">Accounts & Lists{" "}
          <span><BiCaretDown/></span>
        </p>
      </div>
      {/*favourite*/}
      <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%]">
        <p>Marked</p>
        <p className="text-white font-bold">&Favourites</p>
        </div>
        {/*cart*/}
        <Link href={"/cart"} className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] relative">
          <Image className="w-auto object-cover" src={cartIcon} alt="cartImg"/>
          <p className="text-ml text-white font-bold mt-3">Cart</p>
          <span className="absolute text-amazon_yellow text-sm top-2 left-[30px] font-bold">0</span>
        </Link>





    </div>
</div>
    
  );
};

export default Header;
