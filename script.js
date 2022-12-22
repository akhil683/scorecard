let scoreOne = document.getElementById("score1");
let scoreTwo = document.getElementById("score2");
let count1 = 0;
let count2 = 0

function incrementCsk() {
    count1 += 1;
    scoreOne.textContent = count1;
}
function increment1rcb() {
    count2 += 1;
    scoreTwo.textContent = count2;
}
function increment2csk() {
    count1 += 2;
    scoreOne.textContent = count1;
}
function increment2rcb() {
    count2 += 2;
    scoreTwo.textContent = count2;
}
function increment3csk() {
    count1 += 3;
    scoreOne.textContent = count1;
}
function increment3rcb() {
    count2 += 3;
    scoreTwo.textContent = count2;
}
function restart() {
    count1 = 0;
    count2 = 0;
    scoreOne.textContent = count1;
    scoreTwo.textContent = count2;    
}