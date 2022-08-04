const modal = document.querySelector(".modal"),
  overlay = document.querySelector(".overlay"),
  btnCloseModal = document.querySelector(".close-modal"),
  btnOpenModal = document.querySelectorAll(".show-modal");
// modal.add;
console.log(btnOpenModal);
console.log(btnCloseModal);

const openModal = function () {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  console.log("closed");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
