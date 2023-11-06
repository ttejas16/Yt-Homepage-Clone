import { useButtonContext } from "../utils/useButtonContext";

function SidebarItem({ Icon, name, isExtend }) {

    const obj = useButtonContext();
    const bgStr = obj.activeButtonName === name ? "bg-neutral-800" : "";
    const width = isExtend ? "w-[90%]" : "w-[65%]";

    return (
        <button
            onClick={() => obj.handleClick(name)}
            className={`${width} ${bgStr} hover:bg-neutral-800 
            py-[0.6em] pl-[0.7em] rounded-lg flex justify-start items-center gap-x-6 `}
        >

            <Icon
                size={'22px'}
                className="bg-inherit" />

            {
                isExtend &&
                <p className="bg-inherit text-sm font-medium">{name}</p>
            }

        </button>
    )
}

export default SidebarItem;