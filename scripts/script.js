
function bttFunctionMore(param, section) {
    let paragraph = document.getElementById("LivroEli");
    let bttMore = document.getElementById("btnMore"+section);
    let bttMin = document.getElementById("btnMin"+section);
    if (param == "more") {
        alert(param + " if stantment pass");
        paragraph.classList.remove("hiddenText");
        paragraph.classList.add("visibleText");
        bttMore.classList.remove("visibleText");
        bttMore.classList.add("hiddenText");
        bttMin.classList.add("visibleText")
    } else {
        alert(param + " if stantment not pass");
        paragraph.classList.remove("visibleText");
        paragraph.classList.add("hiddenText");
        bttMore.classList.add("visibleText");
        bttMin.classList.remove("visibleText")
    }
}

function executaAcao(){
    alert("Eu vou para o Google");
    window.location = "http://google.com";
}

