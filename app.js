const list = document.querySelector(".list");
const counter = document.querySelector(".counter");

list.addEventListener("click", onClickHandler);

function onClickHandler(e) {
    e.preventDefault();
    const clickedRow = e.target;

    if (e.target == e.currentTarget) {
        return;
    } else {
        clickedRow.style.textDecoration = "line-through";
        clickedRow.style.textDecorationColor = "#4ea832";
        clickedRow.style.textDecorationThickness = "3px";

        setTimeout(() => {
            e.target.remove();
        }, 1500);
    }
    setTimeout(() => {
        if (list.childElementCount == 0) {
            counter.style.color = "#4ea832";
        } else {
            counter.style.color = "#fc2c03";
        }

        counter.textContent = list.childElementCount;
    }, 1501);
}
let form = document.querySelector(".addForm");
let input = document.querySelector("#addForm");

document.querySelector("button").addEventListener("click", formHandler);

function formHandler(e) {
    const formData = new FormData(form);
    const text = formData.get("addForm");

    if (text != "") {
        const newRow = document.createElement("a");
        newRow.textContent = text.toLocaleUpperCase();
        list.appendChild(newRow);
        counter.textContent = list.childElementCount;
    }

    if (list.childElementCount == 0) {
        counter.style.color = "#4ea832";
    } else {
        counter.style.color = "#fc2c03";
    }

    input.value = "";
}

document.querySelector("#addForm").addEventListener("keypress", (e) => {
    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
    }
});
