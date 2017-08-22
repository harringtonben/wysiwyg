console.log('here we go!');

var famousPeople = [
{
  title: "Jedi",
  name: "Luke Skywalker",
  bio: "Killin the game with a lightsaber as son as he found out his dad was darth vader",
  image: "http://i1.mirror.co.uk/incoming/article9603913.ece/ALTERNATES/s1200/PROD-Luke-Skywalker-in-Star-Wars-film.jpg",
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
{
  title: "Jedi Master",
  name: "Obi Wan Kenobi",
  bio: "Forever and always proving that he is a wise man and overall badass",
  image: "https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=768",
  lifespan: {
    birth: 1435,
    death: 1684
  }
},
{
  title: "Jedi Master",
  name: "Yoda",
  bio: "The ultimate Jedi badass...nothing else is needed",
  image: "http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2017/05/yoda-advice-featured-1.jpg",
  lifespan: {
    birth: 087,
    death: 2234
  }
},
];

var counter = 0;
var outputEl = document.getElementById('output-target');
var textInput = document.getElementById('typeinme');
var cardnumber = document.getElementsByClassName('product');
var selectedCard;

function replaceDOM(event) {
  // debugger;

		textInput.addEventListener('keypress', function(typing) {
		  selectedCard.innerHTML = '';
      selectedCard.innerHTML = textInput.value;
      
    }
    // console.log(selectedCard);
    // console.log(typing.key);
	);

}


function findFocus(event) {
	// console.log(event)
	document.getElementById('typeinme').focus()
	replaceDOM(event);
  console.log(event);
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
		if (event.target.parentNode.classList.contains('title')) {
      // console.log(event);
      selectedCard = event.target.parentNode.parentNode.childNodes[1].childNodes['0'];
			event.target.parentNode.parentElement.classList.add('dottedborder');
      // console.log(selectedCard);
			findFocus(event);
      // console.log(event);
		} else if (event.target.parentNode.classList.contains('description')) {
      // console.log(event);
      event.target.parentNode.parentElement.classList.add('dottedborder');
      selectedCard = event.target.parentNode.parentNode.childNodes[1].childNodes['0'];
      findFocus(event);
    }
	});
}

