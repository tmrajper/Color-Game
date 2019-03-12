var colors = [];
var pickedColor;
var numSquares = 6;
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.getElementById("colordisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    colorDisplay.textContent = pickedColor;
    setUpModeButtons();
    setUpSquares();
    reset();
}

resetButton.addEventListener("click", function() {
    reset();
});

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        //Add click listeners to squares
        squares[i].addEventListener("click", function() {
            //Grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //Compare to pickedColor
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function changeColors(color) {
    //Loop through All squares
    for (var i = 0; i < squares.length; i++) {
        //Chnage colors to match pickedColor
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //Make an Array
    var arr = [];
    //Add num random colors to array
    for (var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //Return array
    return arr;
}

function randomColor() {
    //pick a red from 0-255
    var red = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    var green = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", "  + green + ", " + blue + ")";
}

function reset() {
    //Generate all New Colors
    colors = generateRandomColors(numSquares);
    //Pick a new color from the array
    pickedColor = pickColor();
    //Change Color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //Chnage colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}