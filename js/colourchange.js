(() =>
{
const coloursButtons = document.querySelectorAll(".colPicker")
const colourChange = ((ev) =>{
const colourPicked = ev.target.classList[0] + "Back"
document.body.className = colourPicked === "resetBack" ? "":colourPicked
})
coloursButtons.forEach((btn)=>{
    btn.addEventListener("click",colourChange)
})
})()