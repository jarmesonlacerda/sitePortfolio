function escrevendoLetra() {
  /*função que ativa o elemento*/
  function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    arrTexto.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 75 * i);
    });
  }

  const titulo = document.querySelector(".digitando");
  ativaLetra(titulo);
}

const ativaMenu = document.querySelector(".bi-list");

ativaMenu.addEventListener("click", () => {
  ativaMenu.classList.toggle("bi-x-lg");
});
