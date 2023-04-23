var section = document.querySelector('section')
var counter = 1
var div1 = document.querySelector("#sq1")
var div2 = document.querySelector("#sq2")
var div3 = document.querySelector("#sq3")
var div4 = document.querySelector("#sq4")
var div5 = document.querySelector("#sq5")
var div6 = document.querySelector("#sq6")
var div7 = document.querySelector("#sq7")
var div8 = document.querySelector("#sq8")
var div9 = document.querySelector("#sq9")
var announcer = document.querySelector("h1")


var combolist = 0
var scoreX = 0
var Score0 = 0
var xsq1 = false
var xsq2 = false
var xsq3 = false
var xsq4 = false
var xsq5 = false
var xsq6 = false
var xsq7 = false
var xsq8 = false
var xsq9 = false
var osq1 = false
var osq2 = false
var osq3 = false
var osq4 = false
var osq5 = false
var osq6 = false
var osq7 = false
var osq8 = false
var osq9 = false
var winStatus = false
var xwinStatus = false
var owinStatus = false

section.addEventListener("click", function () {
    var click = event.target
    if (counter === 1) {                                 //COUNTER1
        if (click.className === "cross-in") {
            console.log("already assigned")
        }
        if (click.className === "o-in") {
            console.log("already assigned")
        }
        if (click.className === "") {
            click.classList.add("cross-in") //
            counter += 1
            if (click.className === "cross-in") {
                if (click.id === "sq1") {
                    xsq1 = true
                }
                if (click.id === "sq2") {
                    xsq2 = true
                }
                if (click.id === "sq3") {
                    xsq3 = true
                }
                if (click.id === "sq4") {
                    xsq4 = true
                }
                if (click.id === "sq5") {
                    xsq5 = true
                }
                if (click.id === "sq6") {
                    xsq6 = true
                }
                if (click.id === "sq7") {
                    xsq7 = true
                }
                if (click.id === "sq8") {
                    xsq8 = true
                }
                if (click.id === "sq9") {
                    xsq9 = true
                }
            }
            if (click.className === "o-in") {
                if (click.id === "sq1") {
                    osq1 = true
                }
                if (click.id === "sq2") {
                    osq2 = true
                }
                if (click.id === "sq3") {
                    osq3 = true
                }
                if (click.id === "sq4") {
                    osq4 = true
                }
                if (click.id === "sq5") {
                    osq5 = true
                }
                if (click.id === "sq6") {
                    osq6 = true
                }
                if (click.id === "sq7") {
                    osq7 = true
                }
                if (click.id === "sq8") {
                    osq8 = true
                }
                if (click.id === "sq9") {
                    osq9 = true
                }
            }
        }
        if (xsq1 === true && xsq2 === true && xsq3 === true) {  //start of x combo
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq4 === true && xsq5 === true && xsq6 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq7 === true && xsq8 === true && xsq9 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq1 === true && xsq4 === true && xsq7 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq2 === true && xsq5 === true && xsq8 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq3 === true && xsq6 === true && xsq9 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq3 === true && xsq5 === true && xsq7 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq1 === true && xsq5 === true && xsq9 === true) {  //last of x combo
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (osq1 === true && osq2 === true && osq3 === true) {  //start of o combo
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq4 === true && osq5 === true && osq6 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq7 === true && osq8 === true && osq9 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq1 === true && osq4 === true && osq7 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq2 === true && osq5 === true && osq8 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq3 === true && osq6 === true && osq9 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq3 === true && osq5 === true && osq7 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq1 === true && osq5 === true && osq9 === true) {  //last of o combo
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (xwinStatus === true || owinStatus === true) {
            if (div1.className === "") {
                div1.classList.add("win-status")
            }
            if (div2.className === "") {
                div2.classList.add("win-status")
            }
            if (div3.className === "") {
                div3.classList.add("win-status")
            }
            if (div4.className === "") {
                div4.classList.add("win-status")
            }
            if (div5.className === "") {
                div5.classList.add("win-status")
            }
            if (div6.className === "") {
                div6.classList.add("win-status")
            }
            if (div7.className === "") {
                div7.classList.add("win-status")
            }
            if (div8.className === "") {
                div8.classList.add("win-status")
            }
            if (div9.className === "") {
                div9.classList.add("win-status")
            }
        }
        return
    }
    if (counter === 2) {                                                        //COUNTER2
        if (click.className === "cross-in") {
            console.log("already assigned")
        }
        if (click.className === "o-in") {
            console.log("already assigned")
        }
        if (click.className === "") {
            click.classList.add("o-in") //
            counter += 1
            if (click.className === "cross-in") {
                if (click.id === "sq1") {
                    xsq1 = true
                }
                if (click.id === "sq2") {
                    xsq2 = true
                }
                if (click.id === "sq3") {
                    xsq3 = true
                }
                if (click.id === "sq4") {
                    xsq4 = true
                }
                if (click.id === "sq5") {
                    xsq5 = true
                }
                if (click.id === "sq6") {
                    xsq6 = true
                }
                if (click.id === "sq7") {
                    xsq7 = true
                }
                if (click.id === "sq8") {
                    xsq8 = true
                }
                if (click.id === "sq9") {
                    xsq9 = true
                }
            }
            if (click.className === "o-in") {
                if (click.id === "sq1") {
                    osq1 = true
                }
                if (click.id === "sq2") {
                    osq2 = true
                }
                if (click.id === "sq3") {
                    osq3 = true
                }
                if (click.id === "sq4") {
                    osq4 = true
                }
                if (click.id === "sq5") {
                    osq5 = true
                }
                if (click.id === "sq6") {
                    osq6 = true
                }
                if (click.id === "sq7") {
                    osq7 = true
                }
                if (click.id === "sq8") {
                    osq8 = true
                }
                if (click.id === "sq9") {
                    osq9 = true
                }
            }
        }
        if (xsq1 === true && xsq2 === true && xsq3 === true) {  //start of x combo
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq4 === true && xsq5 === true && xsq6 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq7 === true && xsq8 === true && xsq9 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq1 === true && xsq4 === true && xsq7 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq2 === true && xsq5 === true && xsq8 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq3 === true && xsq6 === true && xsq9 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq3 === true && xsq5 === true && xsq7 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq1 === true && xsq5 === true && xsq8 === true) {  //last of x combo
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (osq1 === true && osq2 === true && osq3 === true) {  //start of o combo
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq4 === true && osq5 === true && osq6 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq7 === true && osq8 === true && osq9 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq1 === true && osq4 === true && osq7 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq2 === true && osq5 === true && osq8 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq3 === true && osq6 === true && osq9 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq3 === true && osq5 === true && osq7 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq1 === true && osq5 === true && osq9 === true) {  //last of o combo
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (xwinStatus === true || owinStatus === true) {
            if (div1.className === "") {
                div1.classList.add("win-status")
            }
            if (div2.className === "") {
                div2.classList.add("win-status")
            }
            if (div3.className === "") {
                div3.classList.add("win-status")
            }
            if (div4.className === "") {
                div4.classList.add("win-status")
            }
            if (div5.className === "") {
                div5.classList.add("win-status")
            }
            if (div6.className === "") {
                div6.classList.add("win-status")
            }
            if (div7.className === "") {
                div7.classList.add("win-status")
            }
            if (div8.className === "") {
                div8.classList.add("win-status")
            }
            if (div9.className === "") {
                div9.classList.add("win-status")
            }
        }
        return
    }
    if (counter === 3) {                                                                        //COUNTER3
        if (click.className === "cross-in") {
            console.log("already assigned")
        }
        if (click.className === "o-in") {
            console.log("already assigned")
        }
        if (click.className === "") {
            click.classList.add("cross-in") //
            counter += 1
            if (click.className === "cross-in") {
                if (click.id === "sq1") {
                    xsq1 = true
                }
                if (click.id === "sq2") {
                    xsq2 = true
                }
                if (click.id === "sq3") {
                    xsq3 = true
                }
                if (click.id === "sq4") {
                    xsq4 = true
                }
                if (click.id === "sq5") {
                    xsq5 = true
                }
                if (click.id === "sq6") {
                    xsq6 = true
                }
                if (click.id === "sq7") {
                    xsq7 = true
                }
                if (click.id === "sq8") {
                    xsq8 = true
                }
                if (click.id === "sq9") {
                    xsq9 = true
                }
            }
            if (click.className === "o-in") {
                if (click.id === "sq1") {
                    osq1 = true
                }
                if (click.id === "sq2") {
                    osq2 = true
                }
                if (click.id === "sq3") {
                    osq3 = true
                }
                if (click.id === "sq4") {
                    osq4 = true
                }
                if (click.id === "sq5") {
                    osq5 = true
                }
                if (click.id === "sq6") {
                    osq6 = true
                }
                if (click.id === "sq7") {
                    osq7 = true
                }
                if (click.id === "sq8") {
                    osq8 = true
                }
                if (click.id === "sq9") {
                    osq9 = true
                }
            }
        }
        if (xsq1 === true && xsq2 === true && xsq3 === true) {  //start of x combo
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq4 === true && xsq5 === true && xsq6 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq7 === true && xsq8 === true && xsq9 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq1 === true && xsq4 === true && xsq7 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq2 === true && xsq5 === true && xsq8 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq3 === true && xsq6 === true && xsq9 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq3 === true && xsq5 === true && xsq7 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq1 === true && xsq5 === true && xsq9 === true) {  //last of x combo
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (osq1 === true && osq2 === true && osq3 === true) {  //start of o combo
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq4 === true && osq5 === true && osq6 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq7 === true && osq8 === true && osq9 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq1 === true && osq4 === true && osq7 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq2 === true && osq5 === true && osq8 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq3 === true && osq6 === true && osq9 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq3 === true && osq5 === true && osq7 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq1 === true && osq5 === true && osq9 === true) {  //last of o combo
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (xwinStatus === true || owinStatus === true) {
            if (div1.className === "") {
                div1.classList.add("win-status")
            }
            if (div2.className === "") {
                div2.classList.add("win-status")
            }
            if (div3.className === "") {
                div3.classList.add("win-status")
            }
            if (div4.className === "") {
                div4.classList.add("win-status")
            }
            if (div5.className === "") {
                div5.classList.add("win-status")
            }
            if (div6.className === "") {
                div6.classList.add("win-status")
            }
            if (div7.className === "") {
                div7.classList.add("win-status")
            }
            if (div8.className === "") {
                div8.classList.add("win-status")
            }
            if (div9.className === "") {
                div9.classList.add("win-status")
            }
        }
        return
    }
    if (counter === 4) {                                                //COUNTER4
        if (click.className === "cross-in") {
            console.log("already assigned")
        }
        if (click.className === "o-in") {
            console.log("already assigned")
        }
        if (click.className === "") {
            click.classList.add("o-in") //
            counter += 1
            if (click.className === "cross-in") {
                if (click.id === "sq1") {
                    xsq1 = true
                }
                if (click.id === "sq2") {
                    xsq2 = true
                }
                if (click.id === "sq3") {
                    xsq3 = true
                }
                if (click.id === "sq4") {
                    xsq4 = true
                }
                if (click.id === "sq5") {
                    xsq5 = true
                }
                if (click.id === "sq6") {
                    xsq6 = true
                }
                if (click.id === "sq7") {
                    xsq7 = true
                }
                if (click.id === "sq8") {
                    xsq8 = true
                }
                if (click.id === "sq9") {
                    xsq9 = true
                }
            }
            if (click.className === "o-in") {
                if (click.id === "sq1") {
                    osq1 = true
                }
                if (click.id === "sq2") {
                    osq2 = true
                }
                if (click.id === "sq3") {
                    osq3 = true
                }
                if (click.id === "sq4") {
                    osq4 = true
                }
                if (click.id === "sq5") {
                    osq5 = true
                }
                if (click.id === "sq6") {
                    osq6 = true
                }
                if (click.id === "sq7") {
                    osq7 = true
                }
                if (click.id === "sq8") {
                    osq8 = true
                }
                if (click.id === "sq9") {
                    osq9 = true
                }
            }
        }
        if (xsq1 === true && xsq2 === true && xsq3 === true) {  //start of x combo
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq4 === true && xsq5 === true && xsq6 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq7 === true && xsq8 === true && xsq9 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq1 === true && xsq4 === true && xsq7 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq2 === true && xsq5 === true && xsq8 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq3 === true && xsq6 === true && xsq9 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq3 === true && xsq5 === true && xsq7 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq1 === true && xsq5 === true && xsq9 === true) {  //last of x combo
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (osq1 === true && osq2 === true && osq3 === true) {  //start of o combo
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq4 === true && osq5 === true && osq6 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq7 === true && osq8 === true && osq9 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq1 === true && osq4 === true && osq7 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq2 === true && osq5 === true && osq8 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq3 === true && osq6 === true && osq9 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq3 === true && osq5 === true && osq7 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq1 === true && osq5 === true && osq9 === true) {  //last of o combo
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (xwinStatus === true || owinStatus === true) {
            if (div1.className === "") {
                div1.classList.add("win-status")
            }
            if (div2.className === "") {
                div2.classList.add("win-status")
            }
            if (div3.className === "") {
                div3.classList.add("win-status")
            }
            if (div4.className === "") {
                div4.classList.add("win-status")
            }
            if (div5.className === "") {
                div5.classList.add("win-status")
            }
            if (div6.className === "") {
                div6.classList.add("win-status")
            }
            if (div7.className === "") {
                div7.classList.add("win-status")
            }
            if (div8.className === "") {
                div8.classList.add("win-status")
            }
            if (div9.className === "") {
                div9.classList.add("win-status")
            }
        }
        return
    }
    if (counter === 5) {                                                          //COUNTER5
        if (click.className === "cross-in") {
            console.log("already assigned")
        }
        if (click.className === "o-in") {
            console.log("already assigned")
        }
        if (click.className === "") {
            click.classList.add("cross-in") //
            counter += 1
            if (click.className === "cross-in") {
                if (click.id === "sq1") {
                    xsq1 = true
                }
                if (click.id === "sq2") {
                    xsq2 = true
                }
                if (click.id === "sq3") {
                    xsq3 = true
                }
                if (click.id === "sq4") {
                    xsq4 = true
                }
                if (click.id === "sq5") {
                    xsq5 = true
                }
                if (click.id === "sq6") {
                    xsq6 = true
                }
                if (click.id === "sq7") {
                    xsq7 = true
                }
                if (click.id === "sq8") {
                    xsq8 = true
                }
                if (click.id === "sq9") {
                    xsq9 = true
                }
            }
            if (click.className === "o-in") {
                if (click.id === "sq1") {
                    osq1 = true
                }
                if (click.id === "sq2") {
                    osq2 = true
                }
                if (click.id === "sq3") {
                    osq3 = true
                }
                if (click.id === "sq4") {
                    osq4 = true
                }
                if (click.id === "sq5") {
                    osq5 = true
                }
                if (click.id === "sq6") {
                    osq6 = true
                }
                if (click.id === "sq7") {
                    osq7 = true
                }
                if (click.id === "sq8") {
                    osq8 = true
                }
                if (click.id === "sq9") {
                    osq9 = true
                }
            }
        }
        if (xsq1 === true && xsq2 === true && xsq3 === true) {  //start of x combo
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq4 === true && xsq5 === true && xsq6 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq7 === true && xsq8 === true && xsq9 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq1 === true && xsq4 === true && xsq7 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq2 === true && xsq5 === true && xsq8 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq3 === true && xsq6 === true && xsq9 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq3 === true && xsq5 === true && xsq7 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq1 === true && xsq5 === true && xsq9 === true) {  //last of x combo
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (osq1 === true && osq2 === true && osq3 === true) {  //start of o combo
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq4 === true && osq5 === true && osq6 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq7 === true && osq8 === true && osq9 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq1 === true && osq4 === true && osq7 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq2 === true && osq5 === true && osq8 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq3 === true && osq6 === true && osq9 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq3 === true && osq5 === true && osq7 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq1 === true && osq5 === true && osq9 === true) {  //last of o combo
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (xwinStatus === true || owinStatus === true) {
            if (div1.className === "") {
                div1.classList.add("win-status")
            }
            if (div2.className === "") {
                div2.classList.add("win-status")
            }
            if (div3.className === "") {
                div3.classList.add("win-status")
            }
            if (div4.className === "") {
                div4.classList.add("win-status")
            }
            if (div5.className === "") {
                div5.classList.add("win-status")
            }
            if (div6.className === "") {
                div6.classList.add("win-status")
            }
            if (div7.className === "") {
                div7.classList.add("win-status")
            }
            if (div8.className === "") {
                div8.classList.add("win-status")
            }
            if (div9.className === "") {
                div9.classList.add("win-status")
            }
        }
        return
    }
    if (counter === 6) {                                               //COUNTER6
        if (click.className === "cross-in") {
            console.log("already assigned")
        }
        if (click.className === "o-in") {
            console.log("already assigned")
        }
        if (click.className === "") {
            click.classList.add("o-in") //
            counter += 1
            if (click.className === "cross-in") {
                if (click.id === "sq1") {
                    xsq1 = true
                }
                if (click.id === "sq2") {
                    xsq2 = true
                }
                if (click.id === "sq3") {
                    xsq3 = true
                }
                if (click.id === "sq4") {
                    xsq4 = true
                }
                if (click.id === "sq5") {
                    xsq5 = true
                }
                if (click.id === "sq6") {
                    xsq6 = true
                }
                if (click.id === "sq7") {
                    xsq7 = true
                }
                if (click.id === "sq8") {
                    xsq8 = true
                }
                if (click.id === "sq9") {
                    xsq9 = true
                }
            }
            if (click.className === "o-in") {
                if (click.id === "sq1") {
                    osq1 = true
                }
                if (click.id === "sq2") {
                    osq2 = true
                }
                if (click.id === "sq3") {
                    osq3 = true
                }
                if (click.id === "sq4") {
                    osq4 = true
                }
                if (click.id === "sq5") {
                    osq5 = true
                }
                if (click.id === "sq6") {
                    osq6 = true
                }
                if (click.id === "sq7") {
                    osq7 = true
                }
                if (click.id === "sq8") {
                    osq8 = true
                }
                if (click.id === "sq9") {
                    osq9 = true
                }
            }
        }
        if (xsq1 === true && xsq2 === true && xsq3 === true) {  //start of x combo
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq4 === true && xsq5 === true && xsq6 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq7 === true && xsq8 === true && xsq9 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq1 === true && xsq4 === true && xsq7 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq2 === true && xsq5 === true && xsq8 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq3 === true && xsq6 === true && xsq9 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq3 === true && xsq5 === true && xsq7 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq1 === true && xsq5 === true && xsq9 === true) {  //last of x combo
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (osq1 === true && osq2 === true && osq3 === true) {  //start of o combo
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq4 === true && osq5 === true && osq6 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq7 === true && osq8 === true && osq9 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq1 === true && osq4 === true && osq7 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq2 === true && osq5 === true && osq8 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq3 === true && osq6 === true && osq9 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq3 === true && osq5 === true && osq7 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq1 === true && osq5 === true && osq9 === true) {  //last of o combo
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (xwinStatus === true || owinStatus === true) {
            if (div1.className === "") {
                div1.classList.add("win-status")
            }
            if (div2.className === "") {
                div2.classList.add("win-status")
            }
            if (div3.className === "") {
                div3.classList.add("win-status")
            }
            if (div4.className === "") {
                div4.classList.add("win-status")
            }
            if (div5.className === "") {
                div5.classList.add("win-status")
            }
            if (div6.className === "") {
                div6.classList.add("win-status")
            }
            if (div7.className === "") {
                div7.classList.add("win-status")
            }
            if (div8.className === "") {
                div8.classList.add("win-status")
            }
            if (div9.className === "") {
                div9.classList.add("win-status")
            }
        }
        return
    }
    if (counter === 7) {                                                        //COUNTER7
        if (click.className === "cross-in") {
            console.log("already assigned")
        }
        if (click.className === "o-in") {
            console.log("already assigned")
        }
        if (click.className === "") {
            click.classList.add("cross-in") //
            counter += 1
            if (click.className === "cross-in") {
                if (click.id === "sq1") {
                    xsq1 = true
                }
                if (click.id === "sq2") {
                    xsq2 = true
                }
                if (click.id === "sq3") {
                    xsq3 = true
                }
                if (click.id === "sq4") {
                    xsq4 = true
                }
                if (click.id === "sq5") {
                    xsq5 = true
                }
                if (click.id === "sq6") {
                    xsq6 = true
                }
                if (click.id === "sq7") {
                    xsq7 = true
                }
                if (click.id === "sq8") {
                    xsq8 = true
                }
                if (click.id === "sq9") {
                    xsq9 = true
                }
            }
            if (click.className === "o-in") {
                if (click.id === "sq1") {
                    osq1 = true
                }
                if (click.id === "sq2") {
                    osq2 = true
                }
                if (click.id === "sq3") {
                    osq3 = true
                }
                if (click.id === "sq4") {
                    osq4 = true
                }
                if (click.id === "sq5") {
                    osq5 = true
                }
                if (click.id === "sq6") {
                    osq6 = true
                }
                if (click.id === "sq7") {
                    osq7 = true
                }
                if (click.id === "sq8") {
                    osq8 = true
                }
                if (click.id === "sq9") {
                    osq9 = true
                }
            }
        }
        if (xsq1 === true && xsq2 === true && xsq3 === true) {  //start of x combo
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq4 === true && xsq5 === true && xsq6 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq7 === true && xsq8 === true && xsq9 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq1 === true && xsq4 === true && xsq7 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq2 === true && xsq5 === true && xsq8 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq3 === true && xsq6 === true && xsq9 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq3 === true && xsq5 === true && xsq7 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq1 === true && xsq5 === true && xsq9 === true) {  //last of x combo
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (osq1 === true && osq2 === true && osq3 === true) {  //start of o combo
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq4 === true && osq5 === true && osq6 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq7 === true && osq8 === true && osq9 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq1 === true && osq4 === true && osq7 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq2 === true && osq5 === true && osq8 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq3 === true && osq6 === true && osq9 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq3 === true && osq5 === true && osq7 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq1 === true && osq5 === true && osq9 === true) {  //last of o combo
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (xwinStatus === true || owinStatus === true) {
            if (div1.className === "") {
                div1.classList.add("win-status")
            }
            if (div2.className === "") {
                div2.classList.add("win-status")
            }
            if (div3.className === "") {
                div3.classList.add("win-status")
            }
            if (div4.className === "") {
                div4.classList.add("win-status")
            }
            if (div5.className === "") {
                div5.classList.add("win-status")
            }
            if (div6.className === "") {
                div6.classList.add("win-status")
            }
            if (div7.className === "") {
                div7.classList.add("win-status")
            }
            if (div8.className === "") {
                div8.classList.add("win-status")
            }
            if (div9.className === "") {
                div9.classList.add("win-status")
            }
        }
        return
    }
    if (counter === 8) {                                               //COUNTER8
        if (click.className === "cross-in") {
            console.log("already assigned")
        }
        if (click.className === "o-in") {
            console.log("already assigned")
        }
        if (click.className === "") {
            click.classList.add("o-in") //
            counter += 1
            if (click.className === "cross-in") {
                if (click.id === "sq1") {
                    xsq1 = true
                }
                if (click.id === "sq2") {
                    xsq2 = true
                }
                if (click.id === "sq3") {
                    xsq3 = true
                }
                if (click.id === "sq4") {
                    xsq4 = true
                }
                if (click.id === "sq5") {
                    xsq5 = true
                }
                if (click.id === "sq6") {
                    xsq6 = true
                }
                if (click.id === "sq7") {
                    xsq7 = true
                }
                if (click.id === "sq8") {
                    xsq8 = true
                }
                if (click.id === "sq9") {
                    xsq9 = true
                }
            }
            if (click.className === "o-in") {
                if (click.id === "sq1") {
                    osq1 = true
                }
                if (click.id === "sq2") {
                    osq2 = true
                }
                if (click.id === "sq3") {
                    osq3 = true
                }
                if (click.id === "sq4") {
                    osq4 = true
                }
                if (click.id === "sq5") {
                    osq5 = true
                }
                if (click.id === "sq6") {
                    osq6 = true
                }
                if (click.id === "sq7") {
                    osq7 = true
                }
                if (click.id === "sq8") {
                    osq8 = true
                }
                if (click.id === "sq9") {
                    osq9 = true
                }
            }
        }
        if (xsq1 === true && xsq2 === true && xsq3 === true) {  //start of x combo
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq4 === true && xsq5 === true && xsq6 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq7 === true && xsq8 === true && xsq9 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq1 === true && xsq4 === true && xsq7 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq2 === true && xsq5 === true && xsq8 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq3 === true && xsq6 === true && xsq9 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq3 === true && xsq5 === true && xsq7 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq1 === true && xsq5 === true && xsq9 === true) {  //last of x combo
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (osq1 === true && osq2 === true && osq3 === true) {  //start of o combo
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq4 === true && osq5 === true && osq6 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq7 === true && osq8 === true && osq9 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq1 === true && osq4 === true && osq7 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq2 === true && osq5 === true && osq8 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq3 === true && osq6 === true && osq9 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq3 === true && osq5 === true && osq7 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq1 === true && osq5 === true && osq9 === true) {  //last of o combo
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (xwinStatus === true || owinStatus === true) {
            if (div1.className === "") {
                div1.classList.add("win-status")
            }
            if (div2.className === "") {
                div2.classList.add("win-status")
            }
            if (div3.className === "") {
                div3.classList.add("win-status")
            }
            if (div4.className === "") {
                div4.classList.add("win-status")
            }
            if (div5.className === "") {
                div5.classList.add("win-status")
            }
            if (div6.className === "") {
                div6.classList.add("win-status")
            }
            if (div7.className === "") {
                div7.classList.add("win-status")
            }
            if (div8.className === "") {
                div8.classList.add("win-status")
            }
            if (div9.className === "") {
                div9.classList.add("win-status")
            }
        }
        return
    }
    if (counter === 9) {                                                        //COUNTER9
        if (click.className === "cross-in") {
            console.log("already assigned")
        }
        if (click.className === "o-in") {
            console.log("already assigned")
        }
        if (click.className === "") {
            click.classList.add("cross-in") //
            counter += 1
            if (click.className === "cross-in") {
                if (click.id === "sq1") {
                    xsq1 = true
                }
                if (click.id === "sq2") {
                    xsq2 = true
                }
                if (click.id === "sq3") {
                    xsq3 = true
                }
                if (click.id === "sq4") {
                    xsq4 = true
                }
                if (click.id === "sq5") {
                    xsq5 = true
                }
                if (click.id === "sq6") {
                    xsq6 = true
                }
                if (click.id === "sq7") {
                    xsq7 = true
                }
                if (click.id === "sq8") {
                    xsq8 = true
                }
                if (click.id === "sq9") {
                    xsq9 = true
                }
            }
            if (click.className === "o-in") {
                if (click.id === "sq1") {
                    osq1 = true
                }
                if (click.id === "sq2") {
                    osq2 = true
                }
                if (click.id === "sq3") {
                    osq3 = true
                }
                if (click.id === "sq4") {
                    osq4 = true
                }
                if (click.id === "sq5") {
                    osq5 = true
                }
                if (click.id === "sq6") {
                    osq6 = true
                }
                if (click.id === "sq7") {
                    osq7 = true
                }
                if (click.id === "sq8") {
                    osq8 = true
                }
                if (click.id === "sq9") {
                    osq9 = true
                }
            }
        }
        if (xsq1 === true && xsq2 === true && xsq3 === true) {  //start of x combo
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq4 === true && xsq5 === true && xsq6 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq7 === true && xsq8 === true && xsq9 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq1 === true && xsq4 === true && xsq7 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq2 === true && xsq5 === true && xsq8 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq3 === true && xsq6 === true && xsq9 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq3 === true && xsq5 === true && xsq7 === true) {
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (xsq1 === true && xsq5 === true && xsq9 === true) {  //last of x combo
            console.log("X PLAYER WINS")
            xwinStatus = true
            document.querySelector('h1').textContent = "X Player Wins!"
        }
        if (osq1 === true && osq2 === true && osq3 === true) {  //start of o combo
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq4 === true && osq5 === true && osq6 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq7 === true && osq8 === true && osq9 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq1 === true && osq4 === true && osq7 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq2 === true && osq5 === true && osq8 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq3 === true && osq6 === true && osq9 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq3 === true && osq5 === true && osq7 === true) {
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (osq1 === true && osq5 === true && osq9 === true) {  //last of o combo
            console.log("O PLAYER WINS")
            owinStatus = true
            document.querySelector('h1').textContent = "O Player Wins!"
        }
        if (xwinStatus === true || owinStatus === true) {
            if (div1.className === "") {
                div1.classList.add("win-status")
            }
            if (div2.className === "") {
                div2.classList.add("win-status")
            }
            if (div3.className === "") {
                div3.classList.add("win-status")
            }
            if (div4.className === "") {
                div4.classList.add("win-status")
            }
            if (div5.className === "") {
                div5.classList.add("win-status")
            }
            if (div6.className === "") {
                div6.classList.add("win-status")
            }
            if (div7.className === "") {
                div7.classList.add("win-status")
            }
            if (div8.className === "") {
                div8.classList.add("win-status")
            }
            if (div9.className === "") {
                div9.classList.add("win-status")
            }
        }
        document.querySelector('h1').textContent = "DRAW!"
        console.log("PLAYERS X AND O DRAW")
        return
    }
})
