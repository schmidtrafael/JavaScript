//Click

var btn = document.querySelector("#btn");


btn.addEventListener("click", function(){
    console.log("Clicado");
    console.log(this);
    this.style.color = "red";
});

// click afetando elementos
var title = document.querySelector("#title");

title.addEventListener("click", function(){
    
    var title = document.querySelector("#title")
    title.style.display = "none";
});