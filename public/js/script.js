var backgroundImg = document.getElementById("random-images");

window.onload = choosePic;

// Background images for main page
var myPics = new Array(
  "https://lp-cms-production.imgix.net/2022-01/GettyImages-1303314388.jpg?auto=format&q=75&w=3840",
  "https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/13039.jpg?itok=yPfXrEjd",
  "https://images4.alphacoders.com/663/663219.jpg",
  "https://images5.alphacoders.com/343/343272.jpg",
  "https://images.alphacoders.com/596/596564.jpg",
  "https://images8.alphacoders.com/874/874823.jpg",
  "https://images3.alphacoders.com/716/716017.jpg",
  "https://images8.alphacoders.com/813/813552.jpg",
  "https://images5.alphacoders.com/109/1091350.jpg"

);

// Function to choose random image when page loads
function choosePic() {
  var randomNum = Math.floor(Math.random() * myPics.length);
  backgroundImg.src = myPics[randomNum];
}
