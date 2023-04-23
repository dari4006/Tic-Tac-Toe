
//FAILED ATTEMPT

var section = document.querySelector('section')
var counter = 0
//having this method doesnt stop the code when it needs to be but keeps counting (all counter++ are working but they are jsut going through the code)

//so everytime i click on the screen if the counter === (number) it will add the counter 1 from its value then move to the next code which is also 1 from the original value, so the reason why its not working is because its unlocking each if statement as it goes through as if its a hallway fall of doors that are unlocking each other automatically, so i need to find a way for the automation to stop and for the second if statement to come to a halt to check on whose turn, instead of going straight to the last turn. I have thought about instead of adding a counter to when its placed an X or O to count the clicks instead therefore it will always be stoppped until the netx click.
section.addEventListener("click", function () {
    var click = event.target
    if (counter === 0) {
        click.classList.add("cross-in")
        counter++
    }
})
section.addEventListener("click", function () {
    var click = event.target
    if (counter === 1) {
        click.classList.add("o-in")
        counter++
    }
})
section.addEventListener("click", function () {
    var click = event.target
    if (counter === 2) {
        click.classList.add("cross-in")
        counter++
    }
})
section.addEventListener("click", function () {
    var click = event.target
    if (counter === 3) {
        click.classList.add("o-in")
        counter++
    }
})


// SUCCESSFULL ATTEMPT
var section = document.querySelector('section')
var counter = 0

section.addEventListener("click", function () {
    var click = event.target
    counter += 1
    click = true
    if (counter === 1) {
        click.classList.add("cross-in")
    }
    if (counter === 2) {
        click.classList.add("o-in")
    }
    if (counter === 3) {
        click.classList.add("cross-in")
    }
    if (counter === 4) {
        click.classList.add("o-in")
    }
    if (counter === 5) {
        click.classList.add("cross-in")
    }
    if (counter === 6) {
        click.classList.add("o-in")
    }
    if (counter === 7) {
        click.classList.add("cross-in")
    }
    if (counter === 8) {
        click.classList.add("o-in")
    }
    if (counter === 9) {
        click.classList.add("o-in")
    }
})


// SUCCESS applying an addition opperator to the eventlistenter function allows the counter variable i made to go up by 1 with each click, the only bug ive found is if someone clicks on the same box multiple times it stuffs up the entire game as the order isnt right, I will fix this as i reach MVP!




//next step is working out a code that recognises combos and activates a variable when a combo of 3 numbers are seen, my inital thoughts is whereever the click is, when i console.log the "event target click" whereever i click it finds that value so if i click on the top right box it will console log: "<div id="sq3" class="cross-in"></div>", therefore i can use the id of the div somehow to store it in an array? from there i will need to see if i can detect a certain combo then as soon as a certain type of combo is detected i can use that in order to display a CSS alerting that the game is finished and whoever won, has won. for now im going to write "wet code" and right an if statement to test if 3 boxes in a row work.


//after a bit of thinking of working out how to assign a true statement to a div to make it if for example divs, 1, 4 and 7 are true then "player" has won the game as 1,4,7 are "top middle div" "middle middle div" and "bottom middle div" but its not as simple as assigning a boolean to a html tag, so maybe i can check if a div has an assigned class and if it is then make it a boolean? example: if (div1.hasClass("cross-in")) then set a variable to x1 for X player and 1st div so if X player pressed on 5th box it would be come back as x5, then i can set wet code to always check when clicked if those combos have been found?

var section = document.querySelector('section')
var counter = 0
var div1 = document.querySelector("#sq1")
section.addEventListener("click", function () {
    var click = event.target
    counter += 1
    click = true
    if (counter === 1) {
        click.classList.add("cross-in")
        if (div1.classList === "cross-in")
            console.log("debug")
    }



    if (counter === 2) {
        click.classList.add("o-in")
    }
    if (counter === 3) {
        click.classList.add("cross-in")
    }
    if (counter === 4) {
        click.classList.add("o-in")
    }
    if (counter === 5) {
        click.classList.add("cross-in")
    }
    if (counter === 6) {
        click.classList.add("o-in")
    }
    if (counter === 7) {
        click.classList.add("cross-in")
    }
    if (counter === 8) {
        click.classList.add("o-in")
    }
    if (counter === 9) {
        click.classList.add("o-in")
    }
})

// so far i am having issues trying to find the DOM object for div1, so how do i figure out how to find that document and add a boolean to it in order to assign a variable to it? i started by decalring a new varaible called "div1" to test the theory on the first square, this later on helped as i wrote an if statement nested to the original if statement finding out if div1's classList is equal to "cross-in" then to come back as the wrong method, changing the method to className fixed the issue at hand. I also need to fix the overlapping issue with backgrounds changing... but i believe i know how to do that!

var section = document.querySelector('section')
var counter = 0
var div1 = document.querySelector("#sq1")
section.addEventListener("click", function () {
    var click = event.target
    counter += 1
    if (counter === 1) {
        click.classList.add("cross-in")
        if (click.className === "cross-in") {
            console.log("X")   
        }
        if (click.className === "o-in") {
            console.log("O")
        }
    }
    if (counter === 2) {
        click.classList.add("o-in")
        if (click.className === "cross-in") {
            console.log("X")   
        }
        if (click.className === "o-in") {
            console.log("O")
        }
    }
    if (counter === 3) {
        click.classList.add("cross-in")
        if (click.className === "cross-in") {
            console.log("X")   
        }
        if (click.className === "o-in") {
            console.log("O")
        }
    }
    if (counter === 4) {
        click.classList.add("o-in")
        if (click.className === "cross-in") {
            console.log("X")   
        }
        if (click.className === "o-in") {
            console.log("O")
        }
    }
    if (counter === 5) {
        click.classList.add("cross-in")
        if (click.className === "cross-in") {
            console.log("X")   
        }
        if (click.className === "o-in") {
            console.log("O")
        }
    }
    if (counter === 6) {
        click.classList.add("o-in")
        if (click.className === "cross-in") {
            console.log("X")   
        }
        if (click.className === "o-in") {
            console.log("O")
        }
    }
    if (counter === 7) {
        click.classList.add("cross-in")
        if (click.className === "cross-in") {
            console.log("X")   
        }
        if (click.className === "o-in") {
            console.log("O")
        }
    }
    if (counter === 8) {
        click.classList.add("o-in")
        if (click.className === "cross-in") {
            console.log("X")   
        }
        if (click.className === "o-in") {
            console.log("O")
        }
    }
    if (counter === 9) {
        click.classList.add("cross-in")
        if (click.className === "cross-in") {
            console.log("X")   
        }
        if (click.className === "o-in") {
            console.log("O")
        }
    }
})


//







var section = document.querySelector('section')
var counter = 1
var div1 = document.querySelector("#sq1")
section.addEventListener("click", function () {
    var click = event.target
    if (counter === 1) {
        if (click.className === "cross-in") {
            console.log("already assigned")
        }
        if (click.className === "o-in") {
            console.log("already assigned")
        }
        if (click.className === "") {
            click.classList.add("cross-in") //
            counter += 1
        }
            if (click.className === "cross-in") {
                console.log("X")   
            }
            if (click.className === "o-in") {
                console.log("O")
            }
    }
    if (counter === 2) {
        if (click.className === "cross-in") {
            console.log("already assigned")
        }
        if (click.className === "o-in") {
            console.log("already assigned")
        }
        if (click.className === "") {
            click.classList.add("o-in") //
            counter += 1
        }
            if (click.className === "cross-in") {
                console.log("X")   
            }
            if (click.className === "o-in") {
                console.log("O")
            }
    }
    if (counter === 3) {
        if (click.className === "cross-in") {
            console.log("already assigned")
        }
        if (click.className === "o-in") {
            console.log("already assigned")
        }
        if (click.className === "") {
            click.classList.add("cross-in") //
            counter += 1
        }
            if (click.className === "cross-in") {
                console.log("X")   
            }
            if (click.className === "o-in") {
                console.log("O")
            }
    }
    if (counter === 4) {
        if (click.className === "cross-in") {
            console.log("already assigned")
        }
        if (click.className === "o-in") {
            console.log("already assigned")
        }
        if (click.className === "") {
            click.classList.add("o-in") //
            counter += 1
        }
            if (click.className === "cross-in") {
                console.log("X")   
            }
            if (click.className === "o-in") {
                console.log("O")
            }
    }
    if (counter === 5) {
        if (click.className === "cross-in") {
            console.log("already assigned")
        }
        if (click.className === "o-in") {
            console.log("already assigned")
        }
        if (click.className === "") {
            click.classList.add("cross-in") //
            counter += 1
        }
            if (click.className === "cross-in") {
                console.log("X")   
            }
            if (click.className === "o-in") {
                console.log("O")
            }
    }
    if (counter === 6) {
        if (click.className === "cross-in") {
            console.log("already assigned")
        }
        if (click.className === "o-in") {
            console.log("already assigned")
        }
        if (click.className === "") {
            click.classList.add("o-in") //
            counter += 1
        }
            if (click.className === "cross-in") {
                console.log("X")   
            }
            if (click.className === "o-in") {
                console.log("O")
            }
    }
    if (counter === 7) {
        if (click.className === "cross-in") {
            console.log("already assigned")
        }
        if (click.className === "o-in") {
            console.log("already assigned")
        }
        if (click.className === "") {
            click.classList.add("cross-in") //
            counter += 1
        }
            if (click.className === "cross-in") {
                console.log("X")   
            }
            if (click.className === "o-in") {
                console.log("O")
            }
    }
    if (counter === 8) {
        if (click.className === "cross-in") {
            console.log("already assigned")
        }
        if (click.className === "o-in") {
            console.log("already assigned")
        }
        if (click.className === "") {
            click.classList.add("o-in") //
            counter += 1
        }
            if (click.className === "cross-in") {
                console.log("X")   
            }
            if (click.className === "o-in") {
                console.log("O")
            }
    }
   if (counter === 9) {
        if (click.className === "cross-in") {
            console.log("already assigned")
        }
        if (click.className === "o-in") {
            console.log("already assigned")
        }
        if (click.className === "") {
            click.classList.add("cross-in") //
            counter += 1
        }
            if (click.className === "cross-in") {
                console.log("X")   
            }
            if (click.className === "o-in") {
                console.log("O")
            }
    }
})




//