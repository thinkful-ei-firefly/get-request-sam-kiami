'use strict';
function getDogImages(num) {
  console.log('ran');
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(jsonData => console.log(jsonData));
}

function submitNumber() {
  $('#dogs').submit(function(event) {
    event.preventDefault();
    let numDogs = $('input').val();
    getDogImages(numDogs);
  });
}

$(submitNumber);