// About Section
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

const opentab = (tabname) => {
    const a = document.getElementById(tabname);
    const targetLink = event.target;
    console.log(tabname);
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.style.display = "none";
    }
    a.style.display = "block";
    targetLink.classList.add("active-link");
}

// Testimonials Section
var slider_img = document.querySelector(".slider-img");
var images = ['./images/kunal.jpg' , './images/kunal-about.jpg'];
var reviewCount = document.querySelector(".large-span");
var i = 0;   // Current image

const nextReview = () => {
    if(i == images.length-1)
        i = -1;
    slider_img.setAttribute('src' , images[++i]);
    reviewCount.innerHTML = `0${i+1}`;
}

const prevReview = () => {
    if(i == 0)
        i = images.length;
    slider_img.setAttribute('src' , images[--i]);
    reviewCount.innerHTML = `0${i+1}`;
}