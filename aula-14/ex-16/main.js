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

function contar(){
    var res = document.getElementById('res')

    var inicio = document.getElementById('txtinicio')
    var ninicio = Number(inicio.value)

    var fim = document.getElementById('txtfim')
    var nfim = Number(fim.value)

    var passo = document.getElementById('txtpasso')
    var npasso = Number(passo.value)

    var resposta = 'Contando: '
    if (npasso == 0){
        window.alert("O número de passos não pode ser zero, será considerado 1.")
        npasso = 1;
    } 
    if (ninicio == 0 || nfim== 0){
        window.alert('Erro, campos vazios')
    }
    else if (npasso > nfim && ninicio < nfim ) {
        resposta += "O número de passos não pode ser maior do que o número final"
    }
    else if ( ninicio <= nfim) {
        

        for (var i = ninicio; i <= nfim; i += npasso) {
            resposta += ` ${i} `
        }
    }
    else if ( ninicio >= nfim)  {
        for (var i = ninicio; i >= nfim; i -= npasso) {
            resposta += ` ${i} `
        }
    }
        res.innerHTML = resposta


}