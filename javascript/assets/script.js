let dolar = 5.1

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

document.getElementById("usd").value = "1001,00"

//usdInput.value = "1000,00"

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")

})

usdInput.addEventListener("blur", () =>{ //blur é quando o campo perde o foco
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("blur", () =>{ //blur é quando o campo perde o foco
    usdInput.value = formatCurrency(brlInput.value)
})

function formatCurrency(value) {
    /* passos:
    ajustar a virgula para ponto
    utilizar funcao de formatacao de moeda
    retornar o valor formatado
    */
   let fixedValue = fixValue(value)
   let options = {
        useGrouping: false, //nao separar os milhares 
        minimumFractionDigits: 2 //duas casas decimais
   }

   let formatter = new Intl.NumberFormat("pt-BR", options)
   return formatter.format(fixedValue) //isso é uma string!!!!!!!!
}

function fixValue(value){
    let fixedValue = value.replace(",", ".") //substitui a virgula por ponto- mas o numero ainda sera uma string
    let floatValue = parseFloat(fixedValue) //converte a string para float
    if (isNaN(floatValue)){
        floatValue = 0
    }
    return floatValue    
}

function convert(type) {
    if(type === "usd-to-brl"){
        //passos:
        let fixedValue = fixValue(usdInput.value) // ajustar a virgula para ponto

        let result = fixedValue * dolar // converter para real
        result = result.toFixed(2)

        brlInput.value = formatCurrency(result)// mostrar o valor no campo de real
    }
    
    if(type === "brl-to-usd"){
        //passos:
        let fixedValue = fixValue(brlInput.value) // ajustar a virgula para ponto

        let result = fixedValue / dolar // converter para dolar
        result = result.toFixed(2)

        usdInput.value = formatCurrency(result) // mostrar o valor no campo de dolar
    }
}