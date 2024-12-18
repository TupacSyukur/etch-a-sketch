const container = document.querySelector(".container")

for (let i = 0; i < 16; i++) {
    let column = document.createElement("div");
    for (let j = 0; j < 16; j++) {
        let row = document.createElement("div");
        column.appendChild(row);
    }

    container.appendChild(column);
}