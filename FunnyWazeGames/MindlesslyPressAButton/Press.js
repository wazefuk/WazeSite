// note: I suck at JavaScript! Please don't kill me if the code is awful!

// variables
var Presses = 0;
var Gold = 0;
var ButtonRotate = 0;
var PressesPerPress = 1;

// DOM elements
const Title = document.getElementById("title");
const Button = document.getElementById("button");
const Pressesp = document.getElementById("clicksp");
const CaptionText = document.getElementById("captiontext");
const Goldp = document.getElementById("goldp");

function CaptionTextSet(text) { // CaptionText.innerHTML feels sloppy to write so I made this
    CaptionText.innerHTML = text;
}

function Update_GUI() {
    Pressesp.innerHTML = Presses + " presses"; // change the "x presses" text to match the current presses
    if (Presses == 1) {Pressesp.innerHTML = "1 press";} // for the grammar police
    Button.style.rotate = ButtonRotate + "deg"; // rotate the button
    Goldp.innerHTML = Gold + " gold"; // change the "x gold" text to match the current gold
    switch (Presses) { // change the caption text (if applicable)
        case 90:
            CaptionTextSet("The crowd grows...");
            break;
        case 180:
            CaptionTextSet("The button has already gone 180 degrees and the crowd only grows.");
            break;
        case 360:
            CaptionTextSet("The button has done one full rotation and the first upgrade can be bought");
            break;
        case 800:
            CaptionTextSet("Have you gotten the +5 upgrade yet?");
            break;
        case 1000:
            CaptionTextSet("1K!!!");
            break;
        default:
            break; // this is useless but why not
    }
}

function Press() { // function handling pressing the button
    Presses += PressesPerPress;
    ButtonRotate += PressesPerPress;
    Update_GUI();
}

async function Autoclicker_Logic() { // logic for autoclickers (every 100 milliseconds, just do a regular press but *automated*)
    while (true) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        Press();
    }
}

async function AutoBuy_Logic(upgrade) {
    while (true) {
        await new Promise((resolve) => setTimeout(resolve, 300));
        Buy_Upgrade(upgrade);
    }
}

function Buy_Upgrade(upgrade) { // function handling upgrades
    if (upgrade === 1 && Presses >= 360) {
        Presses -= 360;
        PressesPerPress += 1;
    } else if (upgrade === 2 && Presses >= 800) {
        Presses -= 800;
        PressesPerPress += 5;
    } else if (upgrade === 3 && Presses >= 3000) {
        Presses -= 3000;
        Autoclicker_Logic();
    } else if (upgrade === 4 && Presses >= 6500) {
        Presses -= 6500;
        Gold += 1;
    } else if (upgrade === 5 && Gold >= 80) {
        Gold -= 80;
        AutoBuy_Logic(2);
    }
    Update_GUI();
}

Update_GUI(); // initialize, people!
