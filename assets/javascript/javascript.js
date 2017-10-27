console.log("hello")


var images = ["assets/images/slider1-car.jpg", "assets/images/slider3-books.jpeg", "assets/images/slider4-records.jpeg"]

var showImage;

var count = 0;

$(document).ready(startSlideshow);

window.onload = function start() {
    nextImage();
}

function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + ">");
};

function nextImage() {
    count++;
setTimeout(displayImage, 5000);
    if (count === images.length) {
count = 0;
    }
};

function startSlideshow() {
  showImage = setInterval(nextImage, 5000);
};

displayImage();



//var slideIndex = 0;
//carousel();

//function carousel() {
  //  var i;
   // var x = ["assets/images/slider1-car.jpg", "assets/images/slider3-books.jpeg", "assets/images/slider4-records.jpeg"];
   // for (i = 0; i < x.length; i++) {
     // x[i].style.display = "none"; 
   // }
   // slideIndex++;
   // if (slideIndex > x.length) {slideIndex = 1} 
   // x[slideIndex-1].style.display = "block"; 
   // setTimeout(carousel, 4000);
//};


var slideIndex = 0;
carousel2();

function carousel2() {
    var j;
    var z = document.getElementsByClassName("slide2");
    for (j = 0; j < z.length; j++) {
      z[j].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > z.length) {slideIndex = 1} 
    z[slideIndex-1].style.display = "block"; 
    setTimeout(carousel2, 10000); 
}







