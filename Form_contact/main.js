function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
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


