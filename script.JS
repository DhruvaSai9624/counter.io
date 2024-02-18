const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const countLabel = document.getElementById("countingLabel");
let count = 0;


increase.onclick = function(){
    count++;
    countingLabel.textContent = count;
}

decrease.onclick = function(){
    count--;
    countingLabel.textContent = count;
}
reset.onclick = function(){
    count = 0;
    countingLabel.textContent = count;
}

