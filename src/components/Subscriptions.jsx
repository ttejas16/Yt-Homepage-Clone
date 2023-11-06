import SidebarItem from "./SidebarItem";
import { BsCircleFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const iconArr = [
    {
        name: "Channel Name 0",
        icon: BsCircleFill,
    },
    {
        name: "Channel Name 1",
        icon: BsCircleFill,
    },
    {
        name: "Channel Name 2",
        icon: BsCircleFill,
    },
    {
        name: "Channel Name 3",
        icon: BsCircleFill,
    },
    {
        name: "Channel Name 4",
        icon: BsCircleFill,
    },
    {
        name: "Channel Name 5",
        icon: BsCircleFill,
    },
    {
        name: "Show More",
        icon: MdKeyboardArrowDown,
    },

];

function Subscriptions({ isExtend }) {
    return (
        <>
            <div className="flex flex-col pl-[0.7em] w-full">
                {
                    isExtend &&
                    <h2 className="pl-3 pb-1">Subscriptions</h2>
                }
                {
                    isExtend &&
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
           
        </>
    )
}

export default Subscriptions;