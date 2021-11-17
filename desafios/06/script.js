    const btnLogin = document.querySelector(".btn-login"); //pegando o valor do botão e passando para uma variavel

    const form = document.querySelector("form"); //pegando o form, por ter só um form eu posso pegar ele direto

    btnLogin.addEventListener("click", event => { //"addEventListerner é um carinha que vai "ouvir" eventos que acontecer com btnLogin, que o nome desse evendo se chama "click", e quando esse evento acontecer ele já irá realizar tudo que estiver dentro dessa FUNÇÃO, que se chama evendo, que foi declarada na mesma linha

        event.preventDefault(); //dizendo aqui para ee não fazer o submit(enviar) que era pra ser feito ao clicar no botao, fazendo que a pagina fique parada 

        form.classList.add("form-hide"); //adicionando uma CLASSE para o form

    })


    form.addEventListener("animationstart", event => { // fazer um evento para antes de começar a animação ele adicione um style no body, "animationstart" para o começo da animação, sendo "event" apenas um nome para a função

        if(event.animationName === "down") { //aqui ele está especificando qual animação 
            document.querySelector("body").style.overflow = "hidden"; // para tirar a barra de rolagem durante todo periodo inicial, tem que ser direto no body, ate parar o evento "down"
            }
        })




    form.addEventListener("animationend", event => { // fazer um evento para quando acabasse a animação ele excluisse o form, "animationend" para o final da animação, sendo "event" apenas um nome para a função

        if(event.animationName === "down") {//aqui ele está especificando qual animação 
            form.style.display = "none"; //dando um display none quando a aniamação do form acabar
            document.querySelector("body").style.overflow = "none"; //para caso queiramos que a página após a ação de excuir o form tenha uma barra de rolagem para biaxo, temos que tirar o overflor hidden
        }
    })


