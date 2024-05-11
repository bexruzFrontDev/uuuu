let btn = document.querySelector(".btn");
let ekran = document.querySelector(".ekran");
let deleteBtn = document.querySelector(".delete");
let svet = document.querySelector(".let");
let uuu =document.querySelector('.uuu')

btn.addEventListener("click", function () {
  ekran.value = parseInt(ekran.value) + 1;
  console.log(ekran.value);
  if(ekran.value >= 15 && ekran.value <30){
    uuu.style.backgroundColor = 'blue'
  }
  
 else if(ekran.value >= 30 && ekran.value <50){
    uuu.style.backgroundColor = 'red'
  }
 else if(ekran.value >= 50 && ekran.value <100){
    uuu.style.backgroundColor = 'green'
  }
});

deleteBtn.addEventListener("click", function () {
  let restart = 0;
  ekran.value = restart;
  console.log(restart);
});

svet.addEventListener("click", function () {
  ekran.classList.toggle("inp2");
});
