let B7validator = {
    handleSubmit:(event)=>{
        //Esta função para o evento de submit
        event.preventDefault();
    }
}

let form = document.querySelector("form.mainform");
form.addEventListener("submit", B7validator.handleSubmit);









