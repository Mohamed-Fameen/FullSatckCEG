const dateLeft = require('./dateLeft');

const targetDate = new Date("2023-12-31");
const daysLeft = dateLeft.getDaysLeft(targetDate);

console.log("Days Left: " + daysLeft);
