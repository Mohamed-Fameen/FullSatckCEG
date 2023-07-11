module.exports = {
    getDaysLeft: function(targetDate) {
      const currentDate = new Date();
      const timeDiff = targetDate.getTime() - currentDate.getTime();
      const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return daysLeft;
    }
  };
  