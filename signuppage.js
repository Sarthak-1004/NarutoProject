let modeBtn = document.querySelector("#mode");
let currMode = "dark";
let effect = document.querySelector("#effect");
let fonteffect = document.querySelector("#font-effect");

modeBtn.addEventListener("click", () => {
    if (currMode === "dark") {
        currMode = "light";
        document.querySelector("body").style.backgroundImage = "url('/NarutoProjectImages/naruto\ and\ jiraya.jpg')";
        modeBtn.style.backgroundColor = 'black';
        modeBtn.style.color = 'white';
        effect.style.backgroundColor = 'black';
        effect.style.color = 'white';
        fonteffect.style.color = 'black';
        document.querySelector("button").style.color = 'black';
        document.querySelector("button").style.borderColor = 'black';
        document.querySelector("#font-effect-1").style.color = 'black';
        document.querySelector("#font-effect-2").style.color = 'black';
        document.querySelector("#font-effect-3").style.color = 'black';
        document.querySelector("#font-effect-5").style.color = 'black';
        document.querySelector("#font-effect-6").style.color = 'black';
    }
    else {
        currMode = "dark";
        document.querySelector("body").style.backgroundImage = "url('/NarutoProjectImages/itachi.jpg')";
        modeBtn.style.backgroundColor = 'white';
        modeBtn.style.color = 'black';
        effect.style.backgroundColor = 'white';
        effect.style.color = 'black';
        fonteffect.style.color = 'white';
        document.querySelector("button").style.color = 'white';
        document.querySelector("button").style.borderColor = 'white';
        document.querySelector("#font-effect-1").style.color = 'white';
        document.querySelector("#font-effect-2").style.color = 'white';
        document.querySelector("#font-effect-3").style.color = 'white';
        document.querySelector("#font-effect-5").style.color = 'white';
        document.querySelector("#font-effect-6").style.color = 'white';

    }
});