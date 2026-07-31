let counter = 0;

const count = document.getElementById("Count");
const increment = document.getElementById("inc")
const decrement = document.getElementById("dec")
const reset = document.getElementById("rst")

increment.addEventListener("click", () => {
    counter++
    count.innerText = counter
})

decrement.addEventListener("click", () => {
    counter--
    count.innerText = counter
})

reset.addEventListener("click", () => {
    counter = 0
    count.innerText = counter
})
