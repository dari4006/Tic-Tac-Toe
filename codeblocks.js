
var section = document.querySelector('section')
var player1 = true

section.addEventListener("click", function () {
    var click = event.target
    click.classList.add("crossin")
})