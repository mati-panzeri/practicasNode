const date = new Date();
const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
];
const [hour, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
];

module.exports = `<h1>${day}/${month}/${year} ${hour}:${minutes}:${seconds}</h1>`