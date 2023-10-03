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