//Napisati funkciju koja prima niz brojeva i sabira poslednja tri. Funkcija treba da podržava niz bilo koje veličine
function nizBrojeva(niz){
	var sum = 0;
	for (var i = 0; i<niz.length; i++) {
		sum = niz[niz.length -1] + niz[niz.length - 2] + niz[niz.length -3]
	}
	console.log(sum);
}
nizBrojeva([3,4,6,7,8,9,10])