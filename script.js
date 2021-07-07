window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  nav.classList.toggle("active", window.scrollY > 100);
});
let ul = document.querySelector("ul");
let a = document.querySelectorAll("a");

// a.forEach(el => {
//   el.addEventListener("click", function () {
//     ul.querySelector(".color").classList.remove("color");
//     el.classList.add("color");
//   });
// });
