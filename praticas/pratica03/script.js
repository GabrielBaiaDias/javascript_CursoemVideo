function carregar() {
    var mensagem = window.document.getElementById('msg')
    var imagem = window.document.getElementById('foto')
    var data = new Date()
    //var hora = data.getHours()
    //var minutos = data.getMinutes()
    hora=19
    minutos=23
    mensagem.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >= 0 && hora < 12) {
        imagem.src = 'imagens/foto-manha.png'
        document.body.style.background = '#f0dbb6'
    } else if (hora >= 12 && hora <= 18) {
        imagem.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#d08362'
    } else {
        imagem.src = 'imagens/foto-noite.png'
        document.body.style.background = '#3d3f3c'
    }
}