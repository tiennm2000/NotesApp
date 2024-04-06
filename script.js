const noteContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

const showNote = () => {
  noteContainer.innerHTML = localStorage.getItem("notes");
};

showNote();
const updateStorage = () => {
  localStorage.setItem("notes", noteContainer.innerHTML);
};

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contentEditable", "true");
  img.src = "images/delete.png";
  noteContainer.appendChild(inputBox).appendChild(img);
});

noteContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = () => {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
