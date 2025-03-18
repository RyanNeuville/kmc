document.addEventListener("DOMContentLoaded", () => {
  const cartCountElement = document.querySelector(".cart-count");
  const addToCartButtons = document.querySelectorAll(".btn-add-to-cart");
  const clearCartButton = document.querySelector(".btn-clear-cart");

  let cartCount = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.classList.contains("added")) {
        cartCount++;
        cartCountElement.textContent = cartCount;
        button.classList.add("added");
        button.disabled = true;
        button.innerHTML = '<i class="fas fa-check"></i> Ajouté';
      }
    });
  });

  clearCartButton.addEventListener("click", () => {
    cartCount = 0;
    cartCountElement.textContent = cartCount;
    addToCartButtons.forEach((button) => {
      button.classList.remove("added");
      button.disabled = false;
      button.innerHTML = '<i class="fas fa-cart-plus"></i> Ajouter';
    });
  });
});
