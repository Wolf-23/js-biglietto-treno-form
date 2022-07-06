const data_userDom = document.getElementById("data_user");

const kilometriDom = document.getElementById("km");

const etaDom = document.getElementById("user_age");

const nomeDom = document.getElementById("nome");

let promoDom = document.getElementById("promo");

let num_carrozzaDom = document.getElementById("num_carrozza");

let codice_ticketDom = document.getElementById("codice_ticket");

let priceDom = document.getElementById("price");

const generaDom = document.getElementById("genera");

const annullaDom = document.getElementById("annulla");

const ticketDom = document.getElementById("section_ticket").classList;

generaDom.addEventListener('click' ,
    function() {

        ticketDom.add("show");

        nomeDom.innerHTML = data_userDom.value; 

        num_carrozzaDom.innerHTML = Math.floor((Math.random() * 15 + 1));

        codice_ticketDom.innerHTML = Math.floor((Math.random() * 10000) + 90000);

        let prezzo_intero = (parseInt(kilometriDom.value) * 0.21);
        
        if (etaDom.value == "Minorenne") {
            let sconto = prezzo_intero -= (prezzo_intero * 0.2);
            priceDom.innerHTML = sconto.toFixed(2);
            promoDom.innerHTML = "Biglietto scontato del 20%"
        } else if (etaDom.value == "Over 65") {
            let sconto = prezzo_intero -= (prezzo_intero * 0.4);
            priceDom.innerHTML = sconto.toFixed(2);
            promoDom.innerHTML = "Biglietto scontato del 40%"
        } else if (etaDom.value == "-") {
            priceDom.innerHTML = "Scegliere età!"
        }
        else {
            priceDom.innerHTML = prezzo_intero;
            promoDom.innerHTML = "Biglietto standard"
        }

    }
);

annullaDom.addEventListener('click' , 
    function() {

        data_userDom.value = '';
        kilometriDom.value = '';
        etaDom.value = '-';
        ticketDom.remove("show");
    }
)