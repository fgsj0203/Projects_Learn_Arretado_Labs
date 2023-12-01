/**
 * Essa função é referente ao serviço de envio de email
 * primeiramente dando valores aos parâmetros "puxando" 
 * os identificadores nos "ids" no arquivo index.html
 * assim no último bloco de código, já iniciando o código
 * com o serviço do emailjs e usando os parâmetros que criamos
 * Podemos digamos "empacotar" aonde o cada valor está em 
 * um campo do formulário.
 */


function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    /**
     *duas variáveis constantes que correspondem as chaves geradas
      do serviço de email e do template utilizado 
     */ 
    const serviceID = "service_t9p4wmd";
    const templateID = "template_0w4be6n";


    emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Mensagem entregue com sucesso");
    })
        .catch((err) => console.log(err));
}


