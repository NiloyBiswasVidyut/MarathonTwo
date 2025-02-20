const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const closeBtnTwo = document.getElementById("closeModalTwo");
const modal = document.getElementById("modal");

const  body = document.getElementsByTagName("body");

openBtn.addEventListener("click", ()=> {
    modal.classList.add("open");
    body.classList.add("cng");
});

closeBtn.addEventListener("click",()=> {
    modal.classList.remove("open");
    body.classList.remove("cng");
});
closeBtnTwo.addEventListener("click",()=> {
    modal.classList.remove("open");
    body.classList.remove("cng");
})