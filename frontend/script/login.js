async function submitLoginForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Construir objeto de dados
    let data = {
        usuario: username,
        senha: password,
    };
    const loginUrl = "https://health-dhbx.onrender.com/login";

    const loginData = {
        usuario: data.usuario,
        senha: data.senha,
    };

    try {
        const response = await axios.post(loginUrl, loginData);
        const token = response.data.data.token;

        localStorage.setItem("token", token);
        // window.location.href = "/";

        console.log(token);
        console.log(response);
    } catch (error) {
        // Trate os erros aqui, se necessário
        console.error("Erro ao fazer login:", error);
    }
}
