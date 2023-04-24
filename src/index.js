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
            document.getElementById("mouse-btn").style.opacity = "1";
          });
          


