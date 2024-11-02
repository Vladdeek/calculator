let num;
let temp;
let oper;
let combinedNumber = ' ';
let combinated;
let result;
let repoper = false;
let id;

function inputvalue(button) {
	const value = button.value;
	combinedNumber += value.toString();
    document.getElementsByClassName('textscreen')[0].innerText = combinedNumber;
    console.log(combinedNumber);
}
function inputoper(button) {
	if(oper == null){
		oper = button.value;
		if(result == null){
			temp = combinedNumber;
		}
		combinedNumber = ' ';
		document.getElementsByClassName('textscreen')[0].innerText = oper;
	    console.log(oper);
	    id = button.id;
	    const buttstl = document.querySelector('#' + id);
		buttstl.style.background = "rgba(159,232,250,1)";
		buttstl.style.filter = "drop-shadow(0px 0px 10px rgba(159,232,250,1))";
	}
	else{
		const buttstl = document.querySelector('#' + id);
		buttstl.removeAttribute('style');
		id = button.id;
		repoper = true;
		calcresult();
		oper = button.value;
		buttstl = document.querySelector('#' + id);
		buttstl.style.background = "rgba(159,232,250,1)";
		buttstl.style.filter = "drop-shadow(0px 0px 10px rgba(159,232,250,1))";
	}
}
function calcresult() {
	const buttstl = document.querySelector('#' + id);
	buttstl.removeAttribute('style');
	num = combinedNumber;
	combinated = temp + ' ' + oper + num;
	console.log(combinated);
	var tempcheck = checkFloatingPoint(temp);
	var numcheck = checkFloatingPoint(num);
	if (tempcheck || numcheck) {
		console.log("Хотя бы одна переменная содержит плавающую точку.");
		result = parseFloat(eval(combinated));
	} 
	else {
		console.log("Ни одна переменная не содержит плавающую точку.");
	    result = eval(combinated); //решает все в одну строку
	}
	console.log(result);
	document.getElementsByClassName('textscreen')[0].innerText = result;
	temp = result;
	if (repoper == true){
		combinedNumber = ' ';
		repoper = false;
		console.log('Повторное нажатие оператора - ' + combinated);
	}
	else{
		oper = null;
		console.log(' нажатие на равно - ' + combinated);
	}
	document.getElementsByClassName('history')[0].innerText = combinated;
}

function checkFloatingPoint(str) {
    // Проверяем наличие хотя бы одной плавающей точки
    return /\./.test(str);
}

function allclear(){
	console.log('clear');
	document.getElementsByClassName('textscreen')[0].innerText = ' ';
	document.getElementsByClassName('history')[0].innerText = ' ';
	combinedNumber = ' '
	console.log(combinedNumber);
	num = null;
	console.log(num);
	temp = null;
	console.log(temp);
	oper = null;
	console.log(oper);
	result = null;
	console.log(result);
	combinated = null;
	console.log(combinated);
	const buttstl = document.querySelector('#' + id);
	buttstl.removeAttribute('style');
}