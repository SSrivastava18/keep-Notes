const notesContainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");


function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || ""; 
}
showNotes();


function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}


createbtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";

  
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    updateStorage(); 
});


notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();  
    }

    else if (e.target.tagName === "P") {
        e.target.onkeyup = function() {
            updateStorage();  
        };
    }
});
