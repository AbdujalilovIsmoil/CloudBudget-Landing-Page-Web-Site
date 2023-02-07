"use strict";

for(let btn of $$(".section-card-container-box__img")){
  btn.addEventListener("dragover",(e)=> {
    console.log(e.target.value);
  })
}