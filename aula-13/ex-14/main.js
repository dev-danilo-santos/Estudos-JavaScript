function carregar(){
   
    var msgHora = document.querySelector('div.exibe-horas')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msgHora.innerHTML = `Agora São ${hora} horas.`
    img.alt='Imagens personalizadas para a hora do dia.'
    if(hora >=0 && hora < 12 ) {
         img.src = 'img/manha.png'
    } else if (hora >= 12 && hora < 18 ){
        img.src = 'img/tarde.png'
    } else {
        img.src = 'img/noite.png'
    }

}

var txt = document.getElementById('acesso') 
txt.addEventListener('mouseenter', mouseEntrar)
txt.addEventListener('mouseout', mouseSair)

function mouseEntrar(){ 
    txt.style.color = 'cyan'; 
}

function mouseSair(){
    txt.style.color = 'white'
}

