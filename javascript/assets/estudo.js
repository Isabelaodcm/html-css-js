// //function alerta() {
//     alert("aviso!")
// }

// document.addEventListener("click", ()=> {
//     alerta()
// })


let idade = 20

console.log(idade)

console.log(idade + 2)
console.log(200)

// criando variáveis com string
let nome = "Lucas"
let nome2 = "90"
console.log(nome + 40)

// criando variáveis com boolean
let logado = true

// array e objetos
let ingredientes = ["ovo", "acucar", "farinha", "leite"]

console.log(ingredientes[2])

let personagem = {
    nome: "maya",
    idade: 19, 
    forca: 800,
    nivel: 10
}

console.log(personagem.nome)

/* funçoes- elementos:
- input
- processamento
- output
*/

function somar(a, b){
    let resultado = a+b;
     return resultado
}

let x = somar(15, 5) //o resultado sera armazenado em x
console.log(x)

// arrowfunction
let somar2 = (a, b) =>{
    let resultado = a+b;
    return resultado
}

let y = somar2(2, 7)
console.log(y)

//condicionais

let idade1 = 18
if (idade1 >= 18){
    console.log("você é maior de idade")
} else {
    console.log("você é menor de idade")
}

//loop
let lista = [10, 20, 30, 40, 50]

for (let item of lista){
    console.log(item)
}


for (let item of ingredientes){
    console.log("-" + item)
}

console.log("fim do loop")