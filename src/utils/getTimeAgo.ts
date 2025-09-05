const getTimeAgo = (date: string) => {
    const now = new Date();
    const messageDate = new Date(date);
    const seconds = Math.floor((now.getTime() - messageDate.getTime()) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 30) return `چند لحظه پیش`;
    else if (seconds < 60) return `${seconds} ثانیه پیش`;
    else if (minutes < 60) return `${minutes} دقیقه پیش`;
    else if (hours < 24) return `${hours} ساعت پیش`;
    else if (days < 2) return `دیروز`;
    else if (days < 7) return `${days} روز پیش`;
    else if (weeks < 4) return `${weeks} هفته پیش`;
    else if (months < 2) return `یک ماه پیش`;
    else if (months < 12) return `${months} ماه پیش`;
    else return `${years} سال پیش`;
};
export default getTimeAgo;