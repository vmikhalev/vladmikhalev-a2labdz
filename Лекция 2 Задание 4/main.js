	var verh_reg = new Array('А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','V','W','X','Y','Z');
	var number = new Array('1','2','3','4','5','6','7','8','9','0');
	var spec_symb = new Array('$','%',';','@','&','#');
	function ok(){
		var login = document.getElementById('log').value;
		var pass = document.getElementById('pass').value;
		var sim_error = false;
		var reg_error = false;
		var num_error = false;
		var symb_error = false;
		var length_error = true;
		var len = pass.length;
		var dog = 1;
		var dog_num = 0;
		var dog_error = false;
		var tochka_error = true;

		for(var i = 0;i < pass.length;i++){

			if (pass[i] == "'" || pass[i] == '^' || pass[i] == ':' || pass[i] == ',' || pass[i] == '/' || pass[i] == '"') {
				sim_error = true;
			}

			for(var b = 0;b < verh_reg.length; b++){
				if (pass[i] == verh_reg[b]) {
					reg_error = true;
				}
			}

			for(var c = 0;c < number.length;c++){
				if (pass[i] == number[c]) {
					num_error = true;
				}
			}

			for(var d = 0;d < spec_symb.length;d++){
				if (pass[i] == spec_symb[d]) {
					symb_error = true;
				}
			}
		}
		if (len < 8) {
			length_error = false;
		}



		for (var i = 0; i < login.length; i++) {
			if (login[i] == '@'){
				dog_num++;
			}
		}

		if (dog_num != 1) {
			dog_error = true;
		}


		for (var i = 0; i < login.length; i++) {
			if (login[i] == '.') {
				tochka_error = false;
			}
		}
if (dog_error == true) {
	alert('В логине должен быть одни символ @');
}
if (tochka_error == true) {
	alert('Не указан почтовый домен с точкой');
}

		if (sim_error == true) {
			alert('В вашем пароле есть служебные символы ');
		}
		if (reg_error == false) {
			alert('В пароле должна быть хотя бы одна большая буква');
		}
		if (num_error == false) {
			alert('В пароле должна быть хотя бы одна цифра');
		}
		if (symb_error == false) {
			alert('В пароле должен быть хотя бы один из символов $%;@&');
		}
		if (length_error == false) {
			alert('Пароль слишком короткий, не меньше 8 знаков');
		}



		if (sim_error == false && reg_error == true && num_error == true && symb_error == true && length_error == true && dog_error == false && tochka_error == false) {
			alert("Все хорошо");
		}

	}