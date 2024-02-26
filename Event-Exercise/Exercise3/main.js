const size = document.getElementById("estatura");

const weight = document.getElementById("peso");

const button = document.querySelector("button");

const resultado = document.getElementById("resultado")

button.addEventListener("click", ()=>{
   let masaCorporal = weight.value / size.value

    resultado.innerHTML = masaCorporal
})