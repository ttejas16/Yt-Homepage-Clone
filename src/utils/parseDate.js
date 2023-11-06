
function parseDate(dateString) {
    const arr = dateString.split('/');
    const month = Number(arr[0]);
    const day = Number(arr[1]);
    const year = Number(arr[2]);

    const d = new Date();

    const nowDay = d.getDate();
    const nowMonth = d.getMonth() + 1;
    const nowYear = d.getFullYear();

    let res;

    if (year < nowYear) {
        res = nowYear - year;
        if (res > 1) {
            return `${res} years ago`;
        }
        return `${res} year ago`;
    }
    else if (month < nowMonth) {
        res = nowMonth - month;
        if (res > 1) {
            return `${res} months ago`;
        }
        return `${res} month ago`;
    }
    else if (day < nowDay) {
        res = nowDay - day;
        if (res > 1) {
            return `${res} days ago`;
        }
        return `${res} day ago`;
    }
    return "Today";


}

export { parseDate }