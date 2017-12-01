//Napisati funkciju koja prima tri parametra. Prvi parametar treba da bude niz brojeva, drugi parametar početni index i drugi krajnji index. 
//Sabrati elemente niza od početnog do krajnjeg indexa.
//Primer ulaznih podataka [10, 33, 77, 50, 9, 17, 3, 120], 2, 5 > sabrati brojeve od 2. do 5. indexa uključujuci i 2. i 5.
//Primer izlaznih podataka: 153

function nekaFunkcija(niz, x, y){

	var sum = 0;
	for (var i = x; i <= y; i++) {
		sum += niz[i];
	}
	console.log(sum);
}
nekaFunkcija([10, 33, 77, 50, 9, 17, 3, 120], 2, 5)
