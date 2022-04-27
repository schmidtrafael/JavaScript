// KeyDown

document.addEventListener("keydown", function(event) {

    if(event.key === "Enter") {
        console.log("Apertou Enter");
    }

});

// KeyUp

document.addEventListener("keyup", function(event) {

    if(event.key === "Enter") {
        console.log("Soltou Enter");
    }
    
});