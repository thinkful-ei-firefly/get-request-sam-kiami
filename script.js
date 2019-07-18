'use strict';
function getDogImages(num) {
  console.log('ran');
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(jsonData => pulledData(jsonData));
}

function submitNumber() {
  $('#dogs').submit(function(event) {
    event.preventDefault();
    let numDogs = $('input').val();
    getDogImages(numDogs);
  });
}

$(submitNumber);

function displayImage(image) {
  const arr =[]
  arr.push(`<image src= "${image}"</image>`)
return arr.join();}

const pulledData = function(data) {
  data.forEach
  (repo => $('main').html(displayImage(repo))
    )
};