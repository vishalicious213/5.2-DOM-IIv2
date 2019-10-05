// Your code goes here
// 1. mouseenter, 2. mouseleave, 3. mouseover, 4. click, 5. dblclick,
// 6. mouseout


// HEADER
let logoHeading = document.querySelector(".logo-heading");
// console.log(logoHeading);
logoHeading.addEventListener("mouseenter", (event) => {logoHeading.style.backgroundColor = "red"});
logoHeading.addEventListener("mouseleave", (event) => {logoHeading.style.backgroundColor = "white"});

let navLink = document.querySelectorAll(".nav-link");
// console.log(navLink);
navLink.forEach(item => {
    item.addEventListener("mouseover", (event) => {
        item.style.fontSize = "250%";
        item.style.color = "red"
    })
})

// CONTAINER
let busImg = document.querySelector(".home img");
// console.log(busImg);
busImg.addEventListener("click", (event) => {busImg.style.transform = "rotate(45deg)"});
busImg.addEventListener("dblclick", (event) => {busImg.style.transform = "rotate(-45deg)"});

let letsGoImg = document.querySelector(".content-section img");
// console.log(letsGoImg);
letsGoImg.addEventListener("click", (event) => {letsGoImg.style.transform = "rotateX(180deg)"});
letsGoImg.addEventListener("dblclick", (event) => {letsGoImg.style.transform = "rotateX(0deg)"});

let boatImg = document.querySelector(".inverse-content img");
// console.log(boatImg);
boatImg.addEventListener("mouseover", (event) => {boatImg.style.transform = "rotateX(45deg)"});
boatImg.addEventListener("mouseout", (event) => {boatImg.style.transform = "rotateX(135deg)"});
// letsGoImg.addEventListener("dblclick", (event) => {letsGoImg.style.transform = "rotateX(0deg)"});

let allText = document.querySelectorAll("p");
// console.log(allText);
allText.forEach(word => {
    word.addEventListener("mouseover", (event) => {
        word.style.backgroundColor = "red"
    })
})

let allHeaders = document.querySelectorAll("h2");
// console.log(allHeaders);
allHeaders.forEach(header => {
    header.addEventListener("mouseover", (event) => {
        header.style.backgroundImage = "linear-gradient(red, yellow, red, yellow)"
        header.style.fontWeight = "bold";
    })
})