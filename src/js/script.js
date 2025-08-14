/*search overlay*/
const searchIcon = document.getElementById("search-icon");
const searchOverlay = document.getElementById("search-overlay");
const closeSearch = document.getElementById("close-search");

searchIcon.addEventListener("click", (e) => {
  e.preventDefault();
  searchOverlay.classList.add("active");
});

closeSearch.addEventListener("click", () => {
  searchOverlay.classList.remove("active");
});


/*card overlay*/
const cartIcon = document.getElementById("cart-icon");
const iconOverlay = document.getElementById("cart-overlay");
const closeCart = document.getElementById("close-cart");

cartIcon.addEventListener("click", (e) => {
  e.preventDefault();
  iconOverlay.classList.add("active");
});

closeCart.addEventListener("click", () => {
  iconOverlay.classList.remove("active");
});

const coffeeMenu = document.getElementById("coffee-menu");
const pageOverlay = document.querySelector(".page-overlay");

// Coffee click par overlay toggle hoga
coffeeMenu.addEventListener("click", (e) => {
  e.stopPropagation(); 
  pageOverlay.classList.toggle("active");
});

// Agar overlay ke bahar click ho to hide ho jaye
document.addEventListener("click", (e) => {
  if (!pageOverlay.contains(e.target) && !coffeeMenu.contains(e.target)) {
    pageOverlay.classList.remove("active");
  }
});

/*nav bar new page*/
const navList = document.getElementById("i");
const listOverlay = document.getElementById("page-overlay");
navList.addEventListener('click', (e) => {
  e.preventDefault();
  listOverlay.classList.add("active");
})



/* slider card 6th page*/
function showForm(button) {
  document.querySelectorAll(".form-container").forEach(form => form.classList.remove("active"));
  document.querySelectorAll(".image-container img").forEach(img => img.style.filter = "");

  let container = button.closest(".image-container");
  let form = container.querySelector(".form-container");
  let img = container.querySelector("img");

  form.classList.add("active");
  img.style.filter = "blur(3px)";
}
