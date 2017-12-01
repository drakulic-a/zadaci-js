//Napisati funkciju koja prima 4 broja, posebno sabira pozitivne,
//posebno negativne i vraća njihov proizvod (pozitivni * negativni)

function brojevi(niz){
	var sumPoz = 0;
	var sumNeg = 0;
	for (var i = 0; i < niz.length; i++) {
		if(niz[i]>0){
			sumPoz += niz[i];
		}else{
			sumNeg += niz[i];
		}
	}

	console.log(sumNeg);
	console.log(sumPoz);
	console.log('proizvod' sumPoz*sumNeg);
	

}

brojevi([3,6,-9,8])
