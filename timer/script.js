function startCountdown() {
    var inputDate = document.getElementById('date').value;
    var inputTime = document.getElementById('time').value;
  
    if (!inputDate || !inputTime) {
      alert("Please select both date and time.");
      return;
    }
  
    // Combine date and time strings into a single string
    var targetDateTimeString = inputDate + 'T' + inputTime;
  
    // Set the target time
    var countDownDate = new Date(targetDateTimeString).getTime();
  
    // Update the countdown every 1 second
    var x = setInterval(function() {
      // Get the current date and time
      var now = new Date().getTime();
  
      // Calculate the distance between now and the countdown date
      var distance = countDownDate - now;
  
      // Calculate days, hours, minutes, and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the countdown timer
      document.getElementById("countdown").innerHTML = "Countdown: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);
  }
  