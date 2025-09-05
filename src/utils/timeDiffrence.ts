const differenceBetweenDates = (firstDate: Date, secondDate: Date) => {
    const firstDateInMS = firstDate.getTime();
    const secondDateInMS = secondDate.getTime();
    const differenceInMS = Math.abs(firstDateInMS - secondDateInMS);

    const millisecondsInMinute = 60 * 1000;
    const millisecondsInHour = 60 * millisecondsInMinute;
    const millisecondsInDay = 24 * millisecondsInHour;
    const millisecondsInMonth = 30 * millisecondsInDay; // Approximation
    const millisecondsInYear = 12 * millisecondsInMonth; // Approximation

    const years = Math.floor(differenceInMS / millisecondsInYear);
    const months = Math.floor((differenceInMS % millisecondsInYear) / millisecondsInMonth);
    const days = Math.floor((differenceInMS % millisecondsInMonth) / millisecondsInDay);
    const hours = Math.floor((differenceInMS % millisecondsInDay) / millisecondsInHour);
    const minutes = Math.floor((differenceInMS % millisecondsInHour) / millisecondsInMinute);

    return {
        years,
        months,
        days,
        hours,
        minutes
    };
};

export default differenceBetweenDates;