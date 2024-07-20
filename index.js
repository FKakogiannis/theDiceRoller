//Detecting Button Press

var numberOfDiceButtons = document.querySelectorAll(".die").length;

let currentDieType = null;

for (var i = 0; i<numberOfDiceButtons; i++) {

    document.querySelectorAll(".die")[i].addEventListener("click", function () {
        
        var audio = new Audio('sounds/d20.mp3');
        
        audio.play();
        resetColor();
        changeColor(this);

        var buttonInnerHTML = this.innerHTML;
        var result = rollDie(buttonInnerHTML.replace(/\D/g, ''));
        if ( currentDieType !== buttonInnerHTML) {
            currentDieType = buttonInnerHTML;
            clearConsole();
            
        }
        addToConsole(result);

        console.log(parseInt(buttonInnerHTML.replace(/\D/g, '')));
        
    });

}

function clearConsole() {
    const consoleElement = document.getElementById('console');
    consoleElement.innerHTML = ''; // Clear the inner HTML content
}

function rollDie(dievalue) {
    dievalue = parseInt(dievalue);
    return Math.floor(Math.random() * dievalue) + 1;
}

function addToConsole(text) {
    const consoleElement = document.getElementById('console');
    const p = document.createElement('p');
    p.textContent = text;
    consoleElement.appendChild(p);
    // Optionally, scroll to the bottom of the console
    consoleElement.scrollTop = consoleElement.scrollHeight;
}

function resetColor(){
    var buttons = document.querySelectorAll(".die");
    buttons.forEach(function(btn) {
        var index = btn.innerHTML;
        btn.classList.remove(`d${index.replace(/\D/g, '')}v2`);
        btn.classList.add(`d${index.replace(/\D/g, '')}v1`);
      });
}

function changeColor(button){
    var buttonInnerHTML = button.innerHTML;
    button.classList.remove(`d${buttonInnerHTML.replace(/\D/g, '')}v1`);
    button.classList.add(`d${buttonInnerHTML.replace(/\D/g, '')}v2`);
}