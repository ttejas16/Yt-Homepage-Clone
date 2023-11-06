
function parseViews(num) {
    const viewsString = String(num);
    if (num >= 1000000) {
        return `${viewsString[0]}.${viewsString[1]}M views`;
    }
    else if(num >= 100000){
        return `${viewsString.slice(0,3)}K views`;
    }
    else if(num >= 1000){
        return `${viewsString[0]}.${viewsString[1]}K views`;
    }
    return `${viewsString} views`;
}

export { parseViews };