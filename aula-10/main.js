var area = document.getElementById('area')
        area.addEventListener('click', clicar)
        area.addEventListener('mouseenter', entrar)
        area.addEventListener('mouseout', sair)


        function clicar(){
            area.style.transition = '1s'
            area.style.color = 'blue'
            area.innerText = "clicou"
            area.style.backgroundColor = "black"
            area.style.borderRadius = '50%'
        }



        function entrar(){
            area.style.transition = '0.5s'
            area.style.color = 'pink'
            area.style.backgroundColor = "Cyan"
            area.style.borderRadius= '20%';
        }

        function sair(){
            area.style.transition = '0.5s'
            area.style.color = 'blue'
            area.style.backgroundColor = 'aquamarine'
            area.innerText = 'Interaja'
            area.style.borderRadius= '20%';
            
        }

var card = document.getElementById("imagem")
card.addEventListener('click', clicarCard)
card.addEventListener('mouseout', saiCard)
card.addEventListener('mouseenter', entraCard)

function clicarCard(){
    card.style.boxShadow = '10px 10px 10px 10px red'
}

function saiCard(){
    card.style.boxShadow ="20px 20px 20px Cyan"
}

function entraCard(){
    card.style.boxShadow = '20px 20px 20px pink'
}


