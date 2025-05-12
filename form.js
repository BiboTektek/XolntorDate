function trueMod(a, b) {
	return ((a % b) + b) % b;
}

function isLeap(year) {
	return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function xDayTrue(year, month, day) {
	if (year > 0) {
		if (isLeap(year + 2020) == false || month[0] <= 4) {
			return trueMod(day - 1, 73) + 1;
		} else if (month[0] == 5) {
			return trueMod(day - 292, 75);
		}
	} else {
		if (isLeap(year + 2021) == false || month[0] <= 4) {
			if (day == 0) {
				return 1;
			} else {
				return trueMod(day - 1, 73) + 1;
			}
		} else if (month[0] == 5) {
			return trueMod(day - 292, 75);
		}
	}
}

function xMonth(day) {
	if (0 <= day && day <= 73) {
		return [1, "Flŷr"];
	}
	if (74 <= day && day <= 146) {
		return [2, "Hôd"];
	}
	if (147 <= day && day <= 219) {
		return [3, "Xalôd"];
	}
	if (220 <= day && day <= 292) {
		return [4, "Dêxalt"];
	}
	if (293 <= day && day <= 366) {
		return [5, "Naichalt"];
	}
}

function toXolntor(date) {
	let DATE = new Date(date);
	const oneDay = 1000 * 86400;
	
	let start = new Date("2019-03-26");
	let diff = (DATE - start) / oneDay;
	console.log(diff);
	
	let yearX = Math.floor(diff / 365.2425);
	if (yearX <= 0) {
		yearX -= 1;
	}
	
	let dayX = Math.ceil(trueMod(diff, 365.2425));
	
	console.log(xDayTrue(Math.floor(diff / 365.2425), xMonth(dayX), dayX));
	console.log(xMonth(dayX)[1]);
	console.log(yearX);
	return xDayTrue(yearX, xMonth(dayX), dayX).toString() + " " + xMonth(dayX)[1] + " " + yearX.toString();
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
