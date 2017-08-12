var numSquares = 6;
var colors = [];
var correctColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#header");
var  messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");
var restartButton = document.querySelector("#restart");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttton listeners
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent == "Easy"){
				numSquares = 3;
			} else{
				numSquares = 6;
			}
			setup();
		});
	}

	//reset button listener
	restartButton.addEventListener("click", setup)

	//color button listeners
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = colors[i];

		squares[i].addEventListener("click", colorCompare);
	}

	setup();

}

function colorCompare(){
	if(this.style.background == correctColor){
		message.textContent = "Correct";
		changeColors();
	} 
	else{
		this.style.background = "#232323";
		message.textContent = "Try Again";
	}
}

function changeColors(){
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = correctColor;
	}
	header.style.background = correctColor;
	restartButton.textContent = "Play Again?"
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for(i=0; i<num; i++){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		arr.push("rgb(" + r + ", " + g + ", " + b + ")");
	}
	return arr;
}

function setup(){
	colors = generateRandomColors(numSquares);
	correctColor = pickColor();
	colorDisplay.textContent = correctColor;
	header.style.background = "steelblue";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.display = "none"
		}
	}
	messageDisplay.textContent = "";
	restartButton.textContent = "New Colors";
}