function Executar() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let f2 = document.getElementById('txtf2')
    if (num.value.length == 0 || f2.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        f1 = Number(num.value)
        f2 = Number(f2.value)
        let c = 1
        tab.innerHTML=''
        while (c <= f2) {
            let item = document.createElement('option')
            item.text = `${f1} x ${c} = ${f1 * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}