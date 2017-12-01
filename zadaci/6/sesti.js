//Napisati funkciju koja prima niz i vraća drugi niz sa obrnutim redosledom elemenata, 
//tako da je poslednji element u prvom nizu bude prvi element u poslednjem nizu, pretposlednji drugi, itd... 
//Primer: [15, 3, 9, 69, 100] > [100, 69, 9, 3, 15]

function primiNiz(prviNiz){
	var drugiNiz=[];
	//prviNiz.reverse();
	drugiNiz.push(prviNiz.reverse());

	console.log(drugiNiz);
	
}
primiNiz([1,2,3,4,5,6,7])