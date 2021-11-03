const button = document.querySelector("button");
const nav = document.querySelector('nav');
let geklikt = false;

button.addEventListener("click", hamburgerMenu);

function hamburgerMenu() {
  nav.classList.toggle('uitschuiven'); // als er geklikt is schuift het menu uit door code in css
  geklikt = geklikt ? false : true; // verandert de afbeelding adhv de waarde van de boolean waardoor het menu een kruisje wordt
  button.style.background = geklikt ? 'url(../images/kruisje.png)' : 'url(../images/hamburgermenu.png)'; 
}
