let B7validator = {
    handleSubmit:(event)=>{
        //Esta função para o evento de submit
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll("input");

        for(let i=0;i<inputs.lenght;i++) {
            let input = inputs[i];
            let check = B7validator.checkInput(input);
            if(check !== true) {
                send = false;
                B7validator.showError(input, check);
            }
        } 

        if(send) {
            form.submit();
        }
    },

    checkInput:(input) => {
        let rules = input.getAttribute("data-rules");

        if(rules !== null) {
            rules = rules.split("|");
            for (let k in rules) {
                let rDetails = rules[k].split("=");
                switch (rDetails[0]) {
                    case "required":
                    if(input.value == "") {
                        return "Campo não pode ser vazio";
                    }
                    break;
                    case "min":

                    break;
                

                }
            }
            
        }
        return true
    },
    showError:(input, error )=>{
        input.style.boprderColor = "#FF0000";

        

    }
};

let form = document.querySelector("form.mainform");
form.addEventListener("submit", B7validator.handleSubmit);









