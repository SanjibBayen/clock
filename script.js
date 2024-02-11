let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
function clock() {
  let time = new Date();
  let hrr = time.getHours();
  let minn = time.getMinutes();
  let secc = time.getSeconds();
  let hrRotete = 30 * hrr + minn / 2;
  let minRotete = 6 * minn;
  let secRotete = 6 * secc;
  hr.style.transform = `rotate(${hrRotete}deg)`;
  min.style.transform = `rotate(${minRotete}deg)`;
  sec.style.transform = `rotate(${secRotete}deg)`;
}
setInterval(clock, 1000);
//next
const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  modeSwitch = document.querySelector(".mode-switch");

const str1 = document.getElementById("test");
function clock2() {
  k = new Date();
  let p = k.getHours();
  let q = k.getMinutes();
  let r = k.getSeconds();
  const str = `${p} : ${q} : ${r}`;
  str1.innerText = str;
}
clock2();
setInterval(clock2, 1000);

//next

// function dateToday() {
//   let day = new Date();
//   switch (day.getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//       break;
//     default:
//       day = "unknown";
//   }
//   document.getElementById("d").innerHTML = "Today is " + day;
// }
// dateToday();
//new
const d = new Date();
document.getElementById("d2").innerHTML = d.toDateString();
