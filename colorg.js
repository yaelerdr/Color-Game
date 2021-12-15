let squares = document.querySelectorAll(".square");
let colorsDisplay = document.getElementById("color");
let messageDisplayed = document.getElementById("message");
let h1 = document.querySelector("h1");
let reset = document.getElementsByTagName("button")[0];
let easyBtn= document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");



let colors = colorGenerator(6);
let pickedColor= colors[randNum(6)];
colorsDisplay.textContent = pickedColor;
onMode ();


easyBtn.addEventListener ("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    colors = colorGenerator(3);
    pickedColor= colors[randNum(3)];
    colorsDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {  //now, "colors" contains only 3 colors. only 3 new colors will be generated
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        h1.style.backgroundColor = "steelblue";
    }
})

hardBtn.addEventListener ("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    colors = colorGenerator(6);
    pickedColor= colors[randNum(6)];
    colorsDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    h1.style.backgroundColor = "steelblue";
})


reset.addEventListener ("click", () => {
    colors = colorGenerator(6);
    pickedColor = colors[randNum(6)];
    colorsDisplay.textContent = pickedColor;
    reset.textContent = "New Colors";
    onMode();
    h1.style.backgroundColor = "steelblue";
    messageDisplayed.textContent = "";
});



function onMode () {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function() {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplayed.textContent = "Correct!";
                reset.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplayed.textContent = "Try Again";
            }
        });
    }
};


function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
};

function colorGenerator(num) {
    let arr = [];
    for (let i = 0; i < num ; i++) {
        let a = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);  //selects a random number between 0 - 1
        let c = Math.floor(Math.random() * 255);
        arr[i] = "rgb(" + a + ", " + b + ", " + c + ")";
    }
    return arr;
};

function randNum(num) {
    let randNum = Math.floor(Math.random() * num);
    return randNum;
};

