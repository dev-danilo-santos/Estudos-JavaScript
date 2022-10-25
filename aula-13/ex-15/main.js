var txtLink = document.getElementById('acesso')
txtLink.addEventListener('mouseenter', entra)
txtLink.addEventListener('mouseleave', sai)

function entra() {
    txtLink.style.color = 'pink'
    txtLink.style.textDecoration = 'underline'
}

function sai(){
    txtLink.style.color = 'white'
    txtLink.style.textDecoration = 'none'
}

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente.")
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade < 10 && idade >= 0) {
                img.setAttribute('src','img/bebe-h.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src','img/jovem-m.jpg')
            }
            else if(idade < 50 ) {
                img.setAttribute('src','img/adulto-m.jpg')
            }
            else {
                img.setAttribute('src','img/idoso.jpg')
            }
        }
        else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade < 10 && idade >=0) {
                img.setAttribute('src', 'img/bebe-m.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'img/jovem-f.jpg')
            }
            else if(idade < 50 ) {
                img.setAttribute('src', 'img/adulto-f.jpg')
            }
            else {
                img.setAttribute('src','img/idosa.jpg')
            }
    }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
    


}