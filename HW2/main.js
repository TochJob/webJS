//1
/*
let a = 1, b = 1, c, d;
c=++a; //к с прибавляется значение а, увеличенного на 1 на этой же строке
// alert(c); //2

d = b++; //b увеличит свое значение не не этой строке, а лишь на следующей. Тем самым, d === 1;
// alert(d)// 1 

c = 2 + ++a; // сначалf a === 2 (мы увеличели переменную на 4 строке). Затем к ней прибавили еще единицу. Тем самым ответ получился 5
// alert(c); //5

d = 2 + b++; // на данной строке b === 2. Его изменения произойдут только на следующей строке;
alert(d); //4

alert(a); // Переменные были изменены ранее в вычичслениях, к ним дважды прибавлялась единица
alert(b); // Переменные были изменены ранее в вычичслениях, к ним дважды прибавлялась единица
*/


//2

//let a = 2;
//let x = 1 + (a*=2); //5 . Сначала происходит действие в скобках, они мимеют более высокий приоритет. a умножается в два раза. И лишь только затем прибавляется единица.

//3

const a = 15;
const b = -23;
let res;

if (a >= 0 && b >= 0){
	res = a - b;
	console.log(res);
} else if (a < 0 && b < 0){
	res = a * b;
	console.log(res);
} else if(a >= 0 && b < 0 || a < 0 && b>= 0) {
	res = a + b;
	console.log(res);
}



// 4

function sum(arg1, arg2) {
	return arg1 + arg2;
} ;

function min(arg1, arg2) {
	return arg1 - arg2;
};

function mult(arg1, arg2) {
	return arg1 * arg2;
};

function div(arg1, arg2) {
	return arg1 / arg2;
};


//5

function mathOperation(arg1, arg2, operation){
	switch (operation) {
		case 'sum':
			return sum(arg1, arg2);
			break;
		case 'min':
			return min(arg1, arg2);
			break;
		case 'mult':
			return mult(arg1, arg2);
			break;
		case 'div':
			return div(arg1, arg2);
			break;
		default:
			console.log('Введите нормально');
			break;
	}
}



