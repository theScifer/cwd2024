const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    const li = document.createElement("li");
    li.appendChild(checkBox);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

    const btn = document.createElement("button");
    btn.classList.add("delete");
    btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(btn);
    btn.onclick = removeParent;

    checkBox.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }
}

function removeParent(evt) {
    evt.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keydown", addListAfterKeyPress)test