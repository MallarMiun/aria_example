/*Kod av Malin Larsson, Mittuniversitetet*/
"use strict";

window.onload = init;

function init() {

    //Hämtar in knapparna
    const expanderBtn = document.getElementsByClassName("expanderBtn");

    let articleContent = [
        `WAI-ARIA är en teknisk standard som används för att göra webbinnehåll mer tillgängligt för personer som använder hjälpmedel (till exempel skärmläsare).`
        , `Du använder ARIA genom att en eller fler aria-attribut läggs i ett HTML-element`,
        `<strong>Ingen</strong> Aria är bättre än <strong>dålig</strong> Aria. Men det bör användas som hjälpmedel för personer som använder skärmläsare när något görs dynamiskt på en webbplats.`]

    //Lägger en händelselyssnare på varje knapp
    for (let i = 0; i < expanderBtn.length; i++) {

        
        expanderBtn[i].addEventListener("click", function () {
            //Hämtar in nästa element vilket blir article-elementet efter knappen som trycks
            let textExpand = this.nextElementSibling.lastElementChild;

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
                this.firstElementChild.classList.remove("fa-chevron-down");
                this.firstElementChild.classList.add("fa-chevron-up");
            }
        })
    
    }

}

