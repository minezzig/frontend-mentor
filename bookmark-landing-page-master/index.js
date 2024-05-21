const hamburger = document.getElementById("hamburger")
const close = document.getElementById("close")
const dropdown = document.getElementById("dropdown")
//const answers = document.querySelectorAll("#answers")
const arrows = document.querySelectorAll("#arrow")

hamburger.addEventListener("click", () => {
    dropdown.classList.add("flex")
    dropdown.classList.remove("hidden")
    document.body.classList.add("overflow-y-hidden")
});

close.addEventListener("click", () => {
    dropdown.classList.remove("flex");    
    dropdown.classList.add("hidden")
    document.body.classList.remove("overflow-y-hidden")
});


arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
        arrow.classList.toggle("rotate-180");
        arrow.classList.toggle("stroke-red")
        arrow.parentElement.nextElementSibling.classList.toggle("max-h-96");
        arrow.parentElement.nextElementSibling.classList.toggle("opacity-100");
    })
})