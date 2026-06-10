// ACCORDION

const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach(btn => {

btn.addEventListener("click", () => {

const content = btn.nextElementSibling;

if(content.style.display === "block"){
content.style.display = "none";
}else{
content.style.display = "block";
}

});

});

// ACESSIBILIDADE

let tamanhoFonte = 16;

const aumentar = document.getElementById("aumentarFonte");
const diminuir = document.getElementById("diminuirFonte");

aumentar.addEventListener("click", () => {
tamanhoFonte += 1;
document.documentElement.style.setProperty(
"--font-size",
`${tamanhoFonte}px`
);
});

diminuir.addEventListener("click", () => {
tamanhoFonte -= 1;
document.documentElement.style.setProperty(
"--font-size",
`${tamanhoFonte}px`
);
});

// MODO ESCURO

document
.getElementById("alternarTema")
.addEventListener("click", () => {
document.body.classList.toggle("dark");
});

// LEITURA POR VOZ

const sintetizador = window.speechSynthesis;
let fala;

document
.getElementById("lerPagina")
.addEventListener("click", () => {

const texto =
document.getElementById("conteudo-principal").innerText;

fala = new SpeechSynthesisUtterance(texto);

fala.lang = "pt-BR";
fala.rate = 1;
fala.pitch = 1;

sintetizador.speak(fala);

});

document
.getElementById("pararLeitura")
.addEventListener("click", () => {

sintetizador.cancel();

});