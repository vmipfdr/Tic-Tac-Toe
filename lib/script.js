let spot = document.querySelectorAll('.spot');
spot.forEach(spot => spot.addEventListener('click', changeColor))

let playerOne = [];
let playerTwo = [];

// let horizontal = ["#spot11",];
// let vertical = [];
// let diagonal = [];

let counter = 0

let boxcolor

function changeColor(e) {
	e.target.style.background = "red";
	counter+=1;
	playerOne.push(counter);
	console.log(counter);
	if (counter%2) {
		e.target.style.background = "blue";
		playerTwo.push(counter);
	}
	e.target.removeEventListener('click', changeColor);
	winner();
}

function winner() {
	if (
		spot[0].style.backgroundColor == "blue" &&
		spot[1].style.backgroundColor == "blue" &&
		spot[2].style.backgroundColor == "blue"
 		) {
		console.log('Player One Wins!')
 	}
 	if (
 		spot[0].style.backgroundColor == "blue" &&
 		spot[3].style.backgroundColor == "blue" &&
 		spot[6].style.backgroundColor == "blue"
 		) {
 		console.log('Player One Wins!')
 	}
	if (
		spot[0].style.backgroundColor == "blue" &&
 		spot[4].style.backgroundColor == "blue" &&
 		spot[8].style.backgroundColor == "blue"
		) {
		console.log('Player One Wins!')
	}
	if (
		spot[1].style.backgroundColor == "blue" &&
 		spot[4].style.backgroundColor == "blue" &&
 		spot[7].style.backgroundColor == "blue"
		) {
		console.log('Player One Wins!')
	}
	if (
		spot[2].style.backgroundColor == "blue" &&
 		spot[5].style.backgroundColor == "blue" &&
 		spot[8].style.backgroundColor == "blue"
		) {
		console.log('Player One Wins!')
	}
	if (
		spot[6].style.backgroundColor == "blue" &&
 		spot[7].style.backgroundColor == "blue" &&
 		spot[8].style.backgroundColor == "blue"
		) {
		console.log('Player One Wins!')
	}
	if (
		spot[3].style.backgroundColor == "blue" &&
 		spot[4].style.backgroundColor == "blue" &&
 		spot[5].style.backgroundColor == "blue"
		) {
		console.log('PlayerOne Wins!')
	}
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

