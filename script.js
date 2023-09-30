const Form = document.getElementById("details")
const Tbale=document.querySelector(".table")


const sumbit = document.getElementById("button")

sumbit.addEventListener("click", ()=>{
    const First =document.getElementById("firstname").value;
    const last =document.getElementById("lastname").value;
    const gende =document.getElementById("gender").value;
    const state =document.getElementById("state").value;
    const pincode =document.getElementById("pincode").value;

    const firstRow=document.getElementById("first")
const secondRow=document.getElementById("second")
const thirdRow=document.getElementById("third")
const forthRow=document.getElementById("forth")
const FiveRow=document.getElementById("five")

firstRow.innerText=First
secondRow.innerText=last
thirdRow.innerText=gende
forthRow.innerText=state
FiveRow.innerText=pincode


})







