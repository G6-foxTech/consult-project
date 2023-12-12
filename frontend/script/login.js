async function submitLoginForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

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
           alert("Erro no cadastro: Usuário inexistente!");
           console.log(error);
        });
}
