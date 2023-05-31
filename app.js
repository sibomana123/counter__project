const decreaseBtn= document.querySelector('.btnDecr');
const resetBtn = document.querySelector(".btnRes");
const increaseBtn = document.querySelector(".btnIncr");
const outputElement= document.querySelector('.output');

let counter=0;
increaseBtn.addEventListener('click',function(){
counter++
outputElement.textContent= counter;
if(counter> 0){
  outputElement.style.color='green' 
}
})

decreaseBtn.addEventListener("click", function () {
  counter--;
  outputElement.textContent = counter;
  if (counter < 0) {
    outputElement.style.color = "red";
  }
});


resetBtn.addEventListener("click", function () {
  counter=0;
  outputElement.textContent = counter;
  if (counter === 0) {
    outputElement.style.color = "black";
  }
});

