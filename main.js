const form = document.getElementById("form-num")
const numeroA = document.getElementById("numero-a")
const numeroB = document.getElementById("numero-b")

form.addEventListener('submit', function confirma(e) {
    e.preventDefault()

    calculo();
})

function alteraDados() {
    return parseFloat(numeroA.value, numeroB.value)
}

function calculo() {
    alteraDados()
    if (numeroA.value<numeroB.value) {
        alert (`Muito bem, o número ${numeroB.value} é maior que o número ${numeroA.value}.`);
    } else {
        alert (`O número ${numeroB.value} não é maior que o número ${numeroA.value}, tente novamente.`)
    }
}