var todoList = ["Membuat Todo List"];

function Data() {
	var tabel = document.getElementById('body');
	tabel.innerHTML = '';

	for(let i = 0; i < todoList.length; i++) {
		// var edit = "<button onclick='Edit("+ i +")'>edit</button>";
		var hapus = "<button onclick='Hapus("+ i +")'>hapus</button>";

		tabel.innerHTML += 
		"<tr>" +
		"<td>"+ todoList[i] +"</td>" +
		"<td data-header='Action :'>"+ hapus +"</td>"+
		"</tr>"
	}
}


Data();

function Add() {
	var input1 = document.querySelector("input[name=text]");
	var PopUpEdit = document.querySelector(".PopUpEdit");
	if (input1.value == '') {
		PopUpEdit.style.display = 'flex';
	} else {
		todoList.push(input1.value);
		input1.value ='';
	}
	Data();
}
function oke() {
	var PopUpEdit = document.querySelector(".PopUpEdit")
	PopUpEdit.style.display = 'none';
}
function Hapus(h) {
	todoList.splice(h, 1);
	Data();
}