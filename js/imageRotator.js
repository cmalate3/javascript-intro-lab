(() => {
    let imageAr = [
  'images/view1.jpg',
  'images/view2.jpg',
  'images/view3.jpg',
  'images/view4.jpg',
  'images/view5.jpg',
  'images/view6.jpg'
];
//document.getElementById('myImages').setAttribute('src', imageAr[0]);



let currentIndex = 0;

function chgImage() {
  // Increment the index to get the next image
  currentIndex++;
  // If the index exceeds the array length, reset it to 0
  if (currentIndex >= imageAr.length) {
    currentIndex = 0;
  }
  // Change the image source to the next image in the array
  document.getElementById('myImages').setAttribute('src', imageAr[currentIndex]);
}
setInterval(chgImage, 2000);
document.getElementById('myImages').addEventListener('click', chgImage);
})();
