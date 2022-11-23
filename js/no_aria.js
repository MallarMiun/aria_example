/*Kod av Malin Larsson, Mittuniversitetet*/
"use strict";

window.onload = init;

function init() {

    //Hämtar in knapparna
    const expenderBtn = document.getElementsByClassName("expanderBtn");

    //Lägger en händelselyssnare på varje knapp
    for (let i = 0; i < expenderBtn.length; i++) {

        expenderBtn[i].addEventListener('click', function () {
            //Hämtar in nästa element vilket blir article-elementet efter knappen som trycks
            let textExpend = this.nextElementSibling;

            //Kontroll om article är synlig
            if (textExpend.style.display === "block") {
                //Är den synlig så döljs den med css
                textExpend.style.display = "none";

                //Ändrar pil-ikon (klassnamn)
                this.firstElementChild.classList.remove("fa-chevron-up");
                this.firstElementChild.classList.add("fa-chevron-down");
            } else {
                //article-visas
                textExpend.style.display = "block";

                //ändrar pil-ikon (klassnamn)
                this.firstElementChild.classList.remove("fa-chevron-down");
                this.firstElementChild.classList.add("fa-chevron-up");

            }

        })
    }

}
