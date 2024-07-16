const css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomBtn");

function setGradient() {
    body.style.background = 
        `linear-gradient(to right, ${color1.value}, ${color2.value})`;

    css.textContent = body.style.background + ";";
}

function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor.padStart(6, '0');
}

function setRandomColors() {
    color1.value = `#${getRandomColor()}`;
    color2.value = `#${getRandomColor()}`;
    setGradient(color1.value, color2.value);
}
  
setGradient(color1.value, color2.value);
randomBtn.addEventListener("click", setRandomColors);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);