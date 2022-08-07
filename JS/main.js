// بسم الله الرحمن الرحيم 




const controle = {
    "A_Z": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    "a_z": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    "numbers": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "spechialCracter": ["!", "@", "#", "$", "%", "&", "*", "-", "_"]
}


let check_box = document.querySelectorAll(".up .controle .checkbox input")
let check_box5 = document.querySelector(".up .controle .C5 input")
let buttonStart = document.querySelector(".up .start .button-start")
let buttonGenerate = document.querySelector(".dowen .geterate")
let showSerial = document.querySelector(".dowen .text")
let dowenPart = document.querySelector(".dowen")

let userArray = []
let partesSerial = []



buttonStart.onclick = function() {

    if (check_box5.value <= 0 || check_box5.value > 53 || check_box[0].hasAttribute("checked") === false && check_box[1].hasAttribute("checked") === false && check_box[2].hasAttribute("checked") === false && check_box[3].hasAttribute("checked") === false) {
        return false
    } else {
        dowenPart.style.cssText = "display: flex;"
        buttonStart.parentElement.remove()

        check_box.forEach(ele => {
            ele.setAttribute("disabled", "")
        });
        check_box5.setAttribute("disabled", "")
    
        checker();

        getRandomSerial()
    }

}



function checker() {
    check_box.forEach(function(ele) {
        if (ele.hasAttribute("checked")){
            let eleName = ele.name
            userArray.push(controle[eleName])
        }
    })
    userArray = userArray.join(",").split(",")
}


function getRandomSerial () {
    for (let i = 0; i < check_box5.value; i++) {
        partesSerial.push(userArray[Math.floor(Math.random() * userArray.length)])
    }
    showSerial.appendChild(document.createTextNode(partesSerial .join("")))
}


check_box.forEach(function(ele) {
    ele.onclick = function() {

        if(ele.hasAttribute("checked")) {
            ele.removeAttribute("checked")
        } else {
            ele.setAttribute("checked", "")
        }
    }
})


buttonGenerate.onclick = function () {
    showSerial.innerHTML = ""
    partesSerial = []
    getRandomSerial();
}