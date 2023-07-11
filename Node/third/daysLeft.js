function getDaysLeft(startDate, endDate) {
 
    const start = new Date(startDate);
    const end = new Date(endDate);
    const difference = end - start;
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return days;
    }
  module.exports = getDaysLeft;