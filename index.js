function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
window.addEventListener("scroll", reveal);

function openCity(evt,cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("waw_tab_cont");
  for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

/* 
  When the user scrolls down, hide the navbar. 
  When the user scrolls up, show the navbar 
*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav_bar").style.top = "0";
    document.getElementById("nav_bar").style.boxShadow = "0 10px 30px -10px var(--nav-shadow)";
    document.getElementById("nav_bar").style.height = "70px";
    if(currentScrollPos <= 5) {
      document.getElementById("nav_bar").style.boxShadow = "none";
      document.getElementById("nav_bar").style.height = "100px";
    } 
  } else {
    document.getElementById("nav_bar").style.height = "70px";
    document.getElementById("nav_bar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

/* const printSentence = (id, sentence, speed = 50) => {
    let index = 0;
    let element = document.getElementById(id);
    
    let timer = setInterval(function() {
      const char = sentence[index];
      
      if (char === '<') {
        index = sentence.indexOf('>', index);  // skip to greater-than
      }
      
      element.innerHTML = sentence.slice(0, index);
      
      if (++index === sentence.length) {
        clearInterval(timer);
      }
    }, speed);
} */ // printSentence
  
  /* printSentence(
    'typeEffect',
    ' "In this universe Life has an end but, <br> in Life <span class="txt-p" >Learning</span> never ends" ',
    50
  ); */