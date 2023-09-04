    let startTime;
    let stopwatchInterval;
    let elapsedTime = 0;

    function startStopwatch() {
      startTime = Date.now() - elapsedTime;
      stopwatchInterval = setInterval(updateStopwatch, 10);
    }

    function stopStopwatch() {
      clearInterval(stopwatchInterval);
    }

    function resetStopwatch() {
      clearInterval(stopwatchInterval);
      elapsedTime = 0;
      document.getElementById("timer").innerText = "00:00:000";
    }

    function updateStopwatch() {
      const currentTime = Date.now();
      elapsedTime = currentTime - startTime;

      const formattedTime = formatTime(elapsedTime);
      document.getElementById("timer").innerText = formattedTime;
    }

    function formatTime(timeInMilliseconds) {
      const minutes = Math.floor(timeInMilliseconds / 60000);
      const seconds = Math.floor((timeInMilliseconds % 60000) / 1000);
      const milliseconds = Math.floor(((timeInMilliseconds % 60000) % 1000));

      const formattedMinutes = padNumber(minutes);
      const formattedSeconds = padNumber(seconds);
      const formattedMilliseconds = padNumber(milliseconds);

      return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
    }

    function padNumber(number) {
      return number.toString().padStart(2, "0");
    }