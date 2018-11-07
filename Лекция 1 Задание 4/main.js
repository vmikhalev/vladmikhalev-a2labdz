var bt = document.getElementById('btime');
var blessons = document.getElementById('blessons');

var tt = document.getElementById('timetable');
var lt = document.getElementById('lessonstable');


 tt.style.visibility = "hidden";

function time() {
	lt.style.visibility = "hidden";
	tt.style.visibility = "visible";
}
function lessons() {
	tt.style.visibility = "hidden";
	lt.style.visibility = "visible";
}