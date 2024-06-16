let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 100){
      text = "Please Enter More Than 100 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }


  const bar = document.getElementById('bar');
  const nav = document.getElementById('nav__list'); 
  const close = document.getElementById('close');
  if (bar) {
    bar.addEventListener("click", () => {
      if (nav) { 
        nav.classList.add('active');
      }
    });
  }

  if (close) {
    close.addEventListener("click", () => {
      if (nav) { 
        nav.classList.remove('active');
      }
    });
  }



  document.addEventListener('DOMContentLoaded', () => {
    let totalLikes = 0;
    let totalCart = 0;
  
    const likeButtons = document.querySelectorAll('.like-icon');
    const cartButtons = document.querySelectorAll('.cta-button');
  
    const totalLikesDisplay = document.getElementById('total-likes');
    const totalCartDisplay = document.getElementById('total-cart');
  
    likeButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (button.classList.contains('liked')) {
          button.classList.remove('liked');
          totalLikes -= 1;
        } else {
          button.classList.add('liked');
          totalLikes += 1;
        }
        totalLikesDisplay.textContent = totalLikes;
      });
    });
  
    cartButtons.forEach(button => {
      button.addEventListener('click', () => {
        totalCart += 1;
        totalCartDisplay.textContent = totalCart;
      });
    });
  });
  