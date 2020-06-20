let question = document.querySelectorAll("#question");
let answer = document.querySelectorAll('#answer');
const hotelModal = document.querySelectorAll('#hotel-modal');
const hotels = document.querySelectorAll('.hotels');
const activities = document.querySelectorAll('.activities');
const travel = document.querySelectorAll('.travel');
let modals = document.querySelectorAll('#modalHTML');
const button3 = document.querySelector('#button-3');
const button2 = document.querySelector('#button-2');
const button1 = document.querySelector('#button-1');

const els = document.querySelectorAll('.unfixed');
const button = document.querySelector('.welcomeBtn');
const start = document.querySelector('.loadpage');
const page = document.querySelector('#firstpage');
const clean = document.querySelector('#clean');

console.log(start);
$(document).ready(function(){
    $(this).scrollTop(0);
});

button.addEventListener('click', _removeClasses)

function _removeClasses() {
  for (var i = 0; i < els.length; i++) {
    els[i].classList.remove('unfixed')
  }
}



start.addEventListener('click', () => {
  page.classList.add('move');
  clean.classList.remove('move');
})

function _removeClasses() {
  for (var i = 0; i < els.length; i++) {
    els[i].classList.remove('unfixed')
  }
}


for (let i=0; i < question.length; i+=1 ) {
    let questions = question[i];
    let answers = answer[i];

questions.addEventListener('click', (e) => {
  if (answers.style.visibility === "visible") {
      answers.style.transform = "translateY(-5px)";
    answers.classList.toggle("height");
    answers.style.visibility = "hidden";



  } else {
    answers.style.visibility = "visible";
      answers.style.transform = "translateY(10px)";
      answers.classList.toggle("height");

    }

});
}


button1.addEventListener('click', () => {
  let number = activities.length;

  createScroll(0, 1, number);
});

button2.addEventListener('click', () => {
  let number = hotels.length;


  createScroll(0, 0, number);
});

button3.addEventListener('click', () => {
  let number = travel.length;
  console.log('yo');
  createScroll(0, 2, number);
});



function buttonDisplay(index, number, next, previous) {
if (index === 0) {
  previous.style.visibility = "hidden";

} else if (index === number-1) {
      next.style.visibility = "hidden";


} else {
    previous.style.visibility = "visible";
      next.style.visibility = "visible";}
       console.log(index, number);
    };


function createScroll(index, button, number) {

  let nexts = document.querySelectorAll('.next');
  let previouss = document.querySelectorAll('.previous');


	let next = nexts[button];
	let previous = previouss[button];

  createModal(0, button, number, next, previous);
    next.style.visibility = "visible";

		next.addEventListener('click', (e) => {

			if (index < number) {
					index += 1;
          console.log(index);

				 createModal(index, button, number, next, previous);
				 		} else {
				 console.log('next')
				}
		});

		previous.addEventListener('click', e => {
			if (index > 0) {
					index += -1;
          console.log(index);
                		 			createModal(index, button, number, next, previous);
			  } else {
				console.log('previous')
			}
		});

}


function createModal(index, button, number, next, previous) {
  modal = modals[button]
  if (button === 0) {
 let changeHotel = hotels[index];
	console.log(changeHotel);

  const html = changeHotel;
modal.innerHTML = html.innerHTML;

} else if (button === 1) {

let changeActivities = activities[index];
 console.log(changeActivities);

 const html = changeActivities;
modal.innerHTML = html.innerHTML;

} else if (button === 2) {

let changeTravel = travel[index];
 console.log(changeTravel);

 const html = changeTravel;
modal.innerHTML = html.innerHTML;
}

buttonDisplay(index, number, next, previous);
}


const changeImg = document.getElementById("changingImage");

let images = ["images/billboard/billboard-davies.png",
              "images/billboard/billboard-ember.png",
              "images/billboard/billboard-autistic.png",
            "images/billboard/billboard-kubo.png",
          "images/billboard/billboard-wedding.png",
        ];

let static = ["images/billboard/static1.png",
                      "images/billboard/static2.png",
                      "images/billboard/static3.png",
                            ];
let index=0;
let counter=0;

function changeImage()
{
  setTimeout(function(){ changeImg.setAttribute("src", static[counter]);}, 4500);
  changeImg.setAttribute("src", images[index]);
  index++;
  counter++;
  if(index >= images.length)
  {
    index=0;
  }
  if(counter >= static.length)
  {
    counter=0;
  }

}

setInterval(changeImage, 5000);
