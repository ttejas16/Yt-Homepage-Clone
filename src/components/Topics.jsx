import { useState } from "react";
import TopicCard from "./TopicCard";

let topicNames = [
    "All",
    "Computer Programming",
    "Live",
    "strategy games",
    "Recently Uploaded",
    "Food",
    "Travel",
    "Gaming",
    "Engineering",
    "Mappa",
    "Anime",
    "Desktop Computers",
    "Japanese Cuisine",
    "Travelling"

];

function Topics() {
    const [activeIndex, setActiveIndex] = useState(0);

    function handleChangeActive(index) {
        setActiveIndex(index);
    }

    return (
        <div className="w-full flex justify-start items-start gap-x-4 overflow-x-scroll pt-[0.8em] pb-[1em] no-scrollbar sticky top-14">
            {
                topicNames.map((item, index) => {
                    return (
                        <TopicCard
                            key={index}
                            tname={item}
                            isActive={index === activeIndex}
                            handleClick={handleChangeActive}
                            index={index} />
                    )
                })
            }
        </div>
    )
}
export default Topics;