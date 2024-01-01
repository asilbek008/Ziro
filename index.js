"use strict";
const findJobs = () => {
  const accardionBox = document.querySelector(".accardion-box");
  for (let i = 0; i < accardionBox.children.length; i++) {
    accardionBox.children[i].addEventListener("click", (e) => {
      if (e.currentTarget.classList.contains("accardion")) {
        accardionBox.children[i].classList.toggle("accardion-active");
        accardionBox.children[i].children[0].children[1].style.rotate = "0deg";
      }
    });
  }
};

const slideJobs = () => {
  let slideNum = 0;
  //Buttons
  const prev = document.querySelector(".jobs-prev");
  const next = document.querySelector(".jobs-next");
  //Elements
  const slideBox = document.querySelector(".featured-jobs-slider-box");
  const slideChild = slideBox.children.length;
  next.addEventListener("click", (e) => {
    slideNum++;
    if (slideNum >= slideChild - 1) {
      slideNum = 0;
    }
    slideBox.style.left = "-" + slideNum * 44.5 + "rem";
  });
  prev.addEventListener("click", (e) => {
    slideNum--;
    if (slideNum < 0) {
      slideNum = slideChild - 2;
    }
    slideBox.style.left = "-" + slideNum * 44.5 + "rem";
  });
};

//============================Customer Says==========================
// customer-prev
const customerSays = () => {
  let slideNum = 0;
  //Elements
  const customerBox = document.querySelector(".slider-customer-says-box");
  //Buttons
  const prevBtn = document.querySelector(".customer-prev");
  const nextBtn = document.querySelector(".customer-next");
  //Events

  const slideChild = customerBox.children.length;
  nextBtn.addEventListener("click", () => {
    slideNum++;
    if (slideNum > slideChild - 1) {
      slideNum = 0;
    }
    customerBox.style.left = "-" + slideNum * 125 + "rem";
  });
  prevBtn.addEventListener("click", () => {
    slideNum--;
    if (slideNum < 0) {
      slideNum = slideChild - 1;
    }
    customerBox.style.left = "-" + slideNum * 125 + "rem";
  });
};

(() => {
  findJobs();
  slideJobs();
  customerSays();
})();
