let spot = document.querySelectorAll('.spot');
spot.forEach(spot => spot.addEventListener('click', changeColor))

let playerOne = [];
let playerTwo = [];

let horizontal = [];
let vertical = [];
let diagonal = []

let counter = 0

function changeColor(e) {
	e.target.style.background = "red";
	counter+=1;
	console.log(counter);
	if (counter%2) {
		e.target.style.background = "blue";
		playerOne.push(counter);
	}
	e.target.removeEventListener('click', changeColor);
}




// //set a variable color
// var color = white;

//for function changing color variable

//if color is changed to blue 

//next click if color is blue change to red, if color is red change to blue

// function changeColor() {
// 	if (color == blue;)
// } else 



// var a = 10;

// myFunction();

// function myFunction(){
//    a = 20;
// }

// alert("Value of 'a' outside the function " + a); //outputs 20

