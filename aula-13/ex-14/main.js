function carregar(){
   
    var msgHora = document.querySelector('div.exibe-horas')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msgHora.innerHTML = `Agora São ${hora} horas.`
    
    if(hora >=0 && hora < 12 ) {
         img.src = 'manha.png'
    } else if (hora >= 12 && hora < 18 ){
        img.src = 'tarde.png'
    } else {
        img.src = 'noite.png'
    }

}
