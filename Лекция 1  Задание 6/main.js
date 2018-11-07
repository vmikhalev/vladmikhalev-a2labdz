function diskr(){
		var a = document.getElementById('a').value;
		var b = document.getElementById('b').value;
		var c = document.getElementById('c').value;
		var d = b * b - 4*a*c;
		var kd = Math.sqrt(d);
		var first = 0;
		var second = 0;

		if (a == 0 && b == 0 && c == 0) {
			alert('Введите числа');
		}else if (d > 0) {
			first = (-b - kd)/(2*a);
			second = (-b + kd)/(2*a);
			document.getElementById('x1').innerHTML = "x1 = " + first;
			document.getElementById('null').innerHTML = "Ответ: ";
			document.getElementById('x2').innerHTML = "x2 = " + second;
		}else if (d == 0) {
			first = (-b)/(2*a);
			document.getElementById('x1').innerHTML = "";
			document.getElementById('null').innerHTML = "x = " + first;
			document.getElementById('x2').innerHTML = "";
		}else if (d < 0) {
			document.getElementById('x1').innerHTML = "";
			document.getElementById('null').innerHTML = "Решений данного уравнения нету ";
			document.getElementById('x2').innerHTML = "";
		}
	}