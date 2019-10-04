// Your code goes here
// 1. mouseenter, 2. mouseleave


//HEADER
let logoHeading = document.querySelector(".logo-heading");
// console.log(logoHeading);
logoHeading.addEventListener("mouseenter", (event) => {logoHeading.style.backgroundColor = "red"});
logoHeading.addEventListener("mouseleave", (event) => {logoHeading.style.backgroundColor = "white"});

let navLink = document.querySelectorAll(".nav-link");
console.log(navLink);
navLink.forEach(item => {
    item.addEventListener("mouseover", (event) => {
        item.style.fontSize = "250%"
    })
})
// navLink.addEventListener("mouseover", (event) => {navLink.style.fontSize = "250%"});

// const navLinkMove = document.querySelectorAll('.nav-link');
// navLinkMove.forEach(item =>{
//     item.addEventListener("mouseleave", e=>{
//         console.log(`mouse has left`);
//         item.style.color = 'black';
//     })
// })