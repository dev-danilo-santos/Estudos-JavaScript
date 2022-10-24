function Submeter() {
    var txtName = document.getElementById('txtname');
    var txtIdade = document.getElementById('txtidade');
    var txtNascimento = document.getElementById('dataNas'); 
    var txtEmail = document.getElementById('txtemail');

    var res = document.querySelector('div.resultado');
    res.innerHTML = `Olá ${txtName.value}, agora serão exibidos os seus dados. <br>
    Idade: ${Number(txtIdade.value)} anos <br>
    Data de nascimento: ${txtNascimento.value} <br>
    Email: ${txtEmail.value}
    `

}