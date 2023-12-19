let locale = "";
const url = "https://raw.githubusercontent.com/SA-Sandro/Proyecto_DIW/gh-pages/localization/localize.json";

let traducciones = {};
let variableRandom = {};
document.addEventListener("DOMContentLoaded", () => {

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            traducciones = data;
            idiomaEspañol();
        })
        .catch(error => {
            console.error('Error fetching the data:', error);
        });

    const inputEspañol = document.querySelector(".españa");
    const inputIngles = document.querySelector(".ingles");

    inputEspañol.addEventListener("click", idiomaEspañol);
    inputIngles.addEventListener("click", idiomaIngles);
});

function traducirPagina() {
    document
        .querySelectorAll("[data-i18n-key]")
        .forEach(translateElement);
}

function translateElement(element) {
    const key = element.getAttribute("data-i18n-key");
    const translation = traducciones[locale][key];
    element.innerText = translation;
}

function idiomaEspañol() {
    locale = "es";
    traducirPagina();
}

function idiomaIngles() {
    locale = "en";
    traducirPagina();
}
