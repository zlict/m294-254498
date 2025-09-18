
// alert("Hello World from external javascript!");
// Irgendwelche HTTP Abfragen starten die lange dauern


document.addEventListener("DOMContentLoaded", () => {
    const buttonEl = document.querySelector("button");
    const displayEl = document.querySelector("#display");

    buttonEl.addEventListener("click", () => {
        displayEl.innerText -= 1;
    });
})