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

function replaceDOM(event) {
	if (event.target.parentNode.parentElement.nodeName === 'SECTION') {
		textInput.addEventListener('keypress', function(typing) {
			console.log(typing.key);
		});
	}
}


function findFocus(event) {
	// console.log(event)
	document.getElementById('typeinme').focus()
	replaceDOM(event);
	// console.log(textToReplace)	
}

for (var i = 0; i < famousPeople.length; i++) {
	var domString = "";
	if (i % 2 == 0){
	domString += `<section class="person odd" id="person-${[i+1]}">`;
	} else {
	domString += `<section class="person even" id="person-${[i+1]}">`;
	} 
    domString += `<div class="title">`;
    domString += `<h2>${famousPeople[i].name}</h2>`;
    domString += `<h3>${famousPeople[i].title}</h3>`;
    domString += `</div>`;
    domString += `<div class="description" id="description">`;
    domString += `<p class="bio">${famousPeople[i].bio}</p>`;
    domString += `<h6>Birth: ${famousPeople[i].lifespan.birth} Death: ${famousPeople[i].lifespan.death}</h6>`;
    domString += `<img class="personImages" src="${famousPeople[i].image}">`;
    domString += '</div>';
    domString += '</section>';
    outputEl.innerHTML += domString;
}

//clears the input field when pressing enter
document.getElementById('typeinme').addEventListener('keyup', function(event) {
	// console.log(event);
	if (event.keyCode === 13) {
		document.getElementById('typeinme').value = '';
	}
});

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName('container');

for (var i = 0; i < containerEl.length; i++) {
	containerEl[i].addEventListener('mouseup', function(event) {
		if (event.target.parentNode.parentElement.nodeName === 'SECTION') {
			event.target.parentNode.parentElement.classList.add('dottedborder');
			findFocus(event)
		} 
	});
}

