function getComputerChoice() {
    var c = Math.floor(Math.random() * 3);
    if (c == 0) {
        return "r";
    }
    else if (c == 1) {
        return "p";
    }
    else if (c == 2) {
        return "s";
    }
}

var words = document.querySelector(".words")



var h;
var c;

let hcard = document.querySelector(".hum");
let ccard = document.querySelector(".com");

let r = document.querySelector(".r")
let p = document.querySelector(".p")
let s = document.querySelector(".s")

var humanScore = 0;
var computerScore = 0;

function match(h) {

    if (humanScore < 5 && computerScore < 5) {
        var humanScore = 0;
        var computerScore = 0;

        r.addEventListener("click", event => {
            h = "r"
            hcard.textContent = "✊"
            c = getComputerChoice();

            if (c == "r") {
                ccard.textContent = "✊"
                words.textContent = "It's a Tie"
            }

            if (c == "p") {
                ccard.textContent = "🖐"
                words.textContent = "You Lose this One"
                computerScore++
            }

            if (c == "s") {
                ccard.textContent = "✌️"
                words.textContent = "You Win This Round"
                humanScore++
            }
        })


        p.addEventListener("click", event => {
            h = "p"
            hcard.textContent = "🖐"
            c = getComputerChoice();

            if (c == "r") {
                ccard.textContent = "✊"
                words.textContent = "You Win This Round"
                humanScore++

            }

            if (c == "p") {
                ccard.textContent = "🖐"
                words.textContent = "It'a a Tie"
            }

            if (c == "s") {
                ccard.textContent = "✌️"
                words.textContent = "You Lose this one"
                computerScore++
            }
        })

        s.addEventListener("click", event => {
            h = "s"
            hcard.textContent = "✌️"
            c = getComputerChoice();

            if (c == "r") {
                ccard.textContent = "✊"
                words.textContent = "You Lose this One"
                computerScore++
            }

            if (c == "p") {
                ccard.textContent = "🖐"
                words.textContent = "You Win This Round"
                humanScore++

            }

            if (c == "s") {
                ccard.textContent = "✌️"
                words.textContent = "It's a Tie"
            }
        })
    }
}

