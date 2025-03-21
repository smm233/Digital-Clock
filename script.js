let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let currentTime = new Date();

hours.innerHTML = currentTime.getHours();
minutes.innerHTML = currentTime.getMinutes();
seconds.innerHTML = currentTime.getSeconds();