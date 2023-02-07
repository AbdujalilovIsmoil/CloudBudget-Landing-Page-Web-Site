"use strict";

$(".fa-bars").addEventListener("click", () => {
  $(".navbars").classList.add("active");
});

$(".fa-times").addEventListener("click", () => {
  $(".navbars").classList.remove("active");
});

$$(".navbars-list-item__link").forEach((el) => {
  el.addEventListener("click", () => {
    $(".navbars").classList.remove("active");
  });
});
