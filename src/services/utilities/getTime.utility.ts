export const getTime = () => {
    const date = new Date();

    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDay()}`.padStart(2, '0');

    const hour = `${date.getHours()}`.padStart(2, '0');
    const minutes = `${date.getMinutes()}`.padStart(2, '0');
    const seconds = `${date.getSeconds()}`.padStart(2, '0');

    const dateComplete = `${year}-${month}-${day}`;
    const time = `${hour}:${minutes}:${seconds}`;

    const fullTime = dateComplete + ' ' + time;

    return { dateComplete, time, fullTime };
};
