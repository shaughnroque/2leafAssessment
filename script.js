console.log('And this is where the Javascript goes')

// Trying to understand the solution I found on stack overflow

let images = ["assets/banner_image_2.png","assets/banner_image_1.png"] //Making an array of images to use

let imageHead = document.querySelector(".hero-container") // Getting the div of the background image to change

let i = 0; // making the index 0

setInterval(function(){
    imageHead.style.backgroundImage = "url(" + images[i] + ")"; // Here is a setInterval function to change the image every 5 seconds
    i = i + 1; // incrementing in the array 
    if(i == images.length) {  // if i equals the length of the array the index goes back to 0>?
        i = 0;
    }
}, 5000); // 5 second timer