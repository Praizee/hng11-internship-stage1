// To display both UTC and local time
function updateTimeAndDay() {
  const currentTimeUTCElement = document.getElementById("currentTimeUTC");
  const currentTimeLocalElement = document.getElementById("currentTimeLocal");
  const currentDayElement = document.getElementById("currentDay");

  const now = new Date();
  const utcTime = now.toUTCString();
  const localTime = now.toLocaleTimeString();
  const day = now.toLocaleDateString("en-US", { weekday: "long" });

  currentTimeUTCElement.textContent = utcTime;
  currentTimeLocalElement.textContent = localTime;
  currentDayElement.textContent = day;
}

document.addEventListener("DOMContentLoaded", updateTimeAndDay);

/* 

UTC time only

*/

// function updateTimeAndDay() {
//   const currentTimeElement = document.getElementById("currentTime");
//   const currentDayElement = document.getElementById("currentDay");

//   const now = new Date();
//   const utcTime = now.toUTCString();
//   const day = now.toLocaleDateString("en-US", { weekday: "long" });

//   currentTimeElement.textContent = utcTime;
//   currentDayElement.textContent = day;
// }

// document.addEventListener("DOMContentLoaded", updateTimeAndDay);
