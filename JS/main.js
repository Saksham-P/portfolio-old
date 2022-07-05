document.addEventListener("mousemove", parallax);
const elem = document.getElementById("mainPage");
const elem1 = document.getElementById("left");

const interestText = document.getElementById("interests");
const interestList = ["Web Development", "Game Development", "Software Development"];
const interestLinks = [""];

function parallax(e) {
    let windowWidth = window.innerWidth/2;
    let windowHeight = window.innerHeight/2;
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let backgroundX = `${0 - (mouseX - windowWidth) * 0.02}% `;
    let backgroundY = `${0 - (mouseY - windowHeight) * 0.05}%`;
    let foregroundX = `${0 - (mouseX - windowWidth) * 0.01}%`;
    let foregroundY = `${0 - (mouseY - windowHeight) * 0.03}%`;
    let x = `${backgroundX}`;
    let y = `${backgroundY}`;
    let x1 = `${foregroundX}`;
    let y1 = `${foregroundY}`;
    console.log(x1);
    elem.style.backgroundPositionX = x;
    elem.style.backgroundPositionY = y;
    elem1.style.transform = `translateX(${x1}) translateY(${y1})`;
}

function showInterests() {
    let k = 1;
    const interval = setInterval(function(){
        if (interestText.style.getPropertyValue('--dynamic-width') != '100%') {
            interestText.style.setProperty('--dynamic-width', `${k}%`);
            k++;
        }
        else {
            k = 1;
            interestText.style.setProperty('--dynamic-width', `${k}%`);
            for (let i = 0; i < interestList.length; i++) {
                if (interestText.textContent == interestList[i]) {
                    if (i < interestList.length-1) {
                        interestText.textContent = interestList[i+1];
                    }
                    else {
                        interestText.textContent = interestList[0];
                    }
                    break;
                }
            }
        }
    },40);
}