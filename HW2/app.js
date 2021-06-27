'use strict'

let money = parseInt(prompt('Сколько денег вы хотите положить на счет?'));


function getCase(num) {
	let beforeLastSymb = getBeforeLastSymb(num);
	if (beforeLastSymb === 1) {
		return 'рублей';
	}

	num = String(num);
	let lastNumb = Number(num.charAt(num.length - 1));
	switch (lastNumb) {
		case 0:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
			return "рублей";
		case 1:
			return "рубль";
		case 2:
		case 3:
		case 4:
			return "рубля";
	}
}

function getBeforeLastSymb(num){
	num = String(num);
	let digit = num.charAt(num.length - 2);
	if (digit !== "") {
		return Number(digit);
	}
	return null;
}

if (!money) {
	alert('Вы ничего не ввели. Попробуйте снова.');
}else {
	alert(`Ваша сумма ${money} ${getCase(money)} успешно зачислена!`);
}