function getText() {
  postHeading();
  populatePost();
}

let sessionData = sessionStorage.getItem("id");
console.log(sessionData);

function postHeading() {
  fetch("../data/quotes.json")
    .then((response) => response.json())
    .then((data) => {
      if (sessionData === "card1") {
        populatePost(data[generateRandomNumber(0, 3)]);
        console.log(data);
      }
      if (sessionData === "card2") {
        populatePost(data[generateRandomNumber(3, 6)]);
        console.log(data);
      }
      if (sessionData === "card3") {
        populatePost(data[generateRandomNumber(6, 9)]);
        console.log(data);
      }
      if (sessionData === "card4") {
        populatePost(data[generateRandomNumber(9, 12)]);
        console.log(data);
      }
    });
}

function populatePost(kebab) {
  console.log(kebab);
  document.getElementById("incardh").innerHTML += kebab.Name;
  document.getElementById("mainimg").innerHTML += kebab.Image;

  var Ingredient = kebab.Ingredients;
  for (let i = 0; i < Ingredient.length; i++) {
    document.getElementById("incardp").innerHTML += Ingredient[i];
  }
}

function firstCardFunction() {
  var print = document.querySelector("#cardFirst");
  console.log(print);
}

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
console.log(generateRandomNumber(1, 5));
