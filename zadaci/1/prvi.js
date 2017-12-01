//Napisati funkciju koja prima broj od 1-10. 
//Unutar funkcije generisati nasumičan broj (Math.random) od 1-10 i ispisati korisniku da li je pogodio broj ili ne.



function broj (n){
	var unesiBr = prompt('Unesi broj od 1 do 10');
	if (1<unesiBr<=10) {
		console.log('unijeli ste dobar broj');
	} else{
		console.log('niste unijeli dobar broj');
	}

	var izborKompjutera = Math.floor(Math.random() * 10 + 1);
	console.log(izborKompjutera);

	if (unesiBr===izborKompjutera) {
		document.write('pogodio si');
	}else{
		document.write('nisi pogodio');
	}
}