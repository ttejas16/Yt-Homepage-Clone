
function TopicCard({ tname, isActive, handleClick, index }) {
    const bg = isActive ? "bg-slate-50" : "bg-neutral-800";
    const textColor = isActive ? "text-neutral-800" : "";

    return (
        <div className="text-sm shrink-0">
            <button className={`${bg} ${textColor} px-[0.9em] py-[0.4em] rounded-lg font-medium `}
                onClick={() => handleClick(index)}>
                {tname}
            </button>
        </div>
    )
}

export default TopicCard;