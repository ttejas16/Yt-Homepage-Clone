import { Profiler } from "react";

import Grid from "./Grid";
import Topics from "./Topics";

function Content({ isExtend }) {
    function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
        console.log(id);
        console.log(actualDuration);
    }

    return (
        <div className={`flex flex-col justify-center items-start px-3 sm:px-5 w-[100%] xl:min-w-[900px] `}>
            <Topics />

            {/* <Profiler id="grid" onRender={onRender}> */}
                <Grid />
            {/* </Profiler> */}
        </div>
    )
}

export default Content;