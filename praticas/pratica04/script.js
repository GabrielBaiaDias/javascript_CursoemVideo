function executar() {
    let f1 = document.getElementById('txtf1')
    let f2 = document.getElementById('txtf2')
    let tab = document.getElementById('tab')
    if (f1.value.length == 0 || f2.value.length == 0) {
        alert('[ERRO] Preencha os espaços obrigatórios')
    } else {
        f1 = Number(f1.value)
        f2 = Number(f2.value)
        tab.innerHTML = " "
        for (let contador = 1; contador <= f2; contador++) {
            let item = document.createElement('option')
            item.text = `${f1} x ${contador} = ${f1 * contador}`
            item.value = `tab${contador}`
            tab.appendChild(item)
        }
    }
}