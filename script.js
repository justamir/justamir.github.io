// smootscroll
// var posY = 0;
// var jarak = 20;

// function smoothScroll(id) {

// 		var target = document.getElementById(id).offsetTop;

// 		var scrool = setTimeout(function() {
// 			smoothScroll(id);
// 		},15)

// 	posY=posY + jarak;

// 	if (posY >= target) {
// 		clearTimeout(scrool);
// 		posY = 0;
// 	}else{
// 		window.scroll(0,posY)
// 	}

	
// return false;

// }




// validasi form

function validasi(form) {
	var lolos=true;
	var errorText='';

	for (i =0; i < 3; i++){

		if (form[i].value.trim().length<=0){

			switch(i){
				case 0 : errorText = 'nama'; break;
				case 1 : errorText = 'email'; break;
				case 2 : errorText = 'pesan'; break;
				default:
			}



			if (form[i].nextElementSibling.className != 'error') {
				form[i].style.borderColor = '#ff2b2b';
				form[i].insertAdjacentHTML('afterend',"<div class='error'>"+errorText+" tidak boleh kosong !</div>");
			}

			lolos = false;
		}else{
			if (form[i].nextElementSibling.className == 'error') {
				form[i].style.borderColor = '#ff2b2b';
				form[i].nextElementSibling.remove();
			}
		}
	}

	return lolos;
}
	
		