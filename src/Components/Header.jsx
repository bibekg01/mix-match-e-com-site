import { FaSearch } from "react-icons/fa";
import Logo from '../assets/Logo.png'
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { useState } from "react";
import AddNewProduct from "../api/addNewProducr";
import { useSelector } from "react-redux";

const Header = () => {
    const cartCount = useSelector((state) => state.cart.cartCount)
    console.log(cartCount);
    const [popUps, setPopUps] = useState(false);
  return (
    <>
    <div className="flex justify-evenly h-28 bg-[#064789] text-white font-bold text-2xl items-center">
        <div>
            <img src={Logo} alt="" className="size-[200px]"/>
        </div>
        <div className="hidden xl:block">
            category
        </div>
        <div className="flex">
            <input type="search" name="" id="" className="rounded-3xl text-xl px-3 pl-12 w-[250px] h-[35px] md:w-[300px] xl:w-[400px] md:h-[50px] text-black font-normal" />
            <FaSearch  className="absolute text-black ml-3 mt-2 md:mt-3  opacity-50"/>
        </div>
        <div className="border-2 border-[#064789] py-1 px-2 rounded-xl flex gap-2 hover:border-slate-100 hover:shadow-xl cursor-pointer">
            <RxAvatar className="mt-1"/>
            login
        </div>
        <div className="border-none p-2 px-2 bg-cyan-500 rounded-xl hover:bg-cyan-400 cursor-pointer hidden xl:block text-lg" 
        onClick={()=> setPopUps(true)}> 
            Add Product
        </div>
        <div>
        <p className="ml-10 mt-3 border bg-slate-300 text-black w-8 text-center rounded-xl text-lg ">{cartCount}</p>
        <PiShoppingCartSimpleBold  className="size-10 "/>
        </div>
    </div>


        {popUps && 
        <div className="absolute bg-[gray] bg-opacity-20 w-[200vh] h-[100vh] text-center ">
            <h1 className="text-white text-3xl absolute text-end"> X</h1>
            <div>
                <AddNewProduct
                onClick={''}
                />
            </div>
        </div>
        }

    </>
  )
}

export default Header;