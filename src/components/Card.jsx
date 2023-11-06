import { BsCircleFill } from "react-icons/bs";
import { parseDate } from "../utils/parseDate";
import { parseViews } from "../utils/parseViews";
import { BsCardImage } from "react-icons/bs";

function Card({ data, isReferred }) {

    return (
        <div ref={isReferred} className="w-full h-full max-h-full col-span-1">

            <div className="max-h-[60%] h-[12rem] w-full flex justify-center items-center border-[0.5px]">
                <BsCardImage size={'25px'} className=" opacity-[1]"/>
                {/* <img
                    src="/src/assets/test.jpg"
                    alt=""
                    className="w-full h-full rounded-lg hover:rounded-none object-cover"
                    draggable="false" /> */}
            </div>

            <div className="max-h-[40%] w-full pt-3 flex ">

                <div>
                    <BsCircleFill size={'35px'} />
                </div>

                <div className="px-3">
                    <div className="line-clamp-2 leading-5">
                        {data["video_title"]}
                    </div>

                    <div className="text-sm pt-1 ">
                        <div className="text-neutral-400 line-clamp-1">
                            Channel Name
                        </div>
                        <div className="text-neutral-400 line-clamp-1">
                            {parseViews(data["video_views"]) + " • "}
                            {parseDate(data["video_upload_date"])}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Card;