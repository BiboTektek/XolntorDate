function toXolntor(date) {
	let DATE = new Date(date);
	
	let start = new Date(DATE.getFullYear(), 0, 0);
	let diff = DATE - start + ((start.getTimezoneOffset() - DATE.getTimezoneOffset()) * 60 * 1000);
	const oneDay = 1000 * 60 * 60 * 24;
	let currentDay = Math.floor(diff / oneDay);
	
	let yearG = DATE.getFullYear();
	let yearX = yearG - 2019;
	if (currentDay < 84) {
		yearX -= 1;
	}
	
	if (yearX < 1) {
		yearX = Math.abs(yearX) + 1 + " NX";
	} else {
		yearX = yearX + " EX"
	}
	
	let monthX = Math.floor((currentDay + 64) / 74);
	if (leapYear(DATE.getFullYear()) == true) {
		monthX = Math.floor((currentDay + 63) / 74);
	} else {
		monthX = Math.floor((currentDay + 64) / 74);
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
	if (leapYear(DATE.getFullYear()) == true && currentDay !== 60) {
		dayX -= 1;
	}
	if (dayX == 0) {
		dayX = 73;
	}
	
	console.log(dayX, monthX, yearX);
	return dayX.toString() + " " + monthText + " " + yearX;
}

function formFunc(event) {
	event.preventDefault();
	
	const form = document.getElementById("form");
	const text = document.getElementById("form-text");
	
	const formData = new FormData(form);
	for (var p of formData) {
		let value = p[1];
		
		text.innerHTML = toXolntor(value);
	}
}
form.addEventListener("submit", formFunc);
