//3. Napisati funkciju koja prima niz kao parameter i sabira prvi i poslednji element niza. Funkcija treba da podržava niz bilo koje veličine. 
//Hint: iskoristiti length.

function arr(niz){
	var sum = 0;
	for (var i = 0; i<niz.length; i++) {
		sum = niz[0] + niz[niz.length -1]
	}

	console.log(sum)
}
arr([3,5,2,9,8])
