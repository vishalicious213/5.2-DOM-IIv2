// Your code goes here
// 1. mouseenter, 2. mouseleave, 3. mouseover, 4. click, 5. dblclick


// HEADER
let logoHeading = document.querySelector(".logo-heading");
// console.log(logoHeading);
logoHeading.addEventListener("mouseenter", (event) => {logoHeading.style.backgroundColor = "red"});
logoHeading.addEventListener("mouseleave", (event) => {logoHeading.style.backgroundColor = "white"});

let navLink = document.querySelectorAll(".nav-link");
// console.log(navLink);
navLink.forEach(item => {
    item.addEventListener("mouseover", (event) => {
        item.style.fontSize = "250%"
    })
})

// CONTAINER
let busImg = document.querySelector(".home img");
// console.log(busImg);
busImg.addEventListener("click", (event) => {busImg.style.transform = "rotate(45deg)"});
busImg.addEventListener("dblclick", (event) => {busImg.style.transform = "rotate(-45deg)"});

let letsGoImg = document.querySelector(".content-section img");
console.log(letsGoImg);