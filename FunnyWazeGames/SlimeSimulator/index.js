var Debug = true;

function changeDBG_check() {
    if (Debug == true) {
        document.getElementById("debugnoshow").id = "debugshow";
    } else {
        document.getElementById("debugshow").id = "debugnowshow";
    }
}

function changeDBG() {
    if (Debug == true) {Debug = false;} else {Debug = true;}
    changeDBG_check();
}
changeDBG_check();
