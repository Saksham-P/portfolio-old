document.addEventListener("mousemove", parallax);
const elem = document.getElementById("mainPage");
const elem1 = document.getElementById("left");
var allowParallax = false;

const interestText = document.getElementById("interests");
const interestList = ["Web Development", "Game Development", "Software Development"];
const interestLinks = ["education.html", "experience.html", "index.html"];

function parallax(e) {
    if (allowParallax) {
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
}

function showInterests() {
    allowParallax = true
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
                        interestText.href = interestLinks[i+1];
                    }
                    else {
                        interestText.textContent = interestList[0];
                        interestText.href = interestLinks[0];
                    }
                    break;
                }
            }
        }
    },40);
}


// const divList = ["educationMain", "formalEdu", "onlineEdu", "Contact"]
// var scrollable = false;
// var index = 0;
// window.addEventListener("wheel", function(e) {
//     this.clearInterval;
//     this.clearTimeout;
//     if (scrollable) {
//         scrollable = false;
//         if (e.deltaY < 0) {
//             console.log('up');
//             if (index > 0) {
//                 index = index - 1;
//             }
//         }
//         else if(e.deltaY > 0) {
//             console.log('down');
//             if (index < 3) {
//                 index = index  + 1;
//             }
//         }
//         var temp = window.location.href;
//         for (var i = temp.length -1; i >= 0; i--) {
//             if (temp.charAt(i) == '#') {
//                 temp = temp.substring(0,i);
//                 break;
//             }
//         }
//         document.getElementById(divList[index]).click();
//         //window.location.replace(temp + "#Contact");
//         console.log(divList[index]);
//         scrollable = true;
//     }
// });
// const edu = document.getElementById("formalTitle");

// call this on the body next time via onLoad(enableScroll())
// function enableScroll() {
//     scrollable = true;
//     console.log("enabled");
// }
