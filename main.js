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
var review = document.querySelector(".myReview");
var reviewCount = document.querySelector(".large-span");
var names = document.querySelector(".name-title");
var designations = document.querySelector(".designation");

var images = ['./images/kunal.jpg' , './images/kunal-about.jpg'];
var testiParas = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, harum quia. Consectetur sit at culpa, laboriosam illum dolores iure corporis cumque ullam, provident ab delectus, enim placeat ipsa sequi consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse consequuntur maxime totam facilis libero saepe aut ipsam doloribus sint veritatis enim fugit quaerat, minus rerum ipsa quidem doloremque iure." ,

    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem totam, dolores delectus facere omnis cum, sit harum cumque illo aliquid nesciunt corporis rem minus deserunt tempore, ullam dignissimos nemo modi voluptate ipsam labore fugit doloremque. Error animi explicabo suscipit totam voluptate voluptatum iusto fugit reiciendis, facilis quibusdam nulla ipsum?"
]
var testiNames = ["Sumit Prasad" , "Manas Ratan"];
var testiDesig = ["SEO Expert @ Yahoo.com" , "SDE @ Apple.inc"];

var i = 0;   // Current image

// initail testimonial
slider_img.setAttribute('src' , images[i]);
review.innerHTML = `${testiParas[i]}`;
names.innerHTML = `${testiNames[i]}`;
reviewCount.innerHTML = `0${i+1}`;
designations.innerHTML = `${testiDesig[i]}`;

const nextReview = () => {
    if(i == images.length-1)
        i = -1;
    
    i++;
    slider_img.setAttribute('src' , images[i]);
    review.innerHTML = `${testiParas[i]}`;
    names.innerHTML = `${testiNames[i]}`;
    reviewCount.innerHTML = `0${i+1}`;
    designations.innerHTML = `${testiDesig[i]}`;
}

const prevReview = () => {
    if(i == 0)
        i = images.length;

    --i;
    slider_img.setAttribute('src' , images[i]);
    review.innerHTML = `${testiParas[i]}`;
    names.innerHTML = `${testiNames[i]}`;
    reviewCount.innerHTML = `0${i+1}`;
    designations.innerHTML = `${testiDesig[i]}`;
}