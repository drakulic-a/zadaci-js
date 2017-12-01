//Napisati funkciju koja prima niz i dva broja koji predstavljaju indexe. 
//Zameniti vrednosti u nizu na datim indexima. Primer: ako su indexi 3 i 10  potrebno je zameniti vrednosti niz[3] i niz[10]

function nizInd(niz, x, y){
	var c = niz[x];
	niz[x] = niz[y];
	niz[y] = c;

	console.log(niz);
}

nizInd([1,2,3,4,5,6,7,8], 3, 7)