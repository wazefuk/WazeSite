var Presses = 0;
var Ppp = 1; // ppp stands for Presses Per Press btw
var Gold = 0;
var ButtonAngle = 0;

const Button = document.getElementById("button");
const ClicksP = document.getElementById("clicksp");
const captionText = document.getElementById("captiontext");

function captionTextUpd() {
    switch (Presses) {
        case 0:
            captionText.innerText = "People hear around the class that you have found this button and are determined to press it as much as you can.";
            break;
        case 90:
            captionText.innerText = "The crowd grows...";
            break;
        case 180:
            captionText.innerText = "The button has already gone 180 degrees and the crowd only grows.";
            break;
    }
}

function GUIUpd() {
    Button.style.rotate = ButtonAngle + "deg";
    ClicksP.innerText = Presses + " Presses";
    captionTextUpd();
}

function Press() {
    Presses = Presses + Ppp;
    ButtonAngle = ButtonAngle + Ppp;
    GUIUpd();
}

GUIUpd();
