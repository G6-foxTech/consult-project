async function submitLoginForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let id = document.getElementById("id").value;
    let logradouro = document.getElementById("logradouro").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let complemento = document.getElementById("complemento").value;
    let uf = document.getElementById("uf").value;
    let numero = document.getElementById("numero").value;

    // Construir objeto de dados
    let data = {
        usuario: username,
        senha: password,
    };

    fetch("https://health-dhbx.onrender.com/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            if(data.data.token) {
                localStorage.setItem("token", data.data.token);
                alert('Login realizado com sucesso!');
                window.location.href = '../pages/crudEdereco.html'
            }
        })
        .catch((error) => {
           alert("Erro no cadastro: Usuário existe!");
           console.log(error);
        });
}
