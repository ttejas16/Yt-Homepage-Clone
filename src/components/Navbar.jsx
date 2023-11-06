import { FiMenu } from "react-icons/fi";
import { PiMicrophoneFill } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar({ handler }) {

    return (
        <div className="w-full flex items-center justify-between py-2 px-6 sticky top-0 ">
            <div className="flex items-center gap-x-1 md:gap-x-4">
                <button onClick={handler}>
                    <FiMenu size={'20px'} />
                </button>
                <button className="">
                    <img src="/src/assets/logo.svg" />
                </button>
            </div>

            <div className="hidden md:flex items-center gap-x-4">

                <div className="flex ">
                    <input type="text"
                        className="w-[28vw] border-[1.8px] border-neutral-700
                                px-4 py-[0.4em] rounded-l-full z-[1] bg-[#101010]
                                outline-none 
                                focus:outline-offset-0
                                focus:outline-sky-600
                                focus:outline-[0.5px]"
                        placeholder="Search" />

                    <button className="cursor bg-neutral-800 pl-5 pr-6 border-[1.8px] border-neutral-700 border-l-0 rounded-r-full "
                    >
                        <GoSearch className="bg-neutral-800" size={'20px'} />
                    </button>

                </div>


                <button className="p-2 bg-neutral-800 rounded-full">
                    <PiMicrophoneFill className="bg-neutral-800" size={'20px'} />
                </button>
            </div>

            <div className="flex gap-x-5 md:gap-x-6">
                <button className=" md:hidden">
                    <GoSearch  size={'20px'} />
                </button>
                <button>
                    <BiVideoPlus size={'25px'} />
                </button>
                <button>
                    <IoIosNotificationsOutline size={'25px'} style={{ border: '2px' }} />
                </button>
                <button>
                    <FaRegUserCircle size={'25px'} />
                </button>
            </div>
        </div>
    )
}

export default Navbar;