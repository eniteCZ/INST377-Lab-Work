/* eslint-disable max-len */
/*
  Welcome to Javascript!

  This file contains parts of a simple script to make your carousel work.
  Please feel free to edit away - the main version of this with all the notes is safely stored elsewhere
*/
/* eslint-enable max-len */
// set our first slide's position to "0", the opening position in an array
let slidePosition = 0;

// gather a reference to every slide we're using via the class name and querySelectorAll
const slides = document.querySelectorAll('.carousel_item');

// change that "NodeList" into a Javascript "array", to get access to "array methods"
const slidesArray = Array.from(slides);

// Figure out how many slides we have available
const totalSlides = slidesArray.length;

function updateSlidePosition() {
  // Using the .forEach array method, (array.forEach((element) => { per-element work goes here }))
  // loop through all the slides in your slideArray
  // and remove the 'visible' class from each classList
  // then add a class 'hidden' to all of them

  // outside your .forEach,
  // add a 'visible' class to the slide at the current slidePosition in slides
  slidesArray.forEach((element) => {
    element.classList.remove('visible');
    element.classList.add('hidden');
  });
  slides[slidePosition].classList.add('visible');
}

function moveToNextSlide() {
  /*
   if you're already at the max number of slides sets your slidePosition
    to 0 else set the slidePosition += 1
  */
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition += 1;
  }
  updateSlidePosition(); // this is how you call a function within a function
}
function moveToPrevSlide() {
  /* If at 0 -> pos == max_pos, else pos -=1 */
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition -= 1;
  }
  updateSlidePosition();
}

/*
  These two functions have been assigned via "addEventListener"
  to the elements accessed by the "querySelector" set to the class name on each
*/
document.querySelector('.next') // Get the appropriate element (<button class="next">)
  .addEventListener('click', () => { // set an event listener on it - when it's clicked, do this callback function
    console.log('clicked next'); // let's tell the client console we made it to this point in the script
    moveToNextSlide(); // call the function above to handle this
  });

document.querySelector('.prev')
  .addEventListener('click', () => {
    console.log('clicked prev');
    moveToPrevSlide();
  });