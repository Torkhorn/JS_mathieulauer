console.log("je fonctionne");
var data = srcListe;



var monUl = document.createElement("ul");
monUl.classList.add("list-group")
var monWrap = document.getElementById("wrap");
// var monWrap = document.querySelector("div#wrap ul li.eleve");

// function qui ajoute un li dans le ul, prends en paramètre l'objet eleve
function addBtnProfile(elem) {
    var btnProfile = document.createElement("span");
    btnProfile.classList.add("badge")
    btnProfile.innerHTML = "<span class='glyphicon glyphicon-user' aria-hidden='true'></span>";
    btnProfile.addEventListener("click", detectClick);
    elem.appendChild(btnProfile);
}
function addBtnDelete(elem) {
    var deleteBtn = document.createElement("span");
    deleteBtn.classList.add("badge")
    deleteBtn.innerHTML = "<span class='glyphicon glyphicon-trash' aria-hidden='true'></span>";
    deleteBtn.addEventListener("click", deleteEleve);
    elem.appendChild(deleteBtn);
}
function addBtnEdit(elem) {
    var deleteEdit = document.createElement("span");
    deleteEdit.classList.add("badge")
    deleteEdit.innerHTML = "<span class='glyphicon glyphicon-pencil' aria-hidden='true'></span>";
    deleteEdit.addEventListener("click", editEleve);
    elem.appendChild(deleteEdit);
}

function bindList(eleve) {
    var monLi = document.createElement("li");
    monLi.innerHTML = eleve.nom + ' ' + eleve.prenom;
    // monLi.classList.add("eleve");
    monLi.classList.add("list-group-item");
    monLi.setAttribute("data-idEleve", eleve.id);

    addBtnProfile(monLi);
    addBtnDelete(monLi);
    addBtnEdit(monLi);
    

    // monLi.appendChild(deleteBtn);
    monUl.appendChild(monLi);
}

function removeElem(elem){
	// var query = "[data-ideleve=" + ideleve + "]"
	// var doc = document.querySelectorAll(query);
	// console.log(doc);
	elem.remove();

}
data.forEach(function(eleve) {
    // console.log(eleve);
    bindList(eleve);
});

monWrap.appendChild(monUl);

function detectClick(event) {
    event.preventDefault();
    // console.log(this);
    console.log(event);
    console.log(event.target);
    var myTarget = event.target.parentNode.parentNode;
    console.log(myTarget);
    var eleveId = myTarget.getAttribute("data-idEleve");
    console.log(eleveId);

    window.location = "./profil.html" + '#' + myTarget.getAttribute("data-idEleve");
}

var monBtn = document.getElementById("addNew");
monBtn.addEventListener("click", function(event) {
    document.getElementById("myForm").classList.toggle("show");

});


function submitForm(event) {
    // event.preventDefault();
    console.log("submitted");
    var monForm = document.getElementById("newUser").elements;
    var newUser = {
        id: data.length + 1
    };
    console.log(typeof monForm);
    // console.log( monForm[0]);
    _.forIn(monForm, function(item) {
        console.log(item);
        newUser[item.name] = item.value;

    });
    console.log(newUser);
    data.push(newUser);
    bindList(newUser);
    console.log(data);

};

function deleteEleve(event) {
    event.preventDefault();
    console.log("delete");
    console.log(event);
    console.log(event.target);
    var myTarget = event.target.parentNode.parentNode;
    console.log(myTarget);
    var eleveId = myTarget.getAttribute("data-ideleve");
    console.log(eleveId)
    var myIndex = data.findIndex(function(i) {
        return i.id === eleveId
    });
    data.splice(myIndex, 1);
    removeElem(myTarget);
    // console.log(myIndex);

    // // je cherche l'eleve correspondant a l'index
    // var monuser = dataList[myIndex];
    // console.log(monuser);

};
function editEleve(event){
	console.log("edit");
	document.getElementById("myForm").classList.toggle("show");
	var myTarget = event.target.parentNode.parentNode;
	console.log(myTarget);
	var eleveId = myTarget.getAttribute("data-idEleve");
    console.log(eleveId);
    var myIndex = data.findIndex(function(i) {
        return i.id === parseFloat(eleveId);
    }); 
    console.log(myIndex);
	var monForm = document.getElementById("newUser").elements;
	_.forIn(monForm, function(item) {
        // console.log(item.value);
        // console.log(item.name);
        item.value = data[myIndex][item.name];
        // newUser[item.name] = item.value;

    });



};