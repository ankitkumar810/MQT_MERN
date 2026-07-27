window.onload = function () {

    let bulb = document.getElementById("bulb");
    let onButton = document.getElementById("onBtn");
    let offButton = document.getElementById("offBtn");

    onButton.addEventListener("click", function () {
        bulb.style.backgroundColor = "yellow";
        bulb.style.boxShadow = "0px 0px 40px rgba(255, 255, 0, 0.5)";
    });

    offButton.addEventListener("click", function () {
        bulb.style.backgroundColor = "white";
        bulb.style.boxShadow = "none";
    });

};