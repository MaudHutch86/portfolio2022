


//  this code deals with the Homepage title Embrace and allows the effect on the letters

let spanTexts = document.getElementsByTagName("span");

window.onload = function (){
   for(spanText of spanTexts) {
      spanText.classList.add("active");
   }
}


// this code deals with the contact button on the homepage
const  contactButton = document.getElementById("contact-button");
contactButton.onclick = function () {
   location. href = "contact.html";
   };














    









