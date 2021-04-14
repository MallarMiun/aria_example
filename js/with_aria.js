/*Kod av Malin Larsson, Mittuniversitetet*/
"use strict";

//Hämtar in knapparna
const expanderBtn = document.getElementsByClassName("expanderBtn");

//Lägger en händelselyssnare på varje knapp
for (let i = 0; i < expanderBtn.length; i++) {

    expanderBtn[i].addEventListener("click", function () {
        //Hämtar in nästa element vilket blir article-elementet efter knappen som trycks
        let textExpand = this.nextElementSibling;

        //Kontroll om article är synlig
        if (textExpand.style.display === "block") {
            //Är den synlig så döljs den med css
            textExpand.style.display = "none";

            //Ändrar aria-expended från true till false(infälld knapp)
            this.setAttribute("aria-expanded", "false");

            //Ändrar pil-ikon
            this.firstElementChild.classList.remove("fa-chevron-up");
            this.firstElementChild.classList.add("fa-chevron-down");

        } else {
            //article-visas
            textExpand.style.display = "block";

            //Ändrar aria-expanded från false till true(utvidgad knapp)
            this.setAttribute("aria-expanded", "true");

            //ändrar pil-ikon
            this.firstElemtChild.classList.remove("fa-chevron-down");
            this.firstElementchild.classList.add("fa-chevron-up");
        }
    })
}
