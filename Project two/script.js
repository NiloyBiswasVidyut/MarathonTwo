const accBtn = document.getElementById("acc");
const passBtn = document.getElementById("pass");
const hline = document.getElementById("hline");
const para = document.getElementById("para");
const labelOne = document.getElementById("labelOne");
const labelTwo = document.getElementById("labelTwo");

accBtn.addEventListener("click", ()=> {
    accBtn.classList.add("cngBtn");
    passBtn.classList.remove("cngBtn");



});

passBtn.addEventListener("click",()=> {
    passBtn.classList.add("cngBtn");
    accBtn.classList.remove("cngBtn");
});
closeBtnTwo.addEventListener("click",()=> {
    modal.classList.remove("open");
})