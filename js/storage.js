const input = document.getElementById("input");
const bttnAdd = document.getElementById("bttnAdd");
const storageDiv = document.getElementsByClassName("storage");

const displaySession = () => {
    const sessionElement = document.createElement("div");
    sessionElement.setAttribute("id", "storagePara");
    sessionElement.innerText = `Item from session storage is ${sessionStorage.getItem("sessionKey")}`;
    storageDiv[0].append(sessionElement);
}

const displayLocal = () =>{
    const localElement = document.createElement("div");
    localElement.setAttribute("id", "localPara");
    localElement.innerText = `Item from local storage is ${localStorage.getItem("localKey")}`;
    storageDiv[0].append(localElement);
}

bttnAdd.addEventListener("click", () => {
    sessionStorage.setItem("sessionKey", input.value);
    localStorage.setItem("localKey", input.value);
    input.value = '';
    document.location.reload(); // Same as reloading the page;
});

displaySession();
displayLocal();

alert(`session = ${sessionStorage.getItem("sessionKey")}, local = ${localStorage.getItem("localKey")}`);

bttnDel.addEventListener("click", () => {

    // Session Storage
    const delSessionElement = document.getElementById("storagePara");
    if (delSessionElement) delSessionElement.remove();
    else alert("There is nothing in session storage");
    sessionStorage.removeItem("sessionKey");

    // Local Storage
    const delLocalElement = document.getElementById("localPara");
    if (delLocalElement) delLocalElement.remove();
    else alert("There is nothing in local storage");
    localStorage.removeItem("localKey");

});







