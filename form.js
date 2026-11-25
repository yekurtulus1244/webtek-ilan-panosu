const form = document.querySelector("#basvuru");
const ileti = document.querySelector("#basvuru-ileti");

form.addEventListener("submit", (olay) => {
  olay.preventDefault();
  ileti.textContent = "Başvurunuz alındı.";
  form.reset();
});