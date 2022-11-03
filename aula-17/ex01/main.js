var txtLink = document.getElementById('txtgit')
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

let lista = []

function adiciona(){

    let numtxt = document.getElementById('entranum')
    let num = Number(numtxt.value)
    let tab = document.getElementById('restab')
    document.getElementById('txtres').innerHTML = ""
    
    if(num == 0) {
        window.alert('[Erro] Verifique os dados de entrada')
    }
    else if ( !(num >= 1 && num <=100)){
        window.alert("[Erro] Número de inserção fora do intervalo")
    }
    else if (lista.find(element => element == num)) {
        window.alert('Este índice já existe')
   }
    else {
        lista.push(num)
        tab.size +=1
        let opt = document.createElement('option')
        opt.text = `Valor ${num} adicionado`
        tab.appendChild(opt)
        numtxt.value = ''
        numtxt.focus()
    }
}

function finaliza() {
    
    if(lista.length == 0 || lista.length == undefined ) {
        window.alert('Erro, adicione valores antes de finalizar')
    } else {
        let resultado = document.getElementById('txtres')
        let maxvalue = lista.reduce( function(prev, current){
            return prev > current? prev: current;
        })
        let minvalue = lista.reduce(function(prev, current) {
            return prev < current ? prev : current;
        })
       
        let soma = somar();

        
        resultado.innerHTML = ` <p>Ao todo foram cadastrados ${lista.length} número(s)</p>`
        
        resultado.innerHTML += `<p>O maior número é ${maxvalue}.</p>`  
        resultado.innerHTML += `<p>O menor número é ${minvalue}.</p>`  
        resultado.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${soma/(lista.length)}.</p>`  
    }
} 

function somar(){
    let sum = 0;
    lista.forEach( (item) => {
         sum += item;
    }) 
    return sum;
}