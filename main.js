const input = document.getElementById("input")
const btn = document.getElementById("btn")
const divNome = document.getElementById("div-nome")

function renderName() {
 const inputValue = input.value
divNome.innerHTML = inputValue
}

btn.addEventListener("click",renderName)
