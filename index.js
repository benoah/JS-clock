const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourhand = document.querySelector(".hour-hand");
function setDate() {
  console.log("hekke");
  const now = new Date();
  const hour = now.getHours();
  const seconds = now.getSeconds();
  const minuts = now.getMinutes();
  const hourDegrees = (hour / 60) * 360 + 90;
  const minutsDegrees = (minuts / 60) * 360 + 90;
  const secondsDegrees = (seconds / 60) * 360 + 90;

  hourhand.style.transform = `rotate(${hourDegrees}deg)`;
  minHand.style.transform = `rotate(${minutsDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000);
