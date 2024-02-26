const monedaLocal = document.getElementById("monedaLocal")
const montoDolares = document.getElementById("montoDolares")
const convert = document.getElementById("convert")



convert.addEventListener("click", ()=>{
    let resultado = monedaLocal.value / 500
    montoDolares.innerHTML = resultado
})



const local = document.getElementById("monedaLocal2")
const dolar = document.getElementById("dolares2")
const button1 = document.getElementById("convert2")
const button2 = document.getElementById("delete2")


button1.addEventListener("click", ()=>{
    let resultado = local.value / 500
    dolar.innerHTML = resultado
})

button2.addEventListener("click", ()=>{
    local.value = ""
    dolar.innerHTML = ""
})


const local2 = document.getElementById("monedaLocal3")
const dolar2 = document.getElementById("dolares3")
const button3 = document.getElementById("convert3")
const button4 = document.getElementById("delete3")


button3.addEventListener("click", ()=>{
    let resultado = dolar2.value * 500
    local2.innerHTML = resultado
})

button4.addEventListener("click", ()=>{
    dolar2.value = ""
    local2.innerHTML = ""
})