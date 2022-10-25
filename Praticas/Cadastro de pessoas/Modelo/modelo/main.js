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

function evento(){
    
}