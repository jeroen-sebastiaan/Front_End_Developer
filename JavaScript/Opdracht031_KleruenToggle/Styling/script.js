const colorMenu = document.querySelector(".nav-main");
const hamburgerIcon = document.querySelector(".btn-toggle-nav");
const bodyElement = document.body;
const greyBackground = document.querySelector("li a.grey");
const greenBackground = document.querySelector("li a.green");
const orangeBackground = document.querySelector("li a.orange");
const redBackground = document.querySelector("li a.red");
const yellowBackground = document.querySelector("li a.yellow");
const purpleBackground = document.querySelector("li a.purple");

// Hamburger-toggle
hamburgerIcon.addEventListener("click", function(){
  colorMenu.classList.toggle("nav-main__blind");
});

// Function Backgroundcolor-Grey 
const changeClassGreyBackground = () => {
  bodyElement.classList.remove("green");
  hamburgerIcon.classList.remove("green");
  bodyElement.classList.remove("orange");
  hamburgerIcon.classList.remove("orange");
  bodyElement.classList.remove("red");
  hamburgerIcon.classList.remove("red");
  bodyElement.classList.remove("yellow");
  hamburgerIcon.classList.remove("yellow");
  bodyElement.classList.remove("purple");
  hamburgerIcon.classList.remove("purple");
  bodyElement.classList.add("grey");
  hamburgerIcon.classList.add("grey");
};

// Function Backgroundcolor-Green
const changeClassGreenBackground = () => {
  bodyElement.classList.remove("grey");
  hamburgerIcon.classList.remove("grey");
  bodyElement.classList.remove("orange");
  hamburgerIcon.classList.remove("orange");
  bodyElement.classList.remove("red");
  hamburgerIcon.classList.remove("red");
  bodyElement.classList.remove("yellow");
  hamburgerIcon.classList.remove("yellow");
  bodyElement.classList.remove("purple");
  hamburgerIcon.classList.remove("purple");
  bodyElement.classList.add("green");
  hamburgerIcon.classList.add("green");
};

// Function Backgroundcolor-Orange
const changeClassOrangeBackground = () => {
  bodyElement.classList.remove("grey");
  hamburgerIcon.classList.remove("grey");
  bodyElement.classList.remove("green");
  hamburgerIcon.classList.remove("green");
  bodyElement.classList.remove("red");
  hamburgerIcon.classList.remove("red");
  bodyElement.classList.remove("yellow");
  hamburgerIcon.classList.remove("yellow");
  bodyElement.classList.remove("purple");
  hamburgerIcon.classList.remove("purple");
  bodyElement.classList.add("orange");
  hamburgerIcon.classList.add("orange");
};

// Function Backgroundcolor-Red
const changeClassRedBackground = () => {
  bodyElement.classList.remove("grey");
  hamburgerIcon.classList.remove("grey");
  bodyElement.classList.remove("green");
  hamburgerIcon.classList.remove("green");
  bodyElement.classList.remove("orange");
  hamburgerIcon.classList.remove("orange");
  bodyElement.classList.remove("yellow");
  hamburgerIcon.classList.remove("yellow");
  bodyElement.classList.remove("purple");
  hamburgerIcon.classList.remove("purple");
  bodyElement.classList.add("red");
  hamburgerIcon.classList.add("red");
};

// Function Backgroundcolor-Yellow
const changeClassYellowBackground = () => {
  bodyElement.classList.remove("grey");
  hamburgerIcon.classList.remove("grey");
  bodyElement.classList.remove("green");
  hamburgerIcon.classList.remove("green");
  bodyElement.classList.remove("orange");
  hamburgerIcon.classList.remove("orange");
  bodyElement.classList.remove("red");
  hamburgerIcon.classList.remove("red");
  bodyElement.classList.remove("purple");
  hamburgerIcon.classList.remove("purple");
  bodyElement.classList.add("yellow");
  hamburgerIcon.classList.add("yellow");
};

// Function Backgroundcolor-Purple
const changeClassPurpleBackground = () => {
  bodyElement.classList.remove("grey");
  hamburgerIcon.classList.remove("grey");
  bodyElement.classList.remove("green");
  hamburgerIcon.classList.remove("green");
  bodyElement.classList.remove("orange");
  hamburgerIcon.classList.remove("orange");
  bodyElement.classList.remove("red");
  hamburgerIcon.classList.remove("red");
  bodyElement.classList.remove("yellow");
  hamburgerIcon.classList.remove("yellow");
  bodyElement.classList.add("purple");
  hamburgerIcon.classList.add("purple");
};

// Change colorbackground
greyBackground.addEventListener("click", changeClassGreyBackground);
greenBackground.addEventListener("click", changeClassGreenBackground);
orangeBackground.addEventListener("click", changeClassOrangeBackground);
redBackground.addEventListener("click", changeClassRedBackground);
yellowBackground.addEventListener("click", changeClassYellowBackground);
purpleBackground.addEventListener("click", changeClassPurpleBackground);
colorMenu.classList.toggle("nav-main__blind");


// const changeClassOrangeBackground = () => {
//   bodyElement.classList.add("red-background");
//   colorMenu.classList.toggle("nav-main__blind");
// };

// const changeClassRedBackground = () => {
//   bodyElement.classList.add("red-background");
//   colorMenu.classList.toggle("nav-main__blind");
// };

// const changeClassYellowBackground = () => {
//   bodyElement.classList.add("red-background");
//   colorMenu.classList.toggle("nav-main__blind");
// };

// const changeClassPurpleBackground = () => {
//   bodyElement.classList.add("red-background");
//   colorMenu.classList.toggle("nav-main__blind");
// };

// hamburgerIcon.addEventListener("click", function(){

//   if(hamburgerMenu.className == "open"){
//     hamburgerMenu.className = "";
//   }
//   else{
//     hamburgerMenu.className = "open";
//   }

// });

//document.getElementById("myBtn").addEventListener("click", myFunction);

// function myFunction() {
//   alert ("Hello World!");
// }



// const changeClassBlueBackground = function () {
//     const bodyElement = document.body;
//     bodyElement.classList.add("red-background");
//   };
//   const attachEventToChangeColorButton = function () {
//     const changeColorButton = document.getElementById("change-background-button");
//     changeColorButton.addEventListener("click", function () {
//       changeClassBlueBackground();
//     });
//   };
//   const attachEventToAlertButton = function () {
//     const alertButton = document.getElementById("alert-button");
//     alertButton.addEventListener("click", function () {
//       alert("Hello World!");
//     });
//   };
  
//   attachEventToAlertButton();
//   attachEventToChangeColorButton();

  // Met toggle
//   const toggleColor = function() {
//     const bodyElement = document.body;
//     bodyElement.classList.toggle("red-background");
// };

// const attachEventToChangeColorButton = function() {
//     const changeColorButton = document.getElementById("change-background-button");
//     changeColorButton.addEventListener("click", function() {
//         toggleColor();
//     });
// };

//let toggleNavstatus = false;

// let toggleNav = function(){
//   let getHamburgerMenu = document.querySelector(".nav-main");
//   let getHamburgerMenuUL = document.querySelector(".nav-main ul");
//   let getHamburgerMenuLI = document.querySelectorAll(".nav-main ul li")
//   let getHamburgerMenuA  = document.querySelectorAll(".nav-main ul li a");

//   if (toggleNavstatus === false) {
//     getHamburgerMenu.style = "visible";
//     getHamburgerMenuUL.style.with = "272px";
//     getHamburgerMenuUL.style.opacity = "0.8";   

//     let arrayLength = getHamburgerMenuLinks.length;
//     for (let i=0; i < arrayLength; i++) {
//       getHamburgerMenuLinks[i].style.opacity = "1";
//     }
//     toggleNavstatus = true;
//   }
// };

// toggleNav(); 