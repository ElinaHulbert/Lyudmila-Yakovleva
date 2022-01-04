//   let randomRecipe = Math.floor(Math.random() * data.length);
//   let Image = data.Image;
//   let Name = data.Name;
//   let Ingredients = data.Ingredients;
//   document.getElementsByClassName[randomRecipe].innerHTML = Image;
//   document.getElementsByClassName[randomRecipe].innerHTML = Name;
//   document.getElementsByClassName[randomRecipe].innerHTML = Ingredients;

// function getText(){
// fetch ("../data/quotes.json")
// .then(function(resp) {return resp.json();})
// .then(function(data) {
//   console.log(data);

// })

// };

// var nameM= "Ele"
// var dogWeight=23
// console.log(nameM)

// fetch("../data/quotes.json") .then(response => {console.log(response);});

// function getText() {
//   var id = JSON.parse(findQuery('id'));

//   fetch("../data/quotes.json")
//     .then((response) => response.json())
//     .then((data) => {
//       for (let i = 0; i < data.length; i++) {
//         if (data[i].id === id) {
//           populatePost(data[i]);
//         }
//       }
//     });
// }

// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const openModalButtons = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal= document.querySelector(button.dataset.modalTarget)
//     openModal(modal)
//   })
// })

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal= button.closest('.modal')
//     closeModal(modal)
//   })
// })

// function windowClose() {
//   newWindow.close();
// }

// function openModal(modal) {
//   if (modal == null) return
//   modal.classList.add('active')
//   overlay.classList.add('active')
// }

// function openModal(modal) {
//   if (modal == null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }

// const popOutButton = document.getElementById("myBtn")

// popOutButton.addEventListener("click", popOutNow);

// function popOutNow () {
//   window.open("https://www.w3schools.com");
// }

// function OpenNewWindow(MyPath)
//          {
//             window.open(MyPath,"","toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=657");
//          }

const logo = document.getElementById("path").getTotalLength();

console.log(logo);

document.getElementById("button").addEventListener("click", function () {
  document.querySelector(".bg-popContainer").style.display = "flex";
});

document.getElementById("closer").addEventListener("click", function () {
  document.querySelector(".bg-popContainer").style.display = "none";
});

document.getElementById("closer2").addEventListener("click", function () {
  document.querySelector(".bg-popContainer2").style.display = "none";
});

document.getElementById("button2").addEventListener("click", function () {
  document.querySelector(".bg-popContainer2").style.display = "flex";
});

// window.onload = function(){
//   var divToHide = document.getElementById('bg-popContainer2');
//   document.onclick = function(e){
//     if(e.target.id !== 'bg-popContainer2'){
//       //element clicked wasn't the div; hide the div
//       divToHide.style.display = 'none';
//     }
//   };
// };

// window.onload = function () {
//   document.onclick = function(e){
//     if(e.target.classname != '.bg-popContainer2' || e.target.id != '.bg-popContainer' ){
//       document.querySelector('.bg-popContainer2').style.display = 'none';
//     }
//   }
// }

let id = document.getElementById("bg-popContainer2");

window.onload = function () {
  document.onclick = function (e) {
    if (e.target.id == "bg-popContainer2") {
      id.style.display = "none";
    }
  };
};

let modal = document.getElementById("bg-popContainer");

window.onclick = function (e) {
  console.log(modal);
  if (e.target == modal) {
    console.log(modal);
    console.log(modal.style.display);
    modal.style.display = "none";
  }
};

// let myClasanotherId = document.getElementsById("bg-popContainer")

// window.onload = function(){
//   document.onclick = function(e){
//     if(e.target.anotherId == "bg-popContainer"){
//       idk.style.display = 'none';
//       }
//   };
// };

// let  =  document.getElementById("bg-popContainer2")

// window.onload = function(){
//   document.onclick = function(e){
//     if(e.target.id == "bg-popContainer2"){

//       id.style.display = 'none';
//       }
//   };
// };

// const overlay = document.getElementById('overlay')
// overlay.addEventListener('click', () =>{
// const modals = document.querySelectorAll('.bg-popContainer2').style.display = 'flex';
// modals.forEach(modal=> {
//   closeModal(modal)
// })
// });

function getText() {
  postHeading();
  populatePost(kebab);
}

function postHeading() {
  fetch("../data/quotes.json")
    .then((response) => response.json())
    .then((data) => {
      let randomRecipe = Math.floor(Math.random() * data.length);
      populatePost(data[randomRecipe]);
      console.log(data, data[randomRecipe]);
    });
}

function populatePost(kebab) {
  document.getElementById("incardh").innerHTML += kebab.Name;
  document.getElementById("mainimg").innerHTML += kebab.Image;

  var Ingredient = kebab.Ingredients;
  for (let i = 0; i < Ingredient.length; i++) {
    document.getElementById("incardp").innerHTML += Ingredient[i];
  }
}

//  for(i=0; i<data.length; i++){
//    let hHeader=document.getElementById("incardh");
//    hHeader.innerHTML=data[i].Name;

//    let image=document.getElementById("mainimg");
//    image.innerHTML=data[i].Image;

//    let pText=document.getElementById("incardp");
//    pText.innerHTML=data[i].Ingredients;

// }

function firstCardFunction() {
  var print = document.querySelector("#cardFirst");
  console.log(print);
}

// function main(){
//   load()
//  }

//  function postHeading(){
//   fetch("../data/quotes.json")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data)
//       populatePost(kebab)
//     })
//   }

//   function populatePost(kebab) {
//     document.getElementById("incardh").innerHTML += kebab.Name
//     document.getElementById("mainimg").innerHTML += kebab.Image

//      var Ingredient = kebab.Ingredients
//      for (let i = 0; i < Ingredient.length; i++) {
//        document.getElementById("incardp").innerHTML += Ingredient[i];
//     }
//   }

//  const generateRandomNumber = (min, max) =>  {
//   return Math.floor(Math.random() * (max - min) + min);
//     };
// console.log(generateRandomNumber(1, 4));

//  function getRandomIntInclusive(min, max) {
//   min = Math.ceil(1);
//   max = Math.floor(3);

//   console.log( Math.floor(Math.random() * (max - min + 1) + min)); //The maximum is inclusive and the minimum is inclusive
// }
