function logar(){

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email == "admin@admin" && senha == "admin"){

        alert('Sucesso');
        location.href = "#";
    }else{
        alert('Usuario ou senha incorretos');
    }

}