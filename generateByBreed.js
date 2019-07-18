'use strict';

function getBreedDogImage(breed) {
  console.log('ran');
  fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(response => response.json())
    .then(jsonData => displayBreed(jsonData))
    .catch(error => console.log(error));
}

function submitBreed() {
  $('#breeds').submit(function(event) {
    event.preventDefault();
    let dogBreed = $('.generate-by-breed').val();
    getBreedDogImage(dogBreed);
  });
}

function randomNum(max) { 
  return Math.floor(Math.random() * (+max - +0) + +0);
}

function displayBreed(data) {
  if (data.status==='error') {
    alert(data.message);
    return;
  }
  const breedArr = data.message;
  let imageIndex = randomNum(breedArr.length);
  $('main').html(`<img src="${breedArr[imageIndex]}"></img>`);
}

$(submitBreed);