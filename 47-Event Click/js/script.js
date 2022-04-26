//Click

var btn = document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", function(){
    console.log("Clicado");
    console.log(this);
    this.style.color = "red";
});

