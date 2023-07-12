"use strict";

const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.querySelector(".closeModal");
console.log(modal, openModal);

openModal.addEventListener("click", () => {
  console.log("clicked");
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  console.log("clicked");
  modal.close();
});
