const accBtn = document.getElementById("acc");
const passBtn = document.getElementById("pass");
const accDiv = document.getElementById("accDiv");
const passDiv = document.getElementById("passDiv");


accBtn.addEventListener("click", ()=> {
    accBtn.classList.add("cngBtn");
    passBtn.classList.remove("cngBtn");
    accDiv.classList.add("visible");
    passDiv.classList.remove("visible");
});

passBtn.addEventListener("click",()=> {
    passBtn.classList.add("cngBtn");
    accBtn.classList.remove("cngBtn");
    passDiv.classList.add("visible");
    accDiv.classList.remove("visible");
});


