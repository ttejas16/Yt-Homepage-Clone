import { GoHistory } from "react-icons/go";
import { BsClockHistory } from "react-icons/bs";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { PiUserSquareLight } from "react-icons/pi";
import SidebarItem from "./SidebarItem";


const iconArr = [
    {
        name: "Your Channel",
        icon: PiUserSquareLight,
    },
    {
        name: "History",
        icon: GoHistory,
    },
    {
        name: "Your Videos",
        icon: AiOutlinePlaySquare,
    },
    {
        name: "Watch Later",
        icon: BsClockHistory,
    }
];

function Info({ isExtend }) {
    return (
        <>
            <div className="flex flex-col pl-[0.7em] w-full">
                {
                    isExtend &&
                    <h2 className="pl-3 pb-1">You</h2>
                }
                {
                    iconArr.map((item, index) => {
                        return (
                            <SidebarItem
                                key={index}
                                Icon={item.icon}
                                isExtend={isExtend}
                                name={item.name}
                            />
                        )
                    })
                }
            </div>
            <hr className="w-[90%] my-[1em] border-neutral-700" />
        </>

    )
}

export default Info;