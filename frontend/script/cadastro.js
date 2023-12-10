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
            console.log("Cadastro realizado com sucesso:", data);
            // Adicione aqui qualquer ação adicional após o cadastro bem-sucedido
        })
        .catch((error) => {
            console.error("Erro no cadastro:", error);
            // Adicione aqui qualquer ação para lidar com erros
        });
}
