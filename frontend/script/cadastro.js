async function submitCadastroForm() {
    console.log("aaaa");
    let nome = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let data = {
        nome: nome,
        usuario: username,
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
            if(data.data.token) {
                alert('Cadastro realizado com sucesso!');
            }
        })
        .catch((error) => {
           alert("Erro no cadastro: Usuário existe!");
        });
}
