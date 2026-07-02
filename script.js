
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".card button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Item added to cart! (Next version me Cart aur WhatsApp order connect karenge.)");
    });
  });
});
