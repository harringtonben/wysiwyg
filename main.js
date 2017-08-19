console.log('here we go!');

var famousPeople = [
{
  title: "Jedi",
  name: "Luke Skywalker",
  bio: "Killin the game with a lightsaber as son as he found out his dad was darth vader",
  image: "https://vignette3.wikia.nocookie.net/starwars/images/6/62/LukeGreenSaber-MOROTJ.png/revision/latest?cb=20150426200707",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Sith Lord",
  name: "Darth Vader",
  bio: "Force choking chumps since before you were born.",
  image: "http://screenrant.imgix.net/wp-content/uploads/Star-Wars-Darth-Vader-Wallpaper.jpg",
  lifespan: {
    birth: 1435,
    death: 1534
  }
},
{
  title: "Emperor",
  name: "Palpatine",
  bio: "Proving that crusty old people really are not appealing to the eye...especially after some force lightning to the face.",
  image: "https://i.ytimg.com/vi/HjMILwTcLsQ/maxresdefault.jpg",
  lifespan: {
    birth: 2234,
    death: 1234
  }
},
];

var counter = 0;
var outputEl = document.getElementById('output-target');
var textInput = document.getElementById('typeinme');
var cardnumber = document.getElementsByClassName('product');

function findFocus() {
	typeinme.focus()
}

for (var i = 0; i < famousPeople.length; i++) {
	var domString = "";
	if (i % 2 == 0){
	domString += `<section class="product odd" id="person-${[i+1]}">`;
	} else {
	domString += `<section class="product even" id="person-${[i+1]}">`;
	} 
    domString += `<div class="title">`;
    domString += `<h2>${famousPeople[i].name}</h2>`;
    domString += `<h3>${famousPeople[i].title}</h3>`;
    domString += `</div>`;
    domString += `<div class="description" id="description">`;
    domString += `<p>${famousPeople[i].bio}</p>`;
    domString += `<h6>Birth: ${famousPeople[i].lifespan.birth} Death: ${famousPeople[i].lifespan.death}</h6>`;
    domString += `<img class="productImages" src="${famousPeople[i].image}">`;
    domString += '</div>';
    domString += '</section>';
    outputEl.innerHTML += domString;
}




document.body.addEventListener('click', function(event) {
	 if (event.target.classList == 'title') {
		// console.log(event.target.parentNode.classList);
		event.target.parentNode.classList.add('dottedborder');
		// console.log(event.target.parentNode.classList);
	} else if (event.target.parentNode.classList == 'description') {
		// console.log(event.target.parentElement.parentNode.classList);
		event.target.parentElement.parentNode.classList.add('dottedborder');
	} else if (event.target.parentNode.classList == 'title') {
		// console.log(event.target.parentNode.parentNode.classList);
		event.target.parentNode.parentNode.classList.add('dottedborder');
	}
});

document.body.addEventListener('click', function(event) {
	// console.log(event);
	 if (event.target.classList == 'title') {
		findFocus();
	} else if (event.target.parentNode.classList == 'description') {
		findFocus();
	} else if (event.target.parentNode.classList == 'title') {
		findFocus();
	}
});


// // Now containerEl will have elements in it
// var containerEl = document.getElementsByClassName("person__container");

// // Event listeners are created
// for (var i = 0; i < containerEl.length; i++) {
//   containerEl[i].addEventListener("click", function (event) {
//     // Logic to execute when the element is clicked
// });