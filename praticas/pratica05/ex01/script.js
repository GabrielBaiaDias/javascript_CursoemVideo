debugger
let respostaIP = document.getElementById('div#respostaIP')

function calcular(numero) {
    if (numero == 0) {
        alert('Obrigatorio adiconar um valor!')
    } else {
        if (numero % 2 == 0) {
            return 'PAR'
        } else {
            return 'IMPAR'
        }
    }
}
let numeroIP = document.getElementById('input#txtnumeroIP')
//calcular(numeroIP)
respostaIP.innerHTML=calcular(numeroIP)