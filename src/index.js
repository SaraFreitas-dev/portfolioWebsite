//-----------OPEN GITHUB PAGE------------
const myButton = document.querySelector('#github');

myButton.addEventListener('click', () => {
  window.open('https://github.com/SaraFreitas-dev', '_blank');
});


//-----------OPEN LINKEDIN PAGE------------
const myButton1 = document.querySelector('#linkedin');

myButton1.addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/sarafreitasdev/', '_blank');
});


/*-------------MOUSE ICON MOVEMENT--------------*/
		var mouse = document.getElementById("mouse");
		document.onmousemove = function(e){
			mouse.style.left = e.clientX + "px";
			mouse.style.top = e.clientY + "px";
		}
        document.getElementById("mouse").addEventListener("mouseleave", function() {
            document.getElementById("mouse-btn");
          });
          
/*-------------------TOGGLE MENU------------------*/
let menu = document.querySelector(".menu");
let toggle = menu.querySelector(".toggle");
let navigation = menu.querySelector(".navigation");

toggle.addEventListener("click", function() {
  navigation.classList.toggle("activate");
});

// Close the navigation menu when clicking outside of it
document.addEventListener("click", function(event) {
  if (!menu.contains(event.target)) {
    navigation.classList.remove("activate");
  }
});


/*-------------------MAIN BUTTONS------------------*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


/*-----------BUTTON SOUNDS----------*/
// Wait for the document to finish loading
document.addEventListener("DOMContentLoaded", function() {
  // Get all buttons on the page
  var buttons = document.getElementsByTagName("button");

  // Get the audio element
  var audio = document.getElementById("audio");

  // Function to play the audio
  function playAudio() {
    audio.currentTime = 0; // Reset the audio to the beginning
    audio.play();
  }

  // Attach the click event listener to all buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playAudio);
  }
});












