const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const closeBtnTwo = document.getElementById("closeModalTwo");
const modal = document.getElementById("modal");


openBtn.addEventListener("click", ()=> {
    modal.classList.add("open");
});

closeBtn.addEventListener("click",()=> {
    modal.classList.remove("open");
});
closeBtnTwo.addEventListener("click",()=> {
    modal.classList.remove("open");
})