const container = document.getElementById("container");

const input = document.querySelector("input")

const button = document.querySelector("button");

const p = document.querySelector("p");



button.addEventListener("click", ()=>{
    p.innerHTML="";
    input.value = ""
})

input.addEventListener("keyup", ()=>{
    p.innerHTML = input.value
})