function alerta() {
    alert("aviso!")
}

let botao = document.querySelector("#botao") // o # indica que é um id

botao.addEventListener("click", ()=> {
    alerta()
})

console.log("oi")