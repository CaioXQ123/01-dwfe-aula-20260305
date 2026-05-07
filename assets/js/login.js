const email = "admin@email.com";
const senha = "1234";

function verificarCredenciais() {
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;

    if (emailInformado === email) {
        alert("E-mail correto!");
        if (senhaInformada === senha) {
            alert("Senha correta!");
            window.location = "home.html"
        } else 
        alert("Senha incorreta!")
    }
    else alert("E-mail incorreto!");

}