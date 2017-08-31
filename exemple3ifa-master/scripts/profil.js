console.log('nouveau script profil');
// je récupère la liste
var dataList = srcListe;
// je recupere l'url ici  
var url = window.location;
// je recupere le hashtag 
var eleveId = url.hash;
// console.log(url);
// console.log("je suis sur la page profil de l'elève avec l'id : " + eleveId);

// console.log(eleveId);

// j'enleve le hashtag pour recuperer l'id en string
eleveId  = eleveId.substring(1);
console.log(typeof eleveId);

eleveId  = parseFloat(eleveId);
console.log(typeof eleveId);


// je cherche l'index dans la liste
var myIndex = dataList.findIndex(function(i){ return i.id === eleveId });
console.log(myIndex);

// je cherche l'eleve correspondant a l'index
var monuser = dataList[myIndex];
console.log(monuser);

// je cherche les elements a binder
var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
// je remplis avec le contenu de l'objet mon user
nom.innerHTML = monuser.nom;
prenom.innerHTML = monuser.prenom;








// dataList.forEach(function(item){
// 	if(item.id === parseFloat(eleveId)){
// 		console.log("j'ai trouvé le bon eleve");
// 		console.log(item);
// 	}
// 	else{
// 		console.log("ce n'est pas le bon");
// 	}
// });

// var i0 = dataList.findIndex(i => i.id === eleveId);

// var i1 = dataList.findIndex(function(i){ return i.id === eleveId });

// var i2 = dataList.map(function(item) { return item.id; }).indexOf(eleveId);
// i2 = i2.indexOf(eleveId);

// console.log("i1: " + i1);
// console.log("i2: " + i2);
// console.log( i2);


// var t = "bonjour a tous";

// console.log(t.substring(1,3));

