const container = document.querySelector(".container")

const inputButton = document.querySelector(".inputButton");

for (let i = 0; i < 16; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    for (let j = 0; j < 16; j++) {
        let row = document.createElement("div");
        row.classList.add("square");
        column.appendChild(row);
    }

    container.appendChild(column);
}

const squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.classList.add("colored");
    });
});

inputButton.addEventListener("click", () => {
    let number = prompt("How many squares do you want? (Max: 100)");
    console.log(number);
    if (number > 100) {
        alert("The number can not be more than 100.");
    } else if (number === null || number < 1) {
        alert("Please enter a valid number!");
    } else {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        for (let i = 0; i < number; i++) {
            let column = document.createElement("div");
            column.classList.add("column");
            for (let j = 0; j < number; j++) {
                let row = document.createElement("div");
                row.classList.add("square");
                column.appendChild(row);
            }
        
            container.appendChild(column);
        }
    }

    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.classList.add("colored");
        });
    });
});

const clear = document.querySelector(".clearButton");

clear.addEventListener("click", () => {
    squares.forEach(square => {
        square.classList.remove("colored");
    });
});