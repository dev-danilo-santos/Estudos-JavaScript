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

function gerar(){
    let numtxt = document.getElementById('txtnumber')
    let tab = document.getElementById('seltab')
    let num = Number(numtxt.value)
    
    tab.innerHTML = ''
    for(let i = 0; i <=10; i++){
        let item = document.createElement('option')
        item.text = `${num} * ${i} = ${num*i}`
        item.value = `tab${i}`
        tab.appendChild(item)
    }
    


}