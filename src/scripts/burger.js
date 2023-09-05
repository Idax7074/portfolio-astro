// Lav variablen "btn", der henviser til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");

// Lav variablen "menu", der henviser til ".main-menu"
const menu = document.querySelector(".menu");

// Lav funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu() {
  // toggle klassen "shown" på menu vha. classList.toggle
  menu.classList.toggle("shown");

  // toggle klassen "change" på btn vha. classList.toggle
  btn.classList.toggle("change");

  // lav variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
  const menuShown = menu.classList.contains("shown");
  console.log(menuShown);
}

// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);
