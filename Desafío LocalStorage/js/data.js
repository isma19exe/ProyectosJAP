document.addEventListener("DOMContentLoaded",function(){
    const saved = localStorage.getItem("text");
    const data = document.getElementById("data");
    data.textContent= saved;
})