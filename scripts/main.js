var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/131573.jpg') {
      myImage.setAttribute ('src','images/16945.jpg');
    } else {
      myImage.setAttribute ('src','images/131573.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'toto loves you, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'toto loves you, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}