const data_userDom = document.getElementById("data_user");

const kilometriDom = document.getElementById("km");

const etaDom = document.getElementById("user_gender");

const nomeDom = document.getElementById("nome");

let num_carrozzaDom = document.getElementById("num_carrozza");

let codice_ticketDom = document.getElementById("codice_ticket");

let priceDom = document.getElementById("price");

const generaDom = document.getElementById("genera");

generaDom.addEventListener('click' ,
    function() {
        nomeDom.innerHTML = data_userDom.value; 

        num_carrozzaDom.innerHTML = Math.floor((Math.random() * 15 + 1));

        codice_ticketDom.innerHTML = Math.floor((Math.random() * 10000) + 90000);

        if (etaDom.value = "Minorenne") {
            let prezzo_intero = (kilometriDom.value * 0.21);
            let sconto = prezzo_intero -= (prezzo_intero * 0.2);
            priceDom.innerHTML = sconto.toFixed(2);
            
        }
    }
);