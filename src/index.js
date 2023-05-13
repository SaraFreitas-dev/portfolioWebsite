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
  var links = document.getElementsByTagName("a");

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
  // Attach the click event listener to all anchor tags
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", playAudio);
  }
});


/*-------------------SUBMIT EMAIL------------------*/
function sendEmail() {
  var name = document.querySelector('.name').value;
  var email = document.querySelector('.email').value;
  var subject = document.querySelector('.subject').value;
  var message = document.querySelector('.message').value;

  // Perform input validation
  if (name.trim() === '' || subject.trim() === '' || message.trim() === '') {
    // Display an error message or take appropriate action
    alert('Please fill in all fields before submitting.');
    return;
  }

  // Validate email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  var link = 'mailto:sfontes94@gmail.com' +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent('Name: ' + name + '\n\nEmail: ' + email + '\n\nMessage: ' + message);

  window.location.href = link;
}

document.querySelector('.btn').addEventListener('click', sendEmail);


/*-------------------SUBMIT EMAIL------------------*/
document.onreadystatechange = function() {
  
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";

  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};