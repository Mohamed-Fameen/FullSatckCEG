const readline = require('readline');
const getDaysLeft = require('./daysLeft');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter the start date (YYYY-MM-DD): ', (startDate) => {
  rl.question('Enter the end date (YYYY-MM-DD): ', (endDate) => {
    const daysLeft = getDaysLeft(startDate, endDate);
    console.log(`Number of days left: ${daysLeft}`);
    rl.close();

  });

});
