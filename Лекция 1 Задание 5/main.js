var answer = document.getElementById('answer');

function summ(){
	var first = document.getElementById('firstn').value;
	var second = document.getElementById('secondn').value;
	var s = parseFloat(first) + parseFloat(second);
	answer.innerHTML = "Ответ: " + s;
}

function subt(){
	var first = document.getElementById('firstn').value;
	var second = document.getElementById('secondn').value;
	var s = parseFloat(first) - parseFloat(second);
	answer.innerHTML = "Ответ: " + s;
}

function mult(){
	var first = document.getElementById('firstn').value;
	var second = document.getElementById('secondn').value;
	var s = parseFloat(first) * parseFloat(second);
	answer.innerHTML = "Ответ: " + s;
}

function div(){
	var first = document.getElementById('firstn').value;
	var second = document.getElementById('secondn').value;
	var s = parseFloat(first) / parseFloat(second);
	answer.innerHTML = "Ответ: " + s;
}

function sqrt(){
	var first = document.getElementById('firstn').value;
	var second = document.getElementById('secondn').value;
	var s = Math.sqrt(first);
	var d = Math.sqrt(second);
	answer.innerHTML = "Ответ: корень первого числа = " + s + ", корень второго числа = " + d;
}

function cukl(){
	var first = document.getElementById('firstn').value;
	var second = document.getElementById('secondn').value;
	var s = 1;
	var d = 1;

	for(var i=1;i<=parseFloat(first); i++){
     s = s*i;
	}

	for(var i=1;i<=parseFloat(second); i++){
     d = d*i;
	}


	answer.innerHTML = "Ответ: факториал первого числа = " + s + ", факториал второго числа = "+ d;

}
