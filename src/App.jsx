import { useRef, useState } from 'react'

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Content from "./components/Content"


function App() {
    const [isExtend, setExtend] = useState(window.innerWidth >= 1280);
    const [isHidden, setIsHidden] = useState(window.innerWidth < 1280);
    const [showHiddenDiv, setIsHiddenDiv] = useState(false);

    const SidebarRef = useRef();

    function handler() {
        if (window.innerWidth >= 1280) {
            setExtend(!isExtend);
        }
        else {
            if (!isExtend) {
                setExtend(true);
            }
            setIsHidden(!isHidden);
            setIsHiddenDiv(!showHiddenDiv);
        }
    }

    function setRef(ref) {
        SidebarRef.current = ref;
    }

    window.onresize = () => {
        setIsHiddenDiv(false);
        if (window.innerWidth >= 1280 && isHidden) {
            setIsHidden(false);
        }
        if (window.innerWidth < 1280 && !isHidden) {
            setIsHidden(true);
        }
    }



    return (
        <>
            {
                showHiddenDiv &&
                <div className={`fixed top-0 left-0 w-full h-full z-10 opacity-[0.5]`} 
                    onClick={() => {
                        setIsHidden(!isHidden);
                        setIsHiddenDiv(!showHiddenDiv);
                }}></div>
            }
            <section className="w-full flex flex-col justify-start items-center">
                <Navbar handler={handler} />
                <section className="flex w-full justify-start items-start">
                    <Sidebar
                        isExtend={isExtend}
                        refSetter={setRef} 
                        isHidden={isHidden} 
                        handler={handler} 
                        showHiddenDiv={showHiddenDiv} />
                    <Content isExtend={isExtend} />

                </section>
            </section>
        </>
    )
}

export default App
