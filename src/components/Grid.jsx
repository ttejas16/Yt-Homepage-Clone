import { useRef, useState } from "react";
import Data from "../data/data.json";
import Card from "./Card";

function Grid() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(Data);
    
    const ob = useRef();
    const id = useRef();

    function setRef(ref) {
        if (loading) {
            return;
        }
        if (ob.current) {
            ob.current.disconnect();
        }
        ob.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                fetchData();
            }
        })
        if (ref) {
            ob.current.observe(ref)
        }

    }


    async function fetchData() {
        const res = await fetch("http://localhost:5173/src/data/data.json");
        const newData = await res.json();
        

        clearTimeout(id.current);
        id.current = setTimeout(() => {
            setLoading(false);
            setData((prevData) => {
                return [
                    ...prevData,
                    ...newData,
                ]
            })
        }, 1500);

        setLoading(true);
    }

    /*
        when last div render render -> observer callback register -> 
        when last div intersects or comes in view -> callback fires -> 
        fetchdata -> loading -> render -> loaded -> render

    */ 

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 
                        xs:px-16 sm:px-0 gap-x-4 gap-y-3 pt-4">
            {
                data.length > 0 ? (
                    data.map((item, index) => {
                        if (index + 1 === data.length) {
                            return <Card isReferred={setRef} data={item} key={index} />
                        }
                        return <Card isReferred={undefined} data={item} key={index} />
                    })
                ) : null
            }
            {
                loading &&
                <div className="sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4 2xl:col-span-5 flex justify-center items-center">
                    <div className="pb-4 text-neutral-300">
                        Loading...
                    </div>
                </div>
            }
        </div>
    )
}

export default Grid;