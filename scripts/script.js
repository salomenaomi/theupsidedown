const button = document.querySelector("#button");
const nav = document.querySelector('nav');

const menuButton = "images/hamburgermenu.png";
const kruisje = "images/kruisje.png";
const aantalKeerKlikken = 0;

button.addEventListener("click", hamburgerMenu);
button.addEventListener("click", hamburgerMenuVeranderen);

function hamburgerMenu () {
  nav.classList.toggle('uitschuiven');
  console.log("Ik ben geklikt");
}

// function hamburgerMenuVeranderen() {
//   button.src = menuButton;
//   aantalKeerKlikken++;
//   if (aantalKeerKlikken % 2 != 0); {
//     button.src = kruisje;
//     console.log("Ik ben anders geklikt");
//   } else (aantalKeerKlikken % 2 = 0); {
//     button.src = menuButton;

// }
// }