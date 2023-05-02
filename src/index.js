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


/*-----------SCROLL TEXT ANIMATION DELAY----------*/







