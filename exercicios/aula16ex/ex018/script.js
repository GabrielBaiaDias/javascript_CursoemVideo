let num = document.querySelector('input#txtnum')
let res = document.querySelector('div#res')
let tabela = document.querySelector('select#tabela')
let valores = []

function inLista(n, l) {
    debugger
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function isNumero(n) {
    debugger
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    debugger
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tabela.appendChild(item)
        res.innerHTML = ''
        num.value = ''
        num.focus()
    } else
        window.alert('Valor inválido ou ja encontrado na lista.')
}


function Finalizar() {
    debugger
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        for (let c = 0; c < valores.length; c++) {
            soma = Number(valores[c]) + soma
        }
        media = soma / tot

        res.innerHTML = ' '
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p> `
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos numeros informados foi ${soma}</p>`
        res.innerHTML += `<p>A media dos valores informados foi ${media.toFixed(2)}</p>`   

    }
}



function Limpar() {
    res.innerHTML = ''
    tabela.innerHTML = ''
    num.value = ''
    num.focus()
}