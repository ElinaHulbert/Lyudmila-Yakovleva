const logo = document.getElementById("path").getTotalLength();

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

const onClick = (event) => {
  const id = event.srcElement.id;
  sessionStorage.setItem("id", id);
  let sessionData = sessionStorage.getItem("id");
  console.log(sessionData, " sessionData");
};
window.addEventListener("click", onClick);
