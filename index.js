"use strict";

const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.querySelector(".closeModal");

const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");
const check4 = document.getElementById("check4");
const allChecks = document.querySelectorAll(".check");

const enterPledge1 = document.getElementById("enterPledge1");
const enterPledge2 = document.getElementById("enterPledge2");
const enterPledge3 = document.getElementById("enterPledge3");
const enterPledge4 = document.getElementById("enterPledge4");

const completedModal = document.querySelector(".completedModal");
const btnComplete = document.getElementById("btnComplete");
const btnPledge = document.querySelectorAll(".btnPledge");

console.log(
  check1,
  check2,
  check3,
  check4,
  document.getElementById("enterPledge1"),
  allChecks
);

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

//MAKING A PLEDGE

check1.addEventListener("change", (e) => {
  if (e.target.checked) {
    console.log("just checked");
    enterPledge1.classList.toggle("reveal");
    enterPledge1.classList.toggle("close");
  } else {
    enterPledge1.classList.toggle("reveal");
    enterPledge1.classList.toggle("close");
  }
});

check2.addEventListener("change", (e) => {
  if (e.target.checked) {
    console.log("just checked");
    enterPledge2.classList.toggle("reveal");
    enterPledge2.classList.toggle("close");
  } else {
    enterPledge2.classList.toggle("reveal");
    enterPledge2.classList.toggle("close");
  }
});

check3.addEventListener("change", (e) => {
  if (e.target.checked) {
    console.log("just checked");
    enterPledge3.classList.toggle("reveal");
    enterPledge3.classList.toggle("close");
  } else {
    enterPledge3.classList.toggle("reveal");
    enterPledge3.classList.toggle("close");
  }
});

check4.addEventListener("change", (e) => {
  if (e.target.checked) {
    console.log("just checked");
    enterPledge4.classList.toggle("reveal");
    enterPledge4.classList.toggle("close");
  } else {
    enterPledge4.classList.toggle("reveal");
    enterPledge4.classList.toggle("close");
  }
});

//SUBMITTING A PLEDGE TO REVEAL COMPLETED MODAL
btnPledge.forEach((btn) => {
  btn.addEventListener("click", () => {
    completedModal.showModal();
  });
});

btnComplete.addEventListener("click", () => {
  completedModal.close();
});

// allChecks.forEach((check) => {
//   //console.log(check);
//   check.addEventListener("change", (e) => {
//     if ((e.target.id = "check1")) {
//       console.log("just checked 1");
//       enterPledge1.classList.toggle("reveal");
//       enterPledge1.classList.toggle("close");
//     } else {
//       enterPledge1.classList.toggle("reveal");
//       enterPledge1.classList.toggle("close");
//     }

//     if ((e.target.id = "check2")) {
//       console.log("just checked 2");
//       enterPledge2.classList.toggle("reveal");
//       enterPledge2.classList.toggle("close");
//     } else {
//       enterPledge2.classList.toggle("reveal");
//       enterPledge2.classList.toggle("close");
//     }

//     if ((e.target.id = "check3")) {
//       console.log("just checked 3");
//       enterPledge3.classList.toggle("reveal");
//       enterPledge3.classList.toggle("close");
//     } else {
//       enterPledge3.classList.toggle("reveal");
//       enterPledge3.classList.toggle("close");
//     }

//     if ((e.target.id = "check4")) {
//       console.log("just checked 4");
//       enterPledge4.classList.toggle("reveal");
//       enterPledge4.classList.toggle("close");
//     } else {
//       enterPledge4.classList.toggle("reveal");
//       enterPledge4.classList.toggle("close");
//     }
//   });
// });
