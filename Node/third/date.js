module.exports = {
    getCurrentDate: function() {
      const currentDate = new Date();
      return currentDate.toDateString();
    },
    
    getCurrentTime: function() {
      const currentTime = new Date();
      return currentTime.toTimeString().split(" ")[0];
    }
  };