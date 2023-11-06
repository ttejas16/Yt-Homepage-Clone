import { useState } from "react";
import { ButtonContext } from "../utils/buttonContext";
import { FiMenu } from "react-icons/fi";

import Info from "./Info";
import Pages from "./Pages";
import Subscriptions from "./Subscriptions";


function Sidebar({ isExtend, isHidden, refSetter, handler, showHiddenDiv }) {

    const [activeButon, setActiveButton] = useState("Home");

    const width = !isExtend ? "xl:min-w-[80px]" : null;
    const display = isHidden ? "hidden" : "block";

    function handleChangeActiveButton(name) {
        setActiveButton(name);
    }


    return (
        <ButtonContext.Provider value={{
            handleClick: handleChangeActiveButton,
            activeButtonName: activeButon,
        }}>

            <div ref={refSetter}
                className={`fixed top-0 z-10 h-[90vh] pt-[0.5em] xl:pt-[0.8em] min-w-[230px]
                            xl:sticky xl:top-14 
                            ${width} 
                            ${isHidden ? "animate-slide-out" : "animate-slide-in"}
                            xl:animate-none `}>
                {
                    showHiddenDiv &&
                    <div className="flex items-center gap-x-1 md:gap-x-4 pl-6 pb-2 mb-3">
                        <button onClick={handler}>
                            <FiMenu size={'20px'} />
                        </button>
                        <button className="">
                            <img src="/src/assets/logo.svg" />
                        </button>
                    </div>
                }
                <Pages isExtend={isExtend} />
                <Info isExtend={isExtend} />
                {
                    isExtend &&
                    <Subscriptions isExtend={isExtend} />
                }

            </div>

        </ButtonContext.Provider>
    )
}

export default Sidebar;