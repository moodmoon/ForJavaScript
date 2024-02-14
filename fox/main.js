const imgEl = document.getElementById('random-image');
const srcArray = [
  'fennec-fox-hole_3x4.avif',
  '61wM2FFqdWL._SL500_.jpg',
  'images.jpeg',
  'maxresdefault.jpg',
];
// Stores path to images in an array

let index;
// Current image index

randomImage();
function randomImage() {
  const randomIndex = Math.floor(Math.random() * srcArray.length);
  // Generates random number between 0 and array length-1 (because Math.floor rounds)

  if (randomIndex !== index) {
    // If number NOT same as current image index...

    imgEl.src = srcArray[randomIndex];
    //...set as image src

    index = randomIndex;
    //...and as new current index value
  } else {
    // If number same as current index value (repeat)...

    randomImage();
    //...start function from beginning again
  }
}

function allButtonEvent() {
  const clearAllButton = document.getElementById('clearFoxButton');
  const likeButton = document.getElementById('likeNewFoxButton');
  const unLikeButton = document.getElementById('unlikeNewFoxButton');

  clearAllButton.addEventListener('click', clearAllButtonF);
  likeButton.addEventListener('click', likeButtonF);
  unLikeButton.addEventListener('click', unLikeButtonF);
}

function clearAllButtonF() {
  const likedFoxsElement = document.getElementById('likedFoxs');
  Array.from(likedFoxsElement.children).forEach((element) => {
    element.remove()
  })
}

function likeButtonF() {
  //random
  const img = document.getElementById('random-image').src;
  const imgsrc = img.replace('http://127.0.0.1:5500/fox/', '');
  randomImage();

  //new div
  const likedFoxsElement = document.getElementById('likedFoxs');
  const newDiv = document.createElement('div');
  likedFoxsElement.appendChild(newDiv);

  //new p
  const newP = document.createElement('p');
  newP.textContent = ' I like u ';
  newDiv.appendChild(newP);

  //new img
  const newImg = document.createElement('img');
  newImg.src = imgsrc;
  //css
  // newImg.width = '150px';
  // newImg.style = 'margin: 10px';
  newDiv.appendChild(newImg);

  //<!-- <p >Number of Liked Foxs: <span id="likedCount"></span></p> -->
  const myNewP = document.createElement('p');
  myNewP.textContent = 'Number of Liked Foxs: ';
  const myNewSpan = document.createElement('span');
  myNewSpan.id = 'likedCount';
  myNewP.appendChild(myNewSpan);

  //count
  const likeCountElement = document.getElementById('likedCount');
}

function unLikeButtonF() {}

allButtonEvent();
