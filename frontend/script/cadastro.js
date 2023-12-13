function submitCadastroForm() {

    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let data = {
        nome: nome,
        usuario: username,
        email: email,
        senha: password,
    };

    fetch("https://health-dhbx.onrender.com/usuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            alert('Cadastro realizado com sucesso!');
            window.location.href = '../pages/login.html'
        })
        .catch((error) => {
            console.error(error);
           alert("Erro no cadastro: Usuário existe!");
        });
}

const imgCad = document.querySelector('.img img')

if(window.innerWidth >= 1200) {
 
    imgCad.setAttribute('src', '../img/desktop/desktop-cadastro.png')
} else {
    imgCad.setAttribute('src', '../img/mobile/mobile-cadastro.svg')
}
