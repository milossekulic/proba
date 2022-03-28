var milos = document.getElementById("helou");
milos.innerText = "Cao"
console.log("prvi zahtev ispunjen");
milos.innerText += "Milose";
console.log("drugi zahtev ispunjen");
milos.innerHTML += "<h1> majmune </h1>";

// milos.style.background = "blue";
// milos.style.color = "red";
// milos.style.width = "200px";

milos.style.cssText = "background:blue; color:red; width:200px";
console.log("treci zahtev ispunjen");


console.log(getComputedStyle(milos));


var varijabla = document.getElementsByName("automobili")[0];
console.log(varijabla);
varijabla.onclick = function(event){
    console.log(event);
};
varijabla.addEventListener("click",function(event){
    console.log("kliknuo si");
})


console.log(milos);
milos.onclick = function(event){
    console.log("kliknuo siiii debiluuuu");
};

var dodaj_element = document.createElement("div");
dodaj_element.style.cssText = "background:green; width:300px; height: 300px";
dodaj_element.onclick = function(event){alert("PAZI SAD");};

for (var i = 0; i<5; i++) {
    var dodaj_element = document.createElement("div");
    dodaj_element.style.cssText = "background:green; width:300px; height: 300px";
    dodaj_element.onclick = function(event){alert("PAZI SAD");};
    document.body.appendChild(dodaj_element);
    console.log("prvi zahtev ispunjen");

}
//document.body.appendChild(dodaj_element);

//document.body.insertBefore(dodaj_element,varijabla);
