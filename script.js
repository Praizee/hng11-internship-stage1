// To display both UTC and local time
function updateTime() {
  const now = new Date();
  const utcTime = now.toUTCString();
  const localTime = now.toLocaleTimeString();
  const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });

  document.getElementById("currentTimeUTC").textContent = utcTime;
  document.getElementById("currentTimeLocal").textContent = localTime;
  document.getElementById("currentDay").textContent = currentDay;
}

// display time
updateTime();

// Update time every second
setInterval(updateTime, 1000);
