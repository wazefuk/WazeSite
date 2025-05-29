var PoliteModeToggle = false;

function AlertThing() {
    if (PoliteModeToggle == false) {
        alert("Why are you like this? Mutilating my beautiful URLs and clicking on unfinished/broken links? I despise you, visitor. Never come back again (jk I like the traffic)");
    } else {
        alert("Sorry :3");
    }
}

function PoliteMode() {
    if (PoliteModeToggle == false) {
        PoliteModeToggle = true;
        document.body.classList.add("polite");
        document.getElementById("title").innerHTML = "Sorry";
    } else {
        PoliteModeToggle = false;
        document.body.classList.remove("polite");
        document.getElementById("title").innerHTML = "Bruh!!!!";
    }
}

const konamiCode = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
let inputSequence = [];

document.addEventListener("keydown", (e) => {
  inputSequence.push(e.key);
  if (inputSequence.length > konamiCode.length) {
    inputSequence.shift();
  }
  if (inputSequence.join("") === konamiCode.join("")) {
    document.body.style.background = "repeating-linear-gradient(45deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)";
    alert("ah crap somone pissed a rainbow on the background");
  }
});
