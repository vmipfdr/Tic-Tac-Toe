let spot = document.querySelectorAll('.spot');
spot.forEach(spot => spot.addEventListener('click', changeColor))

// let horizontal = [1, 2, 3,] [4, 5, 6] [7, 8, 9]
// let vertical = [1, 4, 7] [2, 4, 8] [3, 6, 9]
// let diagonal = [1, 5, 9] [3, 5, 7]

// let box = []

let boxColor

let counter = 0

function changeColor(e) {
	e.target.style.background = "red";
	counter+=1;
	console.log(counter);
	if (counter%2) {
		e.target.style.background = "blue";
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

