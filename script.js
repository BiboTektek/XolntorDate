const date = new Date();
const xoln = document.getElementById("xolntor");
const greg = document.getElementById("gregorian");

let start = new Date(date.getFullYear(), 0, 0);
let diff = date - start + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
const oneDay = 1000 * 60 * 60 * 24;
let currentDay = Math.floor(diff / oneDay);

let yearG = date.getFullYear();
let yearX = yearG - 2019;
if (currentDay < 85) {
	yearX -= 1;
}

if (yearX < 1) {
	yearX = Math.abs(yearX) + 1 + " NX";
} else {
	yearX = yearX + " EX"
}

let monthX = Math.floor((currentDay + 63) / 74);
if (leapYear(DATE.getFullYear()) == true) {
	monthX = Math.floor((currentDay + 62) / 74);
} else {
	monthX = Math.floor((currentDay + 63) / 74);
}
let monthText = "-1";

switch(monthX) {
	case 0:
		monthText = "Dêxalt";
		break;
	case 1:
		monthText = "Naichalt";
		break;
	case 2:
		monthText = "Flŷr";
		break;
	case 3:
		monthText = "Hômid";
		break;
	case 4:
		monthText = "Flŷrxalt";
		break;
	case 5:
		monthText = "Dêxalt";
		break;
}

let dayX = ((currentDay + 135) % 73) + 1;
if (leapYear(date.getFullYear()) == true && currentDay !== 60) {
	dayX -= 1;
}
if (dayX == 0) {
		dayX = 73;
}

xoln.innerHTML = dayX.toString() + " " + monthText + " " + yearX + " EX";
greg.innerHTML = date.getDate() + " " + date.toLocaleString("default", {month:"long"}) + " " + date.getFullYear();

function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
