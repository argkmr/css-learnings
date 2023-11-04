const head = document.getElementById("eventHeading");
const para = document.getElementById("eventPara");
const btn = document.getElementById("eventButton");
const eventListnerDiv = document.getElementsByClassName("eventlistner");
let d = 0, w = 1;

// Single Click 
head.addEventListener("click", () => {
    para.style.backgroundColor = "yellow";
    btn.style.backgroundColor = "grey"
})

btn.addEventListener("click", () => {
    if (btn.style.backgroundColor === "grey")
        alert("Button Color is grey")
})


// Double Click
para.addEventListener("dblclick", () => {
    btn.innerHTML = "<p>This is p tag inside button element.This is still a button. Now click here</p>"
})


// When Mouse Pointer Is Inside An Element
para.addEventListener("mouseenter", () => {
    const newPara = document.createElement("p");
    newPara.innerText = "Mouse is inside 'double click' block";
    newPara.setAttribute("class", "newPara");
    if (d===1) newPara.style.color = "white";

    eventListnerDiv[0].appendChild(newPara)
    head.style.borderRadius = "50px";
    head.style.backgroundColor = "skyblue"

    para.style.transform = 'scale(1.02)';
})


// When Mouse Pointer Leaves The Element (after getting in)
para.addEventListener("mouseleave", () => {
    const newPara = document.getElementsByClassName("newPara");
    newPara[0].remove();
    para.style.transform = 'scale(1)';
})

const newSpan = document.createElement("span");
newSpan.innerText = "right click and blur";
newSpan.setAttribute("id", "eventPara");
eventListnerDiv[0].prepend(newSpan);


// Right Click
newSpan.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    newSpan.style.backgroundColor = "skyblue"
    eventListnerDiv[0].style.filter = "blur(2px)"
})


// Writing A Seperate Funtion In Order To Later Use It In -> removeEventListner()
// Here Arrow Funtion Can't Be Used As We Won't Have Anything To Pass In As Second Parameter In -> removeEventListner()
function removeBlur(){
    eventListnerDiv[0].style.filter = "blur(0px)"
}
newSpan.addEventListener("mouseleave", removeBlur)


// Adding Dark Mode Theme!
// Also Removing The Blur Event Using -> removeEventListner(<Event Name>, <Funtion>)
const darkMode = document.createElement("span");
darkMode.innerText = "Dark Mode";
darkMode.classList.add("dark");
eventListnerDiv[0].prepend(darkMode);
console.log(darkMode)

darkMode.addEventListener("click", () => {
    if (d === 0) {
        eventListnerDiv[0].style.backgroundColor = "#192734";
        darkMode.innerText = "Light Mode";
        darkMode.style.color = "black";
        darkMode.style.backgroundColor = "white"
        d=1;
        w=0;
    }else if (w===0){
        eventListnerDiv[0].style.backgroundColor = "lightgrey";
        darkMode.innerText = "Dark Mode";
        darkMode.style.color = "white";
        darkMode.style.backgroundColor = "black";
        w=1;
        d=0;
    }
    newSpan.removeEventListener("mouseleave", removeBlur);
})











