function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!!
        img.src = './fotos/manha.png'
        document.body.style.background = '#9babb5'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        document.body.style.background = '#f1b895'
        img.src = './fotos/tarde.png'
    } else {
        // BOA NOITE!
        img.src = './fotos/noite.png'
        document.body.style.background = '#5e5898'
    }
}
