const btnLogin = document.querySelector(".btn-login"); //pegando o valor do botão e passando para uma variavel

const form = document.querySelector("form"); //pegando o form, por ter só um form eu posso pegar ele direto

btnLogin.addEventListener("click", event => { //"addEventListerner é um carinha que vai "ouvir" eventos que acontecer com btnLogin, que o nome desse evendo se chama "click", e quando esse evento acontecer ele já irá realizar tudo que estiver dentro dessa FUNÇÃO, que se chama evendo, que foi declarada na mesma linha

    event.preventDefault(); //dizendo aqui para ee não fazer o submit(enviar) que era pra ser feito ao clicar no botao, fazendo que a pagina fique parada 

    form.classList.add("form-hide"); //adicionando uma CLASSE para o form

})