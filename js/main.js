console.dir(document)
const myHeading = document.getElementById("myHeading")
console.dir(myHeading)

document.querySelector("nav ul li").setAttribute("class", "currentPage")
document.querySelector("nav ul li").setAttribute("href", "https://mustbe")

const redBtn = document.querySelector(".red")
redBtn.addEventListener("click", function(){
console.info("Red Button clicked")
document.body.setAttribute("class", "redBack")
})

const greenBtn = document.querySelector(".green")
greenBtn.addEventListener("click", function(){
    console.info("Green Button clicked")
    document.body.setAttribute("class", "greenback")
})


