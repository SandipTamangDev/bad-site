let count = 4;
const button = document.getElementById('b1');
const list = document.getElementById('list');

function addItem() {
    let listItem = document.createElement("li");
    listItem.innerText = "Item " + count;
    list.appendChild(listItem);
    count++;
}

button.addEventListener('click', addItem);
