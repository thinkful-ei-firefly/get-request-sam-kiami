'use strict';
function getDogImages(num) {
  console.log('ran');
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(jsonData => pulledData(jsonData.message));
}

function submitNumber() {
  $('#dogs').submit(function(event) {
    event.preventDefault();
    let numDogs = $('.generate-number').val();
    getDogImages(numDogs);
  });
}

function displayImage(image) {
  return `<image src= "${image}"</image>`;
}

const pulledData = function(data) {
  const arr =[];
  data.forEach(image => arr.push(displayImage(image)));
  let string = arr.join();
  $('main').html(string);
};

$(submitNumber);