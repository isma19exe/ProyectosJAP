const button=document.getElementById("buttonText")
const text=document.getElementById("inputText")

button.addEventListener("click",function(){
    const inputText =text.value;
    localStorage.setItem("text", inputText)
    text.value=""
})
