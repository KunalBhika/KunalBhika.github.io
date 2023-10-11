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

var images = ['./images/isha.png' , './images/saloni.png' , './images/hiten.png'];
var testiParas = [
    "Kunal's dedication and perseverance are remarkable, serving as a shining example to everyone around him. Kunal approaches every task with unwavering determination and commitment, demonstrating a strong work ethic that is truly commendable. His resilience in the face of challenges is admirable, and his ability to stay focused on his goals is truly inspiring. His hard work will not only bring him success but will also motivate others to strive for excellence. He is a testament to the power of diligence and determination, and I feel fortunate to have such a dedicated friend in my life." ,

    "Kunal Bhika stands as a shining example of talent and excellence. His relentless pursuit of perfection in every task he undertakes, coupled with his unwavering commitment to maintaining impeccable quality, is truly commendable. Whether it's his exceptional photography skills or his extensive knowledge of softwares, Kunal's capabilities are bound to inspire awe, <br>Working alongside Kunal on a team is not only a pleasure but also an enriching experience. His dedication, attention to detail, and ability to consistently deliver outstanding results contribute significantly to the success of any project. Kunal Bhika is undoubtedly a valuable asset in any collaborative endeavor." , 

    "So what to say about you the best man i have ever met in InternWare, My team mentor and now more than my personal mentor, I have literally learned a lot of things from you and have seen such a dedicated person like you, I know that you are ready to help each one of us and that quality is the one i take forward so stay same as you are stay humble i wish you the best for your future. May god bless you always may you make each one of us and your parents proud. Love you!!"
]
var testiNames = ["Isha" , "Saloni Indra" , "Hiten Anand"];
var testiDesig = ["Business Development Mentor @ InternWare" , "Chief Financial Officer @ InternWare" , "Technical Executive @ InternWare"];

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

// Phone Navigation button toggle
var sideMenu = document.getElementById("sideMenu");

const openMenu = () => {
    sideMenu.style.right = "0"
}

const closeMenu = () => {
    sideMenu.style.right = "-200px"
}

// Contact form script
const scriptURL = 'https://script.google.com/macros/s/AKfycbz0xr4B3xKuQqJPhmAQfQXd-qdfkzPRksF93bbicGpfbhZEMijJRh1t_HRXlXvCKjY/exec'
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = `Message sent successfully <i class="fa-solid fa-circle-check"></i>`;
          setTimeout(() => {
              msg.innerHTML = "";
          } , 5000);
          form.reset();
      })
      .catch(error => {
          msg.style.color = '#c5163d';
          msg.innerHTML = `Some error occurred. Try Again after sometime <i class="fa-solid fa-circle-xmark"></i>`;
          setTimeout(() => {
              msg.innerHTML = "";
         } , 5000);
         form.reset();
      })
  })