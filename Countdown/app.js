const finalDate = new Date("December 24 2022 23:59:59");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

setInterval(calculateCountdown, 1000);

function calculateCountdown() {
  const startDate = new Date();
  const diff = finalDate - startDate;
  console.log(diff);
  console.log(startDate);

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours < 10 ? "0" + hours : hours;
  minutesElement.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  secondsElement.innerHTML = seconds < 10 ? "0" + seconds : seconds;
}
