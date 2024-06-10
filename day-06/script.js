const display = document.getElementById("display");
const minusBtn = document.getElementById("minusBtn");
const resetBtn = document.getElementById("resetBtn");
const plusBtn = document.getElementById("plusBtn");

let count = 0;

minusBtn.onclick = () => {
  count--;
  display.textContent = count;
};

resetBtn.onclick = () => {
  count = 0;
  display.textContent = count;
};

plusBtn.onclick = () => {
  count++;
  display.textContent = count;
};
