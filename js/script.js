const notes_container = document.querySelector(".notes-container");
const create_btn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function show_notes(){
    notes_container.innerHTML = localStorage.getItem("Notes");
}
show_notes();

function storage_notes() {
    localStorage.setItem("Notes", notes_container.innerHTML);
}

create_btn.addEventListener("click",() => {
    let input_box =document.createElement("p");
    let img =document.createElement("img");
    input_box.className = "input-box";
    input_box.setAttribute("contenteditable", "true");
    img.src = "./img/delete-back-2-line.svg";
    notes_container.appendChild(input_box).appendChild(img);
});

notes_container.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        storage_notes();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                storage_notes();
            }
        })
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})