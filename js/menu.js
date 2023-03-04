const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  // SE O EVENTO FOR touchstart PREVINE O QUE ELE IRIA FAZER POR PADRÃO, NO CASO O click, USANDO O preventDefault()

  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");

  // TOGGLE -> ADICIONE CASO TENHA E REMOVA CASO NÃO TENHA

  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);

// touchstart -> INDICA QUE UM EVENTO DE TOQUE NA SUPERFICIE ESTÁ OCORRENDO, USANDO-O MELHORA A ACESSIBILIDADE NO MOBILE
btnMobile.addEventListener("touchstart", toggleMenu);
