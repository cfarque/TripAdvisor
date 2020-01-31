document.addEventListener("DOMContentLoaded", () => {
  console.log("la page est chargée");
  document.querySelector(".register").addEventListener("click", () => {
    document.querySelector(".body-not-dark").classList.toggle("dark-mode");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("la page est chargée");
  document.querySelector(".times").addEventListener("click", () => {
    document.querySelector(".body-not-dark").classList.toggle("dark-mode");
  });
});
