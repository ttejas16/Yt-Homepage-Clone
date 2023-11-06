import { GoHomeFill } from "react-icons/go";
import { BsCollectionPlay, BsPlayCircle } from "react-icons/bs";
import SidebarItem from "./SidebarItem";

const iconArr = [
    {
        name: "Home",
        icon: GoHomeFill,
    },
    {
        name: "Shorts",
        icon: BsPlayCircle,
    },
    {
        name: "Subscriptions",
        icon: BsCollectionPlay,
    },
];

function Pages({ isExtend }) {
    return (
        <>
            <div className="flex flex-col pl-[0.7em] w-full">
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

export default Pages;