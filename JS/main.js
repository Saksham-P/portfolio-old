document.addEventListener("mousemove", parallax);
const elem = document.getElementById("mainPage");
const elem1 = document.getElementById("left");

function parallax(e) {
    let windowWidth = window.innerWidth/2;
    let windowHeight = window.innerHeight/2;
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let backgroundX = `${50 - (mouseX - windowWidth) * 0.03}% `;
    let backgroundY = `${50 - (mouseY - windowHeight) * 0.05}%`;
    let foregroundX = `${50 - (mouseX - windowWidth) * 0.01}%`;
    let foregroundY = `${50 - (mouseY - windowHeight) * 0.03}%`;
    let x = `${backgroundX}`;
    let y = `${backgroundY}`;
    let x1 = `${foregroundX}`;
    let y1 = `${foregroundY}`;
    console.log(x1);
    elem.style.backgroundPositionX = x;
    elem.style.backgroundPositionY = y;
    elem1.style.transform = `translateX(${x1}) translateY(${y1})`;
}