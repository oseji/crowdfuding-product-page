"use strict";

const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.querySelector(".closeModal");
const completedModal = document.querySelector(".completedModal");
const btnComplete = document.getElementById("btnComplete");

const moneyBacked = document.getElementById("moneyBacked");
const numberBacked = document.getElementById("numberBacked");
const daysLeft = document.getElementById("daysLeft");
let money = 89914;
let members = 5008;
let days = 56;

const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");
const check4 = document.getElementById("check4");
const allChecks = document.querySelectorAll(".check");

const pledgeBox1 = document.getElementById("box1");
const pledgeBox2 = document.getElementById("box2");
const pledgeBox3 = document.getElementById("box3");
const pledgeBox4 = document.getElementById("box4");

const enterPledge1 = document.getElementById("enterPledge1");
const enterPledge2 = document.getElementById("enterPledge2");
const enterPledge3 = document.getElementById("enterPledge3");
const enterPledge4 = document.getElementById("enterPledge4");
const pledge25 = document.getElementById("pledge25");
const pledge75 = document.getElementById("pledge75");
const pledge200 = document.getElementById("pledge200");
const pledgeUnlimited = document.getElementById("pledgeUnlimited");
const pledgeBtn25 = document.getElementById("pledge25btn");
const pledgeBtn75 = document.getElementById("pledge75btn");
const pledgeBtn200 = document.getElementById("pledge200btn");
const pledgeUnlimitedBtn = document.getElementById("pledgeUnlimitedBtn");
const btnPledge = document.querySelectorAll(".btnPledge");

const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".navList ");

console.log(
  check1,
  check2,
  check3,
  check4,
  document.getElementById("enterPledge1"),
  allChecks
);

//TOGGLING NAV MENU
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("closeNav");
  navbar.classList.toggle("open");

  // menu.classList.toggle("closeNav");
  // menu.classList.toggle("open");
});

//OPENING PLEDGE MODAL
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
    enterPledge1.classList.toggle("closePledge");
    pledgeBox1.classList.toggle("pledgeBorderInactive");
    pledgeBox1.classList.toggle("pledgeBorderActive");
  } else {
    enterPledge1.classList.toggle("reveal");
    enterPledge1.classList.toggle("closePledge");
    pledgeBox1.classList.toggle("pledgeBorderInactive");
    pledgeBox1.classList.toggle("pledgeBorderActive");
  }
});

check2.addEventListener("change", (e) => {
  if (e.target.checked) {
    console.log("just checked");
    enterPledge2.classList.toggle("reveal");
    enterPledge2.classList.toggle("closePledge");
    pledgeBox2.classList.toggle("pledgeBorderInactive");
    pledgeBox2.classList.toggle("pledgeBorderActive");
  } else {
    enterPledge2.classList.toggle("reveal");
    enterPledge2.classList.toggle("closePledge");
    pledgeBox2.classList.toggle("pledgeBorderInactive");
    pledgeBox2.classList.toggle("pledgeBorderActive");
  }
});

check3.addEventListener("change", (e) => {
  if (e.target.checked) {
    console.log("just checked");
    enterPledge3.classList.toggle("reveal");
    enterPledge3.classList.toggle("closePledge");
    pledgeBox3.classList.toggle("pledgeBorderInactive");
    pledgeBox3.classList.toggle("pledgeBorderActive");
  } else {
    enterPledge3.classList.toggle("reveal");
    enterPledge3.classList.toggle("closePledge");
    pledgeBox3.classList.toggle("pledgeBorderInactive");
    pledgeBox3.classList.toggle("pledgeBorderActive");
  }
});

check4.addEventListener("change", (e) => {
  if (e.target.checked) {
    console.log("just checked");
    enterPledge4.classList.toggle("reveal");
    enterPledge4.classList.toggle("closePledge");
    pledgeBox4.classList.toggle("pledgeBorderInactive");
    pledgeBox4.classList.toggle("pledgeBorderActive");
  } else {
    enterPledge4.classList.toggle("reveal");
    enterPledge4.classList.toggle("closePledge");
    pledgeBox4.classList.toggle("pledgeBorderInactive");
    pledgeBox4.classList.toggle("pledgeBorderActive");
  }
});

//SUBMITTING A PLEDGE TO REVEAL COMPLETED MODAL
btnPledge.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id == "pledge25btn") {
      if (pledge25.value >= 25) {
        money += Number(pledge25.value);
        moneyBacked.textContent = `$${money.toLocaleString()}`;
        numberBacked.textContent = members++;
        completedModal.showModal();
        pledge25.value = "";
        //console.log(money);
      } else {
        alert("Must donate at least $25");
      }
    }

    if (btn.id == "pledge75btn") {
      if (pledge75.value >= 75) {
        money += Number(pledge75.value);
        moneyBacked.textContent = `$${money.toLocaleString()}`;
        numberBacked.textContent = members++;
        completedModal.showModal();
        pledge75.value = "";
      } else {
        alert("Must donate at least $75");
      }
    }

    if (btn.id == "pledge200btn") {
      if (pledge200.value >= 200) {
        money += Number(pledge200.value);
        moneyBacked.textContent = `$${money.toLocaleString()}`;
        numberBacked.textContent = members++;
        completedModal.showModal();
        pledge200.value = "";
      } else {
        alert("Must donate at least $200");
      }
    }

    if (btn.id == "pledgeUnlimitedBtn") {
      if (pledgeUnlimited.value > 0) {
        money += Number(pledgeUnlimited.value);
        moneyBacked.textContent = `$${money.toLocaleString()}`;
        numberBacked.textContent = members++;
        completedModal.showModal();
        pledgeUnlimited.value = "";
      } else {
        alert("Must be greater than $0");
      }
    }
  });
});

btnComplete.addEventListener("click", () => {
  completedModal.close();
});
