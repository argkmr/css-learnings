myBtns = document.querySelectorAll("button");

myBtns[0].setAttribute("id","mybutton1");
myBtns[1].setAttribute("id","mybutton2");
myBtns[1].removeAttribute("id");

// Normal functions can be accesed before initialization as well.
myBtns[0].onclick = BringMeHeading;
function BringMeHeading() {
    const headingElement = document.createElement("h1");
    headingElement.innerText = "This is heading from function call";
    document.body.prepend(headingElement);
}

// Arrow functions can only be accessed after initialization.
const Deleteheading = () =>{
    const headingElement = document.querySelector("h1");
    headingElement.remove()
}
myBtns[1].onclick = Deleteheading;


