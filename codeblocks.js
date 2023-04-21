
var section = document.querySelector('section')
var player1 = true
var player2 = false
var counter = 0
section.addEventListener("click", function () {
    var click = event.target
    if (player1 === true && counter === 0)  
    click.classList.add("cross-in")
    var player1 = false
    counter++
    if (player1 === false && counter === 1)
    click.classList.add("o-in")
    var player1 = true
    counter++
})
