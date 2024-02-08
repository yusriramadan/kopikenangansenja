// Selector Elements //

const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector("#hamburger-menu");
const footer = document.querySelector("footer");
const buttonCTA = document.querySelector("#cta");

// Event Listener //

document.addEventListener("click", menuClick);
window.addEventListener("scroll", checkScroll);

// Toogle Navigasi Menu//
// Toggle : Menampilkan/menyembunyikan sebuah elemen yang diberi toogle

menu.onclick = () => {
  navbarNav.classList.toggle("active");
};

function menuClick(e) {
  if (!menu.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
}

// Menghilangkan Button "Beli Sekarang" //

const footerHeight = footer.offsetHeight;
const footerTop = footer.offsetTop;

function checkScroll() {
  const scrollPosition = window.pageYOffset;

  const viewportBottom = scrollPosition + window.innerHeight;

  if (viewportBottom >= footerTop - footerHeight) {
    buttonCTA.classList.add("hide");
  } else {
    buttonCTA.classList.remove("hide");
  }

  checkScroll();
}
