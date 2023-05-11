/* 
NOTES:
to make this asynchronous test work, you need to change parameters in the HTML file. 
take a look at click listener on the button, you will see "babypack".
change it to "starterpack". 
done!
*/
function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}
function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}
function toggleMenu() {
  let menuToggle = document.querySelector(".toggle");
  let navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}
